import { Box, Fade, Grow, Toolbar, Typography, TypographyOwnProps, Zoom } from "@mui/material";
import { useAtom } from "jotai";
import { HeaderTitle } from "../state/data";
import TemperatureTable from "../components/graphs/TemperatureTable";
import PressureTable from "../components/graphs/PressureTable";
import DistanceTable from "../components/graphs/DistanceTable";

export default function Data() {
    const [title, setTitle] = useAtom(HeaderTitle)
    setTitle("Datos")

    const headMargs: TypographyOwnProps = {
        mt:'2rem',
        mb:'0.5rem'
    }

    return (
        <Fade in={true} timeout={150}>
            <Box sx={{display: 'flex', flexDirection:'column', rowGap: '0.5rem'}} >
                <Toolbar/>
                <Typography variant="h3">Vista de Datos</Typography>
                <Typography variant="h4" sx={headMargs}>Temperaturas</Typography>
                { // <TableDashboard></TableDashboard> }
                }
                <TemperatureTable/>
                <Typography variant="h4" sx={headMargs}>Presión</Typography>
                <PressureTable/>
                <Typography variant="h4" sx={headMargs}>Distancia</Typography>
                <DistanceTable/>
            </Box>
        </Fade>
    )
}