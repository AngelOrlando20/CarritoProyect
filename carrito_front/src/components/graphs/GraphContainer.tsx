import { Box, Divider, Paper, Typography } from "@mui/material"

interface GraphContent {
    children?: React.ReactNode,
    title?: string
}

export default function GraphContainer({children, title}: GraphContent) {
    return (
    <Paper
        elevation={3}
        sx={{ 
            borderWidth:'0.015rem', 
            borderRadius:'0.5rem', 
            // borderImage: 'linear-gradient(to bottom, #6f6f6f, #FFFFFF00 50%) 30 stretch',
            borderColor: 'secondary.A100',
         }}
    >
        <Typography variant="h4" fontSize={'1.9rem'} flexWrap={"wrap"} sx={{padding:'0.95rem', marginLeft:'0.95rem'}}>{title}</Typography>
        <Divider sx={{marginBottom:'0.75rem'}}/>
        <Box sx={{ display:'flex', flexDirection:'column', paddingX:'1.95rem' }}>
            {children}
        </Box>
    </Paper>
    )
}