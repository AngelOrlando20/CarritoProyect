import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { FetchIP, IsDarkTheme, isOptMenuOpen } from '../state/data';
import { BottomNavigation, BottomNavigationAction, IconButton, ThemeProvider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import { DrawerTheme } from '../utils/themes';

import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import OptionMenu from './modals/OptionMenu';
import CarController from './modals/CarController';
import { CarControllerAnchor, DrawerWidth } from '../state/data';
import PagesAppBar from './PagesAppBar';

let title_d: string = "Dashboard"; // Carritos Dashboard
const drawerWidth = 300;

export interface DashboardProps {
  content_page: JSX.Element
}

export default function PermanentDrawerLeft({ content_page } : DashboardProps) {
  const navigateTo = useNavigate(); 

  const [drawWidth] = useAtom(DrawerWidth);
  // USE ATOMS
  const [isDark, setIsDark] = useAtom(IsDarkTheme);
  const [ip, setIp] = useAtom(FetchIP);

  
  const dashboardTextColor = 'linear-gradient(90deg, rgb(58.039% 63.922% 72.157%) 0%, rgb(64.252% 69.099% 75.884%) 6.25%, rgb(69.689% 73.63% 79.147%) 12.5%, rgb(74.402% 77.558% 81.975%) 18.75%, rgb(78.444% 80.925% 84.4%) 25%, rgb(81.864% 83.776% 86.452%) 31.25%, rgb(84.717% 86.153% 88.163%) 37.5%, rgb(87.052% 88.099% 89.564%) 43.75%, rgb(88.922% 89.657% 90.686%) 50%, rgb(90.378% 90.87% 91.56%) 56.25%, rgb(91.472% 91.782% 92.217%) 62.5%, rgb(92.256% 92.436% 92.687%) 68.75%, rgb(92.782% 92.874% 93.002%) 75%, rgb(93.101% 93.139% 93.194%) 81.25%, rgb(93.264% 93.276% 93.292%) 87.5%, rgb(93.325% 93.326% 93.328%) 93.75%, rgb(93.333% 93.333% 93.333%) 100% )'

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <PagesAppBar/>
      <ThemeProvider theme={DrawerTheme}>
        <Drawer
          sx={{
            width: drawWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
          open={!isDark}
        >
          <Toolbar sx={{ /*background:'linear-gradient(to top, #0B0F1488, #101721)'*/ marginX:'auto'}}>
              <IconButton 
                size="medium" 
                aria-label='main-logo'
                color='inherit'
                sx={{
                  bgcolor:'secondary.light',
                  borderWidth:'0.5rem',
                  borderColor:'whitesmoke',
                  marginRight:'0.75rem',
                  ':hover': {
                    bgcolor:'primary.main'
                  },
                }}
                >
                <FontAwesomeIcon style={{paddingTop:'0.15rem', paddingRight:'0.07rem'}} size='1x' icon={icon({name: 'rocket'})}/>
              </IconButton>
              <Typography
                  variant="h3"
                  fontSize='1.85rem'
                  fontFamily={'Kumbh Sans'}
                  textAlign={'center'}
                  noWrap
                  component="div"
                  sx={{ background: dashboardTextColor, backgroundClip:'text', color:'transparent', paddingBottom:'0.06rem' }}
              >{title_d}
              </Typography>
          </Toolbar>
          <Divider />
          <List>
            <ListItem key={'Graphs'} disablePadding>
              <ListItemButton 
              sx={{
                ':hover' : {
                  bgcolor: 'secondary.main'
                }
              }}

              onClick={ () => navigateTo("/graph") }
                >
                <ListItemIcon sx={{justifyContent: 'center'}}>
                  <FontAwesomeIcon color='whitesmoke' fixedWidth={false} size="xl" icon={icon({name: 'chart-simple'})}/>
                </ListItemIcon>
                <ListItemText primary={'Gráficas'} secondary={'Vista a las gráficas del proyecto'}/> 
              </ListItemButton>
            </ListItem>
            <ListItem key={'Database'} disablePadding>
              <ListItemButton 
              sx={{
                ':hover' : {
                  bgcolor: 'secondary.main'
                }
              }}
              
              onClick={ () => navigateTo("/data") }>
                <ListItemIcon sx={{justifyContent: 'center'}}>
                  <FontAwesomeIcon color='whitesmoke' fixedWidth={false} size="xl" icon={icon({name: 'database'})}/>
                </ListItemIcon>
                <ListItemText primary={"Datos"} secondary={"Vista a los datos manejados en el carrito"}/>
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem key={'Team'} disablePadding>
              <ListItemButton 
              sx={{
                ':hover' : {
                  bgcolor: 'secondary.main'
                }
              }}
              
              onClick={ () => navigateTo("/team") }>
                <ListItemIcon sx={{justifyContent: 'center'}}>
                  <FontAwesomeIcon color='whitesmoke' fixedWidth={false}  size="xl" icon={icon({name: 'people-group'})}/>
                </ListItemIcon>
                <ListItemText primary={"Equipo"} secondary={"Datos sobre el equipo creador"}/>
              </ListItemButton>
            </ListItem>
            <ListItem key={'Info'} disablePadding>
              <ListItemButton 
              sx={{
                ':hover' : {
                  bgcolor: 'secondary.main'
                }
              }}
              
              onClick={() => navigateTo("/info") }>
                <ListItemIcon sx={{justifyContent: 'center'}}>
                  <FontAwesomeIcon color='whitesmoke' fixedWidth={false} size="xl" icon={icon({name: 'info'})}/>
                </ListItemIcon>
                <ListItemText primary={"Info"} secondary={ "Información sobre el carrito" }/>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <Box sx={{ flexGrow:1 }} />
        </Drawer>
      </ThemeProvider>
      { /* Componente para contenido principal. */ }
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3}}
      >
        {content_page}
      </Box>
      { /* Menu de opciones. */ }
      <OptionMenu/>
      { /* Controles del carrito */ }
      <CarController/>
    </Box>
  );
}