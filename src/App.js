import './App.css';
import React,{useRef,useEffect,useState} from 'react';




function App() {

    const [count,setCount] = useState(false);
    const open = () => {
    
        setCount(true);
 
    }
    const close = () => {
     
        setCount(false);
    }



  return (
    <>
    <button className="nav-btn open-btn"  onClick={open}>
        <i className="fas fa-bars"></i>
    </button>
    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"  className='logo' />
    <p className="text">Mobile Navigation</p>

    <div className={`nav nav-black ${count ? "visible" : ""}`}>
        <div className={`nav nav-red ${count ? "visible" : ""}`}>
            <div className={`nav nav-white ${count ? "visible" : ""}`}>
                <button className="nav-btn close-btn">
                    <i className="fas fa-times" onClick={close}></i>
                </button>
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"  className='logo' />
                <ul className="list">
                    
                <li><a href="#">Teams</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Life at Netflix</a></li>
                <li>
                    <ul>
                        <li><a href="#">Netflix culture memo </a></li>
                        <li><a href="#">Work life balance </a></li>
                        <li><a href="#">Inclusion & diversity </a></li>
                        <li><a href="#">Blog</a></li>
                        
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    </div>
    
</>
  )
}

export default App;
