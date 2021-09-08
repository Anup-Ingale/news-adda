import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News'
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <News/>
            </div>
        );
    }
}

export default App;
