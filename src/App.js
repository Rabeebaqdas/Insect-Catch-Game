import './App.css';
import React,{useRef,useEffect,useState} from 'react';




function App() {

    const [count,setCount] = useState(false)
    useEffect(()=>{
        const boxesContainer = document.getElementById('boxes')

    
        function createBoxes() {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    const box = document.createElement('div')
                    box.classList.add('box')
                    box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
                    boxesContainer.appendChild(box)
                }
            }
        }
        
        createBoxes()

    },[])

    const handleChange = () => {
        setCount(!count);
    }


  return (
    <>
    <button className="magic" id="btn" onClick={handleChange}>Magic 🎩</button>
    <div className={`boxes ${count ? "big" : '' }`} id="boxes"></div>

    </>
  )
}

export default App;
