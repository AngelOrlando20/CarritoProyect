import { Box, Button, Divider, InputAdornment, Menu, MenuItem, Modal, TextField, ThemeProvider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { FetchIP, isOptMenuOpen } from "../../state/data";

export default function OptionMenu() {
    const [optsOpen, setOptsOpen] = useAtom(isOptMenuOpen);
    const [ip] = useAtom(FetchIP);

    const [intervalIn, setIntervalIn] = useState(0);

    const handleClose = (event: any) => {
      setOptsOpen(false)
    };

    return (
      <Modal
        open={optsOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ bgcolor:'background.default', 
                  width:'30rem',
                  position: 'absolute',
                  left:'50%',
                  top:'50%',
                  transform:'translate(-50%, -50%)',
                  borderWidth:'0.015rem', 
                  borderColor:'secondary.A100', 
                  borderRadius:'1rem', padding:'3rem'}}
              className={["shadow-lg"].join(" ")}
        >
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Opciones
          </Typography>
          <Typography id="modal-modal-description" fontStyle={'italic'} sx={{ mt: 2 }}>
            Menú para cambiar las opciones del programa.
          </Typography>
          <Divider sx={{mt:'1rem', mb:'3rem'}}/>
          <Typography variant='h3' marginY={'1rem'} fontSize={'1#2D0.25rem'} fontWeight={'600'}>Intervalo para obtener datos</Typography>
          <TextField inputMode="numeric" color={'primary'} id="outlined-basic2" label="Dirección IP"
          value={intervalIn} 
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setIntervalIn(Number(event.target.value));
          }} 
          InputProps={{endAdornment: (<InputAdornment position="end">millisecs</InputAdornment>)}} />
          <Button id="closeOptsButton" variant='contained' color="goodButton" onClick={handleClose} sx={{width:'100%', mt:'0.5rem'}} >Guardar y cerrar</Button>
        </Box>
      </Modal>
    )
}