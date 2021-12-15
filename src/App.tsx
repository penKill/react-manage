import React from 'react';
import View from './compoments/View'
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <View/>
            </Router>
        </>
    );
}

export default App;
