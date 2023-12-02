import { Box, Breadcrumbs, CircularProgress, Container, Divider, Fade, FormControl, InputLabel, Link, MenuItem, Paper, Select, Skeleton, Toolbar, Typography } from "@mui/material";
import {  DistanciaData, DistanciaLoaded, FetchIP, HeaderTitle, PresionData, PresionLoaded, TempLoaded, TemperatureData } from "../state/data";
import { PieChart, BarChart, LineChart } from "@mui/x-charts";

import { Temperatura } from "../model/Temperatura";
import { useEffect, useState } from "react";
import GraphContainer from "../components/graphs/GraphContainer";
import { useAtom } from "jotai";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Presion } from "../model/Presion";
import { Distancia } from "../model/Distancia";


export default function Graphs() {
    // <img style={{ width: 'auto', height: '100%' }} src="https://i.pinimg.com/736x/e2/61/b3/e261b3a152dc196d4c1191a979f07aa3.jpg"/>
    const [title, setTitle] = useAtom(HeaderTitle)
    setTitle("Gráficas")

    const graphWidth = 500;
    const graphHeight = 400;

    const [temperaturaData] = useAtom(TemperatureData);
    const [presionData] = useAtom(PresionData);
    const [distanciaData] = useAtom(DistanciaData);
    const [tempLoaded] = useAtom(TempLoaded);
    const [presionLoaded] = useAtom(PresionLoaded);
    const [distanciaLoaded] = useAtom(DistanciaLoaded);

    const [tempGraphL, setTempGraphL] = useState('10');
    
    return (
        <Fade in={true} timeout={150}>
            <Box className={ "VerticalContentContainer" } sx={{display: 'flex', flexDirection:'column', rowGap: '0.5rem'}}>
                <Toolbar />
                <Typography variant="h3">Vista de Gráficas</Typography>
                <Typography paragraph sx={{ paddingBottom:'2rem' }}>
                    Lista de gráficas que capturan los datos en vivo del carrito siendo
                    la temperatura de alrededor, presión, distancia de contacto, velocidad del carrito,
                    frecuencia del cpu y temperatura del cpu.
                </Typography>
                <Typography variant="h5" sx={{paddingBottom:'0.25rem'}}>
                    Opciones de gráficas
                </Typography>
                <Divider sx={{ mb:'1rem' }} />
                <FormControl color="goodButton" sx={{width:'10rem', mb:'2rem'}}>
                    <InputLabel id="demo-simple-select-label">Longitud de datos</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tempGraphL}
                        label="Longitud de datos"
                        onChange={(event) => { setTempGraphL(event.target.value as string) }}
                    >
                        <MenuItem color="goodButton" value="10">10</MenuItem>
                        <MenuItem color="goodButton" value="20">20</MenuItem>
                        <MenuItem color="goodButton" value="40">40</MenuItem>
                    </Select>
                </FormControl>
                <Grid2 container columnSpacing={5} rowSpacing={4} columns={3}>
                    <Grid2 xs={3} md="auto">
                        <GraphContainer title="Temperaturas">
                            { tempLoaded ?
                                <>
                                <LineChart
                                xAxis={[
                                    { 
                                        data: temperaturaData.slice(-tempGraphL), 
                                        scaleType:'point', 
                                        tickSize: 4,
                                        valueFormatter: (temp: Temperatura) => 
                                        { return new Date(temp.fecha).toLocaleTimeString() + "\n" + new Date(temp.fecha).toLocaleDateString() },
                                    }]}
                                series={[
                                    {
                                    data: temperaturaData.map((temp) => temp.temperatura).slice(-tempGraphL), // temperaturasData 
                                    label: 'Temperaturas',
                                    color: 'orange',
                                    valueFormatter: (temp) => {
                                        return (temp + " °C").toString();
                                    },
                                    },
                                ]}
                                width={graphWidth}
                                height={graphHeight}
                                sx={{
                                    color:'text.primary',
                                }}
                                />
                                <Typography paragraph textAlign={'center'}>Fechas</Typography>
                                </>
                                :
                                <Grid2 alignContent={'center'}
                                 justifyContent={'center'} flexDirection={'column'} container sx={{ width:graphWidth, height:graphHeight }}>
                                    <CircularProgress size={'6rem'} />
                                    <Typography paragraph textAlign={'center'} pt={'2rem'}>Cargando...</Typography>
                                </Grid2>
                            }
                        </GraphContainer>
                    </Grid2>
                    <Grid2 xs={3} md={"auto"}>
                        <GraphContainer title="Presión">
                            { presionLoaded ?
                                <>
                                <LineChart
                                xAxis={[
                                    { 
                                        data: presionData.slice(-tempGraphL), 
                                        scaleType:'point', 
                                        valueFormatter: (value: Presion) => { 
                                            return new Date(value.fecha).toLocaleTimeString() + "\n" + new Date(value.fecha).toLocaleDateString()
                                        },
                                    }]}
                                series={[
                                    {
                                    data: presionData.map((presion) => presion.presion).slice(-tempGraphL), // temperaturasData 
                                    label: 'Presion',
                                    valueFormatter: (dist) => {
                                        return (dist + " hPa").toString();
                                    },
                                    },
                                ]}
                                width={graphWidth}
                                height={graphHeight}
                                sx={{
                                    color:'text.secondary',
                                }}
                                />
                                <Typography paragraph textAlign={'center'}>Fechas</Typography>
                                </>
                                :
                                <Grid2 alignContent={'center'}
                                 justifyContent={'center'} flexDirection={'column'} container sx={{ width:graphWidth, height:graphHeight }}>
                                    <CircularProgress size={'6rem'} />
                                    <Typography paragraph textAlign={'center'} pt={'2rem'}>Cargando...</Typography>
                                </Grid2>
                            }
                        </GraphContainer>
                    </Grid2>
                    <Grid2 xs={3} md={"auto"}>
                        <GraphContainer title="Distancia">
                            { distanciaLoaded ?
                                <>
                                <LineChart
                                xAxis={[
                                    { 
                                        data: distanciaData.slice(-tempGraphL), 
                                        scaleType:'point', 
                                        valueFormatter: (temp: Distancia) => 
                                        { return new Date(temp.fecha).toLocaleTimeString() + "\n" + new Date(temp.fecha).toLocaleDateString()},
                                    }]}
                                series={[
                                    {
                                    data: distanciaData.map((distancia) => distancia.distancia).slice(-tempGraphL), // temperaturasData 
                                    color: 'slategray',
                                    label:'Distancia',
                                    valueFormatter: (dist) => {
                                        return (dist + " cm").toString();
                                    },
                                    },
                                ]}
                                width={graphWidth}
                                height={graphHeight}
                                sx={{
                                    color:'text.primary',
                                }}
                                />
                                <Typography paragraph textAlign={'center'}>Fechas</Typography>
                                </>
                                :
                                <Grid2 alignContent={'center'}
                                 justifyContent={'center'} flexDirection={'column'} container sx={{ width:graphWidth, height:graphHeight }}>
                                    <CircularProgress size={'6rem'} />
                                    <Typography paragraph textAlign={'center'} pt={'2rem'}>Cargando...</Typography>
                                </Grid2>
                            }
                        </GraphContainer>
                    </Grid2>
                </Grid2>
            </Box>
        </Fade>
    )
}