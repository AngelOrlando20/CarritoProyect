import { useAtom } from "jotai";
import {  AppBarFetchStatus, DistanciaData, DistanciaLoaded, FetchIP, PresionData, PresionLoaded, TempLoaded, TemperatureData } from "../state/data";
import { useEffect, useRef, useState } from "react";
import { Temperatura } from "../model/Temperatura";
import { Presion } from "../model/Presion";
import { Distancia } from "../model/Distancia";
import axios from "axios";

export default function SetupFetching() {
    const [fetchIP] = useAtom(FetchIP)

    const [temperaturaData, setTemperaturaData] = useAtom(TemperatureData);
    const [presionData, setPresionData] = useAtom(PresionData);
    const [distanciaData, setDistanciaData] = useAtom(DistanciaData);

    const [tempLoaded, setTempLoaded] = useAtom(TempLoaded);
    const [presionLoaded, setPresionLoaded] = useAtom(PresionLoaded);
    const [distanciaLoaded, setDistanciaLoaded] = useAtom(DistanciaLoaded);

    const [fetchStatus, setFetchStatus] = useAtom(AppBarFetchStatus);

    const placeholderTemp: Temperatura[] = [ { id:0, temperatura:0, fecha: new Date(0) } ]
    const placeholderPresion: Presion[] = [ {id:0, presion:0, fecha: new Date()} ]
    const placeholderDistancia: Distancia[] = [ { id:0, distancia:0, fecha: new Date(0) } ]

    async function getTemperaturas() {
        try {
            axios.get<Temperatura[]>(fetchIP + "temperaturas").catch<any>(
                (error) => { 
                    if (axios.isAxiosError(error)) {
                        console.log("ERROR de AXIOS: No se pudieron obtener datos del servidor.")
                        setFetchStatus("ERROR en AXIOS: Los datos no pudieron ser descargados")
                        console.log(error)
                    }
                 }
            ).then((response) => {
                if (response === undefined) {
                    setTemperaturaData(placeholderTemp)
                } else {
                    setTemperaturaData(response.data)
                }
            })
        } catch {
            console.log("ERROR: No se pudieron obtener los datos del servidor.")
            setTemperaturaData(placeholderTemp)
        }
    }

    async function getPresion() {
        try {
            axios.get<Presion[]>(fetchIP + "presion").catch<any>(
                (error) => { 
                    if (axios.isAxiosError(error)) {
                        console.log("ERROR de AXIOS: No se pudieron obtener datos del servidor.")
                        setFetchStatus("ERROR en AXIOS: Los datos no pudieron ser descargados")
                        console.log(error)
                    }
                 }
            ).then((response) => {
                console.log(response)
                if (response === undefined) {
                    setPresionData(placeholderPresion)
                } else {
                    setPresionData(response.data)
                }
            })
        } catch {
            console.log("ERROR: No se pudieron obtener los datos del servidor.")
            setPresionData(placeholderPresion)
        }
    }

    async function getDistancias() {
        try {
            axios.get<Distancia[]>(fetchIP + "distancia").catch<any>(
                (error) => { 
                    if (axios.isAxiosError(error)) {
                        console.log("ERROR de AXIOS: No se pudieron obtener datos del servidor.")
                        setFetchStatus("ERROR en AXIOS: Los datos no pudieron ser descargados")
                        console.log(error)
                    }
                 }
            ).then((response) => {
                if (response === undefined) {
                    setDistanciaData(placeholderDistancia)
                } else {
                    setDistanciaData(response.data)
                }
            })
        } catch {
            console.log("ERROR: No se pudieron obtener los datos del servidor.")
            setDistanciaData(placeholderDistancia)
        }
    }

    async function allFetch() {
        setTempLoaded(false);
        setDistanciaLoaded(false);
        setPresionLoaded(false);
        getTemperaturas()
        getPresion()
        getDistancias()
        var end= new Date(Date.now()); 
        setFetchStatus("Los datos fueron actualizados a las " + end.toLocaleTimeString())
    }

    let fetchLock: NodeJS.Timer;
    // CASE: La temperatura se obtiene.
    useEffect(() => {
        fetchLock = setInterval(() => {
            allFetch();
        }, 5000);
        console.log("IMPRIMIO UNA VEZ?")
    }, [])

    // CASE: Los datos de temperatura se re-colocan.
    useEffect(() => {
        if (temperaturaData.length === 0) return;
        setTempLoaded(true);
    }, [temperaturaData])

    // CASE: Los datos de distancia se re-colocan.
    useEffect(() => {
        if (distanciaData.length === 0) return;
        setDistanciaLoaded(true);
    }, [distanciaData])

    // CASE: Los datos de presión se re-colocan.
    useEffect(() => {
        if (presionData.length === 0) return;
        setPresionLoaded(true);
    }, [presionData])

    return [allFetch]
}