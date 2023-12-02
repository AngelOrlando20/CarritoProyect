import { Box, Card, CardContent, Paper, Toolbar, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { HeaderTitle } from "../state/data";

export default function Home() {
    const [title, setTitle] = useAtom(HeaderTitle)
    setTitle("Página Principal")

    return (
        <Box>
            <Toolbar /> 
            <Typography variant="h3">Bienvenido al sistema!</Typography>
        </Box>
    )
}