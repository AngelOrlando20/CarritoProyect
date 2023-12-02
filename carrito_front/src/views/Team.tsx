import { Box, Fade, Toolbar, Typography } from "@mui/material"
import { useAtom } from "jotai"
import { HeaderTitle } from "../state/data"
import Equipo from '../resources/Equipo.jpeg'

export default function Team() {
    const [title, setTitle] = useAtom(HeaderTitle)
    setTitle("Equipo")

    return (
        <Fade in={true} timeout={150}>
            <Box sx={{display: 'flex', flexDirection:'column', rowGap: '0.5rem'}}>
                <Toolbar/>
                <Typography variant='h3'>Información del equipo</Typography>
                <img src={Equipo} width={800} height={'auto'} style={{ borderRadius:'1.5rem', marginBottom:'0.5rem' }}/>
                <Typography paragraph fontSize={'2.5rem'}>El equipazo: Orlango, Marcongo y Danielongo</Typography>
            </Box>
        </Fade>
    )
}