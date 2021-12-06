import React from 'react';
import HelloWorld from './hello-world.js';
import Counter from './Counter.js';
import './app.css'

const App = () => {
    return (
        <div className = 'app'>
            <HelloWorld />
            <Counter />
        </div>
    )
}
export default App