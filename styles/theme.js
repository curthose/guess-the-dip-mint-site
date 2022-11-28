import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#110c02',
            paper: '#ccc',
          },
        text: {
        primary: '#fff',
        secondary: '#f7a500',
        },
      },
     /* components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              backgroundImage:'url(../public/bg.jpg)',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              height: "100%"
            }
          }
        }
      }*/
});

theme = responsiveFontSizes(theme);

export default theme;
