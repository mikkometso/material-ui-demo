import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const pink = '#da0789'

const theme = createTheme({
  palette: {
    primary: {
      main: pink,
    },
    secondary: {
      main: red[200],
    },
  },
});

export default theme;