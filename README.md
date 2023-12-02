# Proyecto Carrito - IoT

**Sitio web del Dashboard:** https://frontend-dot-lucky-processor-406015.ue.r.appspot.com/graph

## Introducción
La Internet de las cosas (IoT) describe la red de objetos físicos ("cosas") que llevan incorporados sensores, software y otras tecnologías con el fin de conectarse e intercambiar datos con otros dispositivos y sistemas a través de Internet. Estos dispositivos van desde objetos domésticos comunes hasta herramientas industriales sofisticadas. Con más de 7 mil millones de dispositivos IoT conectados en la actualidad, los expertos prevén que este número aumentará a 10 mil millones para el 2020 y 22 mil millones para el 2025. 

**Capturar los datos.** A través de sensores, los dispositivos de IoT capturan datos desde sus entornos. Esto podría ser algo tan simple como la temperatura o tan complejo como un feed de video en tiempo real.
**Compartir los datos.** Mediante conexiones de red disponibles, los dispositivos IoT envían estos datos a un sistema en la nube pública o privada (dispositivo-sistema-dispositivo), a otro dispositivo (dispositivo-dispositivo), o los almacenan localmente como se indica para el procesamiento edge.
**Procesar los datos.** En este punto, el software se programa para que haga algo en base a esos datos –como encender un ventilador o enviar una advertencia–.
**Actuar a partir de los datos.** Se analizan los datos acumulados desde todos los dispositivos de una red de IoT. Esto brinda información estratégica poderosa para fundamentar acciones y decisiones de negocio confiables.


## Propósito del XRover
Algunos de los propósitos que puede servir el XRover están:
* Medir las distancias en caminos estrechos y curvos en áreas estrechas e inaccesibles para una persona.
* Medir las temperaturas de forma móvil en áreas con temperaturas altas.

## Implementación de Materiales (Hardware)
Estos son los materiales utilizados en el armado del XRover:
* Raspberry pi 3
* Sensor de distancia hrc
* Sensor bmp-280
* 5 pilas de 5v
* Protoboard
* Pila portátil
* Puente H
* 2 resistencias (1k y 2k)
* Jumpers hembra-mach, macho-macho y hembra-hembra
* Cinchos (para amarrar batería portátil y Raspberry)
* Hilo (para amarrar protoboard y pilas)
* 2 motores
* 2 Llantas pequeñas
* 3 cargadores de pilas MicroSD
* MicroSD
* Adaptador HDMI
* Chasis
* 1 candado
Extra: los aparatos que utilizamos en laboratorio (Monitor, VGA, Teclado, Mouse, cable Ethernet)


## Software (NodeRed, Google Cloud, Framework React, Lenguajes MySql, Python, Javascript, Html, CSS y librerías utilizadas)
Softwares:
* Node-red
* Mosquitto
* Real VNC
* Google Cloud
Framework:
* React
Lenguajes:
* Python
* MySQL
* Javascript
* HTML
* CSS
Librerías utilizadas:
* mysql.connector
* fastapi
* bmp_280
* RPi.GPIO
* gunicorn


## Problemas encontrados durante la implementación
* Se nos desoldó el carrito y tuvimos que volver a soldarlo varias veces.
* Tuvimos que volver a acomodar el carrito.
* El peso de la batería era superior por lo que teníamos que hacer contrapeso y lo conseguimos poniéndole un candado.
Los motores no estaban bien conectados y con ayuda de la maestra descubrimos que estaban mal conectados los pines.

## Referencias
* ¿Qué es el Internet de las cosas (IoT)? (2014). Oracle.com. https://www.oracle.com/mx/internet-of-things/what-is-iot/
*‌ ¿Qué es IoT y cómo funciona? | SAP. (2021). SAP. https://www.sap.com/latinamerica/products/artificial-intelligence/what-is-iot.html#:~:text=Internet%20de%20las%20cosas%20(IoT)%20es%20una%20red%20de%20objetos,hacia%20otras%20cosas%20y%20sistemas%E2%80%93.
* Repositorio maestra Paloma Vilchis. (2023). Github. https://github.com/PalomaVilchis
* RealVNC. https://www.realvnc.com/es/
* Node-Red. https://nodered.org/
* Google Cloud. https://cloud.google.com/?hl=es
* Mosquitto. https://mosquitto.org/
