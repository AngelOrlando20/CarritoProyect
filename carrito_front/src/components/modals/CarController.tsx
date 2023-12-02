import { KeyboardDoubleArrowDown, KeyboardDoubleArrowUp } from "@mui/icons-material";
import { Button, ButtonGroup, Divider, Paper, Popper, Slider, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { useState } from "react";
import { CarControllerAnchor } from "../../state/data";

export default function CarController() {
    const [controllerAnchor] = useAtom(CarControllerAnchor);
    const [velocidad, setVelocidad] = useState<number>(0);

    const handleChange = (_: Event, newValue: number | number[]) => setVelocidad(newValue as number);

    return (
      <Popper open={Boolean(controllerAnchor)} anchorEl={controllerAnchor}>
        <Paper elevation={4} sx={{ zIndex:2300, px:'2rem', py:'1rem', mt:'1.5rem', mr:'1rem', borderRadius:'1.2rem' }}>
          <Stack direction={'column'}>
            <ButtonGroup variant='contained' sx={{ mb: '0.75rem'}}>
              <Button endIcon={ <KeyboardDoubleArrowUp/> }>Adelante</Button>
              <Button endIcon={ <KeyboardDoubleArrowDown/> }>Retroceder</Button>
              <Button>Frenar</Button>
            </ButtonGroup>
            <Divider sx={{ marginY:'0.25rem' }}/>
            <Stack direction='column' sx={{ ml:'1.5rem', mt:'0.5rem'}} flexGrow={1}> 
              <Typography variant='h5' align='center' sx={{ width:'100%' }}>Velocidad</Typography>
              <Slider value={velocidad} onChange={handleChange}></Slider>
              <Typography paragraph align='center' fontSize={'1.2rem'} sx={{ width:'100%', height:'100%', verticalAlign:'middle' }}>{velocidad}</Typography>
            </Stack>
          </Stack>
        </Paper>
      </Popper>
    )
}