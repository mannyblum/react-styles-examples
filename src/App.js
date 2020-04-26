import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { setThemeColors, createTheme } from './theme/theme';

import Home from './components/Home';
import StylesExample from './components/StylesExample';

class App extends React.Component {

  getColors = () => {
    let colors = {
      secondary: "#4b0082",
      primary: "#FF6347",
    }

    return setThemeColors(colors);
  }

  render() {
    let theme = createTheme(this.getColors());

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/styles">
              <StylesExample />
            </Route>
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
