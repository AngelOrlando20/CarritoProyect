import { TextFieldProps, createTheme } from "@mui/material";

// TEMÁTICA DE LA APP.
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    goodButton: true;
  }
}

declare module '@mui/material/FormControl' {
  interface FormControlPropsColorOverrides {
    goodButton: true;
  }
}

declare module '@mui/material/Select' {
  interface SelectPropsColorOverrides {
    goodButton: true;
  }
}

declare module '@mui/material/MenuItem' {
  interface MenuItemPropsColorOverrides {
    goodButton: true;
  }
}

// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
  interface Palette {
    goodButton: Palette['primary'];
  }

  interface PaletteOptions {
    goodButton?: PaletteOptions['primary'];
  }
}

export const DarkTheme = createTheme({
    typography: {
        fontFamily: [
            'Open Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','), 
        h1: {
          fontFamily: [ 'Kumbh Sans', 'Comic Sans MS', 'Times New Roman', 'sans-serif' ].join(','),
          marginBottom: '0.5rem'
        },
        h2: {
          fontFamily: [ 'Kumbh Sans', 'Comic Sans MS', 'Times New Roman', 'sans-serif' ].join(','),
          marginBottom: '0.5rem'
        },
        h3: {
          fontFamily: [ 'Kumbh Sans', 'Comic Sans MS', 'Times New Roman', 'sans-serif' ].join(','),
          marginBottom: '0.5rem'
        },
        h4: {
          fontFamily: [ 'Barlow', 'Comic Sans MS', 'Times New Roman', 'sans-serif' ].join(','),
        },
        h5: {
          fontFamily: [ 'Barlow', 'Comic Sans MS', 'Times New Roman', 'sans-serif' ].join(','),
        },
    },
    palette: {
        primary: {
          main: '#2D0EC1',
          dark: '#592AF5',
          light: '#592AF5',
          contrastText:'whitesmoke',
        },
        secondary: {
          main: '#592AF5',
          dark: '#592AF5',
          light: '#313b4b',
          A100: '#6f6f6f',
          A200: 'whitesmoke',
          A400: 'linear-gradient(to bottom, #FFFFFF, #000000)',
        },
        goodButton: {
          main: '#5d45d3',
          dark: 'slategray',
          light: 'red',
          contrastText: 'whitesmoke',
        },
        warning: {
          main: '#FFFFFF'
        },
        background: {
          default: '#141821', //#222831
          paper: '#141821'
        },
        text: {
          primary: '#EEEEEE',
          secondary: '#EEEEEE88',
        },
        mode: 'dark',
    },
});

export const LightTheme = createTheme({
    typography: {
        fontFamily: [
            'Open Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','), 
        h1: {
          fontFamily: [ 'Kumbh Sans', 'Comic Sans MS', 'Times New Roman', 'sans-serif' ].join(','),
          marginBottom: '0.5rem'
        },
        h2: {
          fontFamily: [ 'Kumbh Sans', 'Comic Sans MS', 'Times New Roman', 'sans-serif' ].join(','),
          marginBottom: '0.5rem'
        },
        h3: {
          fontFamily: [ 'Kumbh Sans', 'Comic Sans MS', 'Times New Roman', 'sans-serif' ].join(','),
          marginBottom: '0.5rem'
        },
        h4: {
          fontFamily: [ 'Barlow', 'Comic Sans MS', 'Times New Roman', 'sans-serif' ].join(',')
        },
        h5: {
          fontFamily: [ 'Barlow', 'Comic Sans MS', 'Times New Roman', 'sans-serif' ].join(',')
        },
        h6: {
          fontFamily: [ 'Barlow', 'Comic Sans MS', 'Times New Roman', 'sans-serif' ].join(',')
        }
    },
    palette: {
        primary: {
          main: '#2D0EC1',
          dark: '#592AF5',
          light: '#592AF5',
          contrastText:'whitesmoke'
        },
        secondary: {
          main: '#592AF5',
          dark: '#592AF5',
          light: 'whitesmoke',
          contrastText:'whitesmoke',
          A100: '#C5C6D0',
          A200: 'slategray',
          A400: 'green'
        },
        warning: {
          main: '#FFFFFF'
        },
        goodButton: {
          main: '#2D0EC1',
          dark: 'blue',
          light: 'red',
          contrastText: 'whitesmoke',
        },
        background: {
          default: '#F1F3F2', //#222831
          paper: '#FBFBFF'
        },
        text: {
          primary: '#0F0F0F', //#0F0F0F
          secondary: '#0F0F0F88',
        },
        mode: 'light',
    },
});

// TEMÁTICA DE LA BARRA DE OPCIONES

export const DrawerTheme = createTheme({
    typography: {
      fontFamily: [
          'Barlow',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','), 
        h6: {
          fontFamily: ['Sarala', 'Sans Serif'].join(',')
        }
  },
  palette: {
      primary: {
        main: '#4526e0',
        contrastText: '#EEEEEE'
      },
      secondary: {
        main: 'rgb(28,40,57)',
        dark: 'rgb(26, 36, 49)',
        light: '#2D0EC1',
        contrastText: '#EEEEEE'
      },
      background: {
        default: '#121417', // #121526
        paper: '#121417' // #121526
      },
      text: {
        primary: '#EEEEEE',
        secondary: '#EEEEEE88',
      },
  },
});