import './App.css';
import React,{useRef,useEffect,useState} from 'react';




function App() {


    useEffect(()=>{
const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}

    },[])
  
  return (
    
    <div id="panel" className="panel-container">
    <strong>How satisfied are you with our <br />
        customer support performance?</strong>
    <div className="ratings-container">
    <div className="rating">
            <img src="https://cdn-icons.flaticon.com/png/512/1791/premium/1791429.png?token=exp=1650359716~hmac=754b9095022958af781f36e16794e60d" alt="" />
            <small>Unhappy</small>
        </div>

        <div className="rating">
            <img src="https://cdn-icons.flaticon.com/png/512/1791/premium/1791385.png?token=exp=1650357917~hmac=2a25734ec66aa210408791c720ee458d" alt="" />
            <small>Neutral</small>
        </div>

        <div className="rating active">
            <img src="https://cdn-icons.flaticon.com/png/512/166/premium/166538.png?token=exp=1650357966~hmac=fce48b3170ade82b109fa2bc975040f5" alt="" />
            <small>Satisfied</small>
        </div>
    </div>
    <button className="btn" id="send">Send Review</button>
</div>
  )
}

export default App;
