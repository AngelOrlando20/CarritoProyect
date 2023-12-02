import RPi.GPIO as GPIO
import time
from datetime import datetime
from bmp_280 import BMP280  # Asumiendo que bmp_280 es un módulo existente
import mysql.connector  # Asumiendo que usas MySQL para la base de datos

GPIO.setmode(GPIO.BCM)
GPIO_TRIGGER = 23
GPIO_ECHO = 24
GPIO.setup(GPIO_TRIGGER, GPIO.OUT)
GPIO.setup(GPIO_ECHO, GPIO.IN)
GPIO.output(GPIO_TRIGGER, False)

READ_INTERVAL = 4

sFileStamp = time.strftime('%Y%m%d%H')
sFileName = 'out/' + sFileStamp + '.txt'
f = open(sFileName, 'a')
f.write('TimeStamp,Distancia,Presion,Temperatura\n')
print("Inicia la toma de datos")

# Configuración de la base de datos MySQL
mydb = mysql.connector.connect(
    host="34.136.85.3",
    user="root",
    password="DOM2023",
    database="Carrito"
)

try:
    while True:
        GPIO.output(GPIO_TRIGGER, True)
        time.sleep(0.00001)
        GPIO.output(GPIO_TRIGGER, False)
        start = time.time()
        while GPIO.input(GPIO_ECHO) == 0:
            start = time.time()
        stop = 0
        while GPIO.input(GPIO_ECHO) == 1:
            stop = time.time()
        elapsed = stop - start
        distancia = (elapsed * 34300) / 2

        # Lecturas del sensor BMP280
        bmp = BMP280(port=1, mode=BMP280.FORCED_MODE, oversampling_p=BMP280.OVERSAMPLING_P_x16,
                     oversampling_t=BMP280.OVERSAMPLING_T_x1, filter=BMP280.IIR_FILTER_OFF, standby=BMP280.T_STANDBY_1000)
        presion = bmp.read_pressure()
        temperatura = bmp.read_temperature()

        # Registro de datos en el archivo
        sTimeStamp = time.strftime('%Y%m%d%H%M%S')
        f.write(f'{sTimeStamp},{distancia},{presion},{temperatura}\n')
        print(f'{sTimeStamp} Distancia: {distancia} Presion: {presion} Temperatura: {temperatura}')

        # Inserción de datos en la base de datos MySQL
        mycursor = mydb.cursor()
        sql = "INSERT INTO Distancia (distancia, fecha) VALUES (%s, now())"
        sql1 = "INSERT INTO Presion (presion, fecha) VALUES (%s, now())"
        sql2 = "INSERT INTO Temperatura (temperatura, fecha) VALUES (%s, now())"
        mycursor.execute(sql, (distancia,))
        mycursor.execute(sql1, (presion,))
        mycursor.execute(sql2, (temperatura,))
        mydb.commit()
        print(mycursor.rowcount, "record inserted.")

        # Espera de 4 segundo antes de la próxima lectura
        time.sleep(READ_INTERVAL)

        # Verificación de cambio de día para crear un nuevo archivo
        sTmpFileStamp = time.strftime('%Y%m%d%H')
        if sTmpFileStamp != sFileStamp:
            f.close()
            sFileName = 'out/' + sTmpFileStamp + '.txt'
            f = open(sFileName, 'a')
            sFileStamp = sTmpFileStamp
            print("Escribiendo Lectura en Archivo:",sFileName)

except KeyboardInterrupt:
    print('\n' + 'Termina la captura de datos.' + '\n')
    f.close()
    GPIO.cleanup()
