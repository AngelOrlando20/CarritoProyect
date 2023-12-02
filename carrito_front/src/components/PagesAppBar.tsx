import { GitHub, SportsEsports } from "@mui/icons-material"
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { AppBar, IconButton, Toolbar, Tooltip, Typography } from "@mui/material"
import { AppBarFetchStatus, HeaderTitle, IsDarkTheme, isOptMenuOpen } from "../state/data";

import NetworkBG from '../resources/network.png';

import { useAtom } from "jotai";
import { CarControllerAnchor, DrawerWidth } from "../state/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import SetupFetching from "../utils/fetch";

export default function PagesAppBar() {
    const [title] = useAtom(HeaderTitle);
    const [drawerWidth] = useAtom(DrawerWidth);

    const [isDark, setIsDark] = useAtom(IsDarkTheme);
    const [carControlAnchor, setCarControlAnchor] = useAtom(CarControllerAnchor);
    const [optsOpen, setOptsOpen] = useAtom(isOptMenuOpen);
    const [appBarStatus] = useAtom(AppBarFetchStatus);

    const [fetchData] = SetupFetching();

    return (
      <AppBar 
        color='secondary'
        enableColorOnDark
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, background:'linear-gradient(to right, #2D0EC1, #592AF5)', zIndex:1300 }}
      >
          <img src={NetworkBG} style={{ position: 'absolute', clipPath:`inset(0px 0px 736px 0px)`, backgroundClip:'content-box', background:'linear-gradient(to left, #FFFFFF, #000000)', mixBlendMode:'multiply', opacity:'15%' }}/>
          <Toolbar>
            <Typography className="spacing" sx={{ flexGrow:'1', alignSelf: 'self-start', marginY: 'auto', marginLeft: '0.5rem', paddingBottom: '0.2rem', fontSize:'1.75rem' }} variant='h4'>{title}</Typography>
            <Typography paragraph sx={{opacity:0.6, fontStyle:'italic'}} marginY={0} mr={'3rem'}>
              {appBarStatus}
            </Typography>
            <Tooltip title={"Desplegar controles"}>
              <IconButton
                size="medium"
                aria-label="themeMode"
                color="inherit"
                sx={{color:'white'}}
                disabled
                onClick={(event) => {
                  if (carControlAnchor !== null) {
                    setCarControlAnchor(null)
                  } else {
                    setCarControlAnchor(event.currentTarget)
                  }
                }}
              >
                <SportsEsports sx={{ fontSize:'1.75rem', color:'whitesmoke', opacity:'30%' }}/>
              </IconButton>
            </Tooltip>
            <Tooltip title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}>
              <IconButton
                  size="medium"
                  aria-label="themeMode"
                  color="inherit"
                  onClick={() => setIsDark((theme) => !theme)}
                  sx={{ ml:'0.4rem' }}
              >
                  { isDark ? (
                    <DarkModeOutlinedIcon/>
                  ) : (
                    <LightModeOutlinedIcon/>
                  ) }
              </IconButton>
            </Tooltip>
            <Tooltip title="Refrescar Datos">
              <IconButton
                size="medium"
                aria-label="refresh"
                color="inherit"
                onClick={() => fetchData()}
                sx={{ml:'0.4rem'}}
              >
                  <FontAwesomeIcon icon={icon({name: 'refresh'})} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Link al Github">
              <IconButton size="large" href="https://github.com/AngelOrlando20/CarritoProyect" target="_blank">
                  <GitHub sx={{ color:'white' }}/>
              </IconButton>
            </Tooltip>
          </Toolbar>
      </AppBar>
    )
}