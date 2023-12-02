import { Typography, Box, Toolbar, Fade, IconButton, Stack } from "@mui/material";
import { useAtom } from "jotai";
import { HeaderTitle } from "../state/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { GitHub } from "@mui/icons-material";

import CarritoEarly from '../resources/CarritoEarly.jpg';
import CarritoEnd from '../resources/CarritoEnd.jpg';

export default function Info() {
    const [title, setTitle] = useAtom(HeaderTitle)
    setTitle("Información Adicional")

    return (
        <Fade in={true} timeout={150}>
            <Box sx={{display: 'flex', flexDirection:'column', rowGap: '0.5rem'}}>
                <Toolbar/>
                <Typography variant="h3">Información del Carrito</Typography>
                <img src={CarritoEarly} width={'500rem'} height={'auto'} style={{ borderRadius:'2rem' }}/>
                <Typography paragraph fontStyle={'italic'}>Figura 1. Acomodo del Puente H en el Carrito</Typography>
                <img src={CarritoEnd} width={'500rem'} height={'auto'} style={{ borderRadius: '2rem'}}/>
                <Typography paragraph fontStyle={'italic'}>Figura 2. Acomodo final del Carrito</Typography>
            </Box>
        </Fade>
    )
}