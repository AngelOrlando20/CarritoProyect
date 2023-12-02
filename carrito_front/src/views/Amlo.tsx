import { Box, Fade, Grow, Toolbar, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { HeaderTitle } from "../state/data";

export default function Amlo() {
    const [title, setTitle] = useAtom(HeaderTitle)
    setTitle("El Pejesaurio");

    return (
        <Grow in={true} timeout={150} mountOnEnter unmountOnExit>
            <Box sx={{display: 'flex', flexDirection:'column', rowGap: '0.5rem'}}>
                <Toolbar/>
                <Typography variant="h3">Vista del Peje.</Typography>
                <img src="https://i.pinimg.com/736x/e2/61/b3/e261b3a152dc196d4c1191a979f07aa3.jpg"/>
            </Box>
        </Grow>
    )
}