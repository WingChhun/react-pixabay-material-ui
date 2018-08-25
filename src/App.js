import React, {Component} from 'react';
import NavBar from "./components/navbar/NavBar"
import Search from "./components/search/SearchBar.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">

                    <NavBar/>
                    <Search/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
