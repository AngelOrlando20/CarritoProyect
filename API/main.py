import mysql.connector
from clasescarrito import *

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from time import sleep
import time
from datetime import datetime

#### SETUP DE SENSORES Y SERVIDOR

origins = [
    "http://localhost:3000",
    "https://frontend-dot-lucky-processor-406015.ue.r.appspot.com",
    "https://lucky-processor-406015.ue.r.appspot.com",

]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

mydb = mysql.connector.connect(
  host="34.136.85.3",
  user="root",
  password="DOM2023",
  database="Carrito"
)

def setup():
    pass
    # GPIO.setmode(GPIO.BCM)
    # GPIO_TRIGGER = 23
    # GPIO_ECHO    = 24
    # GPIO.setup(GPIO_TRIGGER,GPIO.OUT)
    # GPIO.setup(GPIO_ECHO,GPIO.IN)
    # GPIO.output(GPIO_TRIGGER, False)

# bmp = BMP280(port=1, mode=BMP280.FORCED_MODE, oversampliuvicorn main:app --reloadng_p=BMP280.OVERSAMPLING_P_x16, oversampling_t=BMP280.OVERSAMPLING_T_x1,
#             filter=BMP280.IIR_FILTER_OFF, standby=BMP280.T_STANDBY_1000)

## RUTA PARA OBTENER TEMPERATURAS
@app.get("/temperaturas")
async def root():
    temperaturas=[]
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM Temperatura")
    temperaturas_db = mycursor.fetchall()
    mydb.commit()
    for temperatura in temperaturas_db:
        t=Temperatura(temperatura[0],temperatura[1],temperatura[2])
        temperaturas.append(t)
    return temperaturas

# RUTA PARA OBTENER PRESION
@app.get("/presion")
async def get_presion():
    presiones = []
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM Presion")
    presiones_db = mycursor.fetchall()
    mydb.commit()
    for presion in presiones_db:
        p = Presion(presion[0], presion[1], presion[2])
        presiones.append(p)
    return presiones

# RUTA PARA OBTENER DISTANCIA
@app.get("/distancia")
async def get_distancia():
    distancias = []
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM Distancia")
    distancias_db = mycursor.fetchall()
    mydb.commit()
    for distancia in distancias_db:
        d = Distancia(distancia[0], distancia[1], fecha=distancia[2])
        distancias.append(d)
    return distancias

## ESTO DEJARLO EN PAZ, NO SE PA QUE ES XD
def insert_temperatura(temperatura):
    mycursor = mydb.cursor()
    sql = "INSERT INTO Temperatura (temperatura) VALUES (%s)"
    val = (temperatura,)
    mycursor.execute(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "record inserted.")

def find_temperaturas():
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM Temperatura")
    temperaturas_db = mycursor.fetchall()
    for temperatura in temperaturas_db:
        t=Temperatura(temperatura[0],temperatura[1],temperatura[2])
        print(t.temperatura)
