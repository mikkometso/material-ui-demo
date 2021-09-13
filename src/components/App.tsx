import React from 'react';
import Header from './ui/Header/Header';
import { ThemeProvider }  from '@material-ui/styles';
import theme from './ui/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <div className="App">Hello world</div>
    </ThemeProvider>
  );
}

export default App;
