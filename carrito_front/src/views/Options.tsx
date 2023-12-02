import { Box, Fade, Link, Paper, Toolbar, Typography } from "@mui/material";
import old_version from '../resources/old_version.png'
import { useAtom } from "jotai";
import { HeaderTitle } from "../state/data";

export default function Options() {
    const [title, setTitle] = useAtom(HeaderTitle);
    setTitle("Opciones")    

    return (
        <Fade in={true} timeout={150}>
            <Box sx={{display: 'flex', flexDirection:'column', rowGap: '0.5rem', }}>
                <Toolbar></Toolbar>
                <Typography variant="h3">Opciones</Typography>
                <Typography variant="h5">Version Anterior</Typography>
                <img src={old_version} alt="XD" style={{ width: '75%', height: '75%' }}/>
                <Typography variant="h6">Sugerencia: Librería de gráficas? <Link href="https://react-chartjs-2.js.org/" target="_blank" color={'#F6F6F6'}>Aquí</Link></Typography>
                <Typography variant="h6">Awesome ChartJS: <Link href="https://github.com/chartjs/awesome#plugins" target="_blank" color={'#F6F6F6'}>Aquí</Link></Typography>
                <Typography variant="h6">ThreeJS??? AwesomeThreeJS?: <Link href="https://threejs.org/" target="_blank" color={'#F6F6F6'}>Aquí</Link></Typography>
                <Typography variant="h6">Inspiración: <Link href="https://i.pinimg.com/originals/c0/df/df/c0dfdfafd9cb8f3cfbd95d41beae2c54.png" target="_blank" color={'#F6F6F6'}>Aquí</Link></Typography>
                <Typography variant="h6">Documentación de Material UI: <Link href="https://mui.com/material-ui/" target="_blank" color={'#F6F6F6'}>Aquí</Link></Typography>
                <Typography variant="h6">Generador de paletas de colores: <Link href="https://goodpalette.io/592af5-11d6a2-bcb9c7" target="_blank" color={'#F6F6F6'}>Aquí</Link></Typography>
                <Typography variant="h6">Fonts de Google: <Link href="https://fonts.google.com/" target="_blank" color={'#F6F6F6'}>Aquí</Link></Typography>
                <Typography variant="h6">CSS Gradients: <Link href="https://www.w3schools.com/css/css3_gradients.asp" target="_blank" color={'#F6F6F6'}>Aquí</Link></Typography>
            </Box>
        </Fade>
    )
}