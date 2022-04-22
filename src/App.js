import './App.css';
import React, { useRef, useEffect } from 'react';




function App() {
    const start_btn = useRef(null);
    const game_container = useRef(null);
    const timeEl = useRef(null);
    const scoreEl = useRef(null);
    const message = useRef(null);
    
    useEffect(()=>{
        const screens = document.querySelectorAll('.screen')
        const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')

        const playGame =() =>{
    
            let second = 0;
            let score = 0;
            let selected_insect = {}
    
    
            start_btn.current.addEventListener('click', () => screens[0].classList.add('up'))
    
            choose_insect_btns.forEach(btn => {
                btn.addEventListener('click', ()=>{
                    const img = btn.querySelector('img')
                    const src = img.getAttribute('src')
                    const alt = img.getAttribute('alt')
                    selected_insect = {src , alt}
                    screens[1].classList.add('up')
                    setTimeout(createInsect , 1000)
                    startGame()
                })
            })
            const startGame = () =>{
                setInterval(increaseTime , 1000)
            }
    
            const increaseTime =()=>{
                let m = Math.floor(second /60);
                let s = second % 60
                m = m < 10 ?   `0${m}`: m;
                s = s < 10 ? `0${s}` : s;
                timeEl.current.innerHTML = `Time: ${m}:${s}`
                second++
            }
            function createInsect (){
                const insect = document.createElement('div')
                insect.classList.add('insect')
                const {x , y} = getRandomLocation()
                insect.style.top = `${y}px`
                insect.style.left = `${x}px`
                insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}"
                style= "transform: rotate(${Math.random() * 360}deg)" />`
    
                insect.addEventListener('click', catchInsect)
    
                game_container.current.appendChild(insect)
            }
    
            const getRandomLocation = ()=>{
                const width = window.innerWidth
                const height = window.innerHeight
                const x = Math.random() * (width - 200) + 100
                const y = Math.random() * (height -200) + 100
                return { x, y}
            }
            function  catchInsect(){
                increaseScore()
                this.classList.add('caught')
                setTimeout(()=> this.remove(), 1000)
                addInsects()
            }
    
            const addInsects = () =>{
                setTimeout(createInsect, 1000)
                setTimeout(createInsect, 1500)
            }
    
            const increaseScore = () =>{
                score++
                if(score > 50){
                    message.current.classList.add('visible')
                }
                scoreEl.current.innerHTML =`Score: ${score}`
            }
           
        
        
        }
        playGame()
    },[])

    

    return (
        <>
       <div className="screen">
        <h1>Catch The Insect</h1>
        <button className="btn" id="start-btn" ref={start_btn}>Play Game</button>
    </div>

    <div className="screen">
        <h1>What is your "favorite" insect?</h1>
        <ul className="insects-list">
            <li>
                <button className="choose-insect-btn">
                    <p>Fly</p>
                    <img src="https://pngimg.com/uploads/fly/fly_PNG3946.png" alt="Fly" />
                </button>
            </li>

            <li>
                <button className="choose-insect-btn">
                    <p>Mosquito</p>
                    <img src="https://pngimg.com/uploads/mosquito/mosquito_PNG18175.png" alt="Mosquito" />
                </button>
            </li>

            <li>
                <button className="choose-insect-btn">
                    <p>Spider</p>
                    <img src="https://pngimg.com/uploads/spider/spider_PNG12.png" alt="Spider" />
                </button>
            </li>

            <li>
                <button className="choose-insect-btn">
                    <p>Roach</p>
                    <img src="https://pngimg.com/uploads/roach/roach_PNG12163.png" alt="Roach" />
                </button>
            </li>
        </ul>
    </div>

    <div className="screen game-container" id="game-container" ref={game_container}>
        <h3 id="time" className="time" ref={timeEl}>Time: 00:00</h3>
        <h3 id="score" className="score" ref={scoreEl}>Score: 0</h3>
        <h5 id="message" className="message" ref={message}>
            Are you annnoyed yet? <br />
            You are playing an impossible game!!
        </h5>
    </div>

    </>
    )
}

export default App;

