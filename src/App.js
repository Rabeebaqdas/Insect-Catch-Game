import './App.css';
import React,{useRef,useEffect,useState} from 'react';




function App() {

 
    useEffect(()=>{
    const codes = document.querySelectorAll('.code')


codes[0]?.focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
            if(idx == 5) {
                idx = 0;
            }
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
            if(idx == 0) {
                idx = 5;
            }
        }
    })
})

},[])

  return (
    
    <div className="container">
        <h2>Verify your Account</h2>
        <p>
            We emailed you the six digit code to cool_guy@gmail.com <br />Enter the code below to confirm your email address.
        </p>
        <div className="code-container">
            
        <input type="number" className="code" min="0" max="9" placeholder='0' required/>
        <input type="number" className="code" min="0" max="9" placeholder='0' required/>
        <input type="number" className="code" min="0" max="9" placeholder='0' required/>
        <input type="number" className="code" min="0" max="9" placeholder='0' required/>
        <input type="number" className="code" min="0" max="9" placeholder='0' required/>
        <input type="number" className="code" min="0" max="9" placeholder='0' required/>
        </div>
        <small className="info">
            This is design only. We didn't actually send
            you an email as we don't have your email, right?
        </small>
    </div>

  )
}

export default App;
