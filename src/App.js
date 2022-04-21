import './App.css';
import React, { useRef, useEffect, useState } from 'react';




function App() {
    const container  = useRef(null);
    const unsplashURL = 'https://source.unsplash.com/random/'
    const [rows] = useState(10);
    
useEffect(()=>{
    for (let i = 0; i < rows * 3; i++) {
        const img = document.createElement('img')
        img.src = `${unsplashURL}${getRandomSize()}`
        container.current.appendChild(img)
    }
    
    function getRandomSize() {
        return `${getRandomNr()}x${getRandomNr()}`
    }
    
    function getRandomNr() {
        return Math.floor(Math.random() * 10) + 300
    }

},[])


    return (

        <><h1>Random Image Feed</h1><div class="container" ref={container}></div></>
    


    )
}

export default App;

