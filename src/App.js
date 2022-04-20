import './App.css';
import React,{useRef,useEffect,useState} from 'react';




function App() {
    
   
    const a = useRef(null)
    const b = useRef (null)
    const c = useRef (null)
    const d= useRef (null)
    const quiz = useRef(null)
    const question = useRef (null)
    const submit = useRef(null)
    const answer = useRef(null)
    
    let score = 0;
    let currentQuiz = 0;

    const quizData = [
        {
            question: "which language runs in a web browser?",
            a: "java",
            b: "c",
            c: "python",
            d:"javascript",
            correct: "d",
        },
        {
            question: "what does css stand for?",
            a: "central style shetts",
            b: "cascading style sheets",
            c:"cars suvs sailboats",
            d:"cascading simple sheets",
            correct: "b"
        },
        {
            question: "what does Html stand for?",
            a: "central style shetts",
            b: "cascading style sheets",
            c:"Hypertext markup language",
            d:"helicopters terminals motorboats lamborginis",
            correct: "c"
        },
        {
            question: "what was the year when javascript launched?",
            a: "1996",
            b: "1995",
            c:"1994",
            d:"none of the above",
            correct: "b"  
        }
    
    ]

    useEffect(()=>{
        loadQuiz()
    },[])


    const loadQuiz = ()=>{
        deselectAnswers()
        const currentQuizData = quizData[currentQuiz];
        question.current.innerText = currentQuizData.question;
        a.current.innerText=currentQuizData.a
        b.current.innerText=currentQuizData.b;
        c.current.innerText=currentQuizData.c;
        d.current.innerText=currentQuizData.d;


    }
    const deselectAnswers=()=>{
        let answerEle = document.querySelectorAll('.answer')
        answerEle.forEach((element)=>{
            element.checked = false;
        })
      
    }


   

    const getSelected = () =>{
        let answer;
        let answerEle = document.querySelectorAll('.answer')
        
        answerEle.forEach((answerEle)=>{
            if(answerEle.checked){
                answer=answerEle.id;
            }
        })
        return answer;
    }

    const handleChange = () =>{
        const answer = getSelected();

        if(answer){
            if(answer===quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz()
            }
            else{
                quiz.current.innerHTML = `<h2>You answered  ${score} / ${quizData.length}
                questions corretly</h2> 
                <button onClick='location.reload()'>Reload</button>
                `
            }
        }

    }
  return (

        <div className="quiz-container" id="quiz"  ref={quiz}>
            <div className="quiz-header">
                <h2 id="question" ref={question}>Question text</h2>
                <ul>
                    <li>
                        <input type="radio" name="answer" id="a" 
                        className='answer' ref={answer}/>
                        <label htmlFor="a" id='a_text' ref={a}>Question</label>
                    </li>

                    <li>
                        <input type="radio" name="answer" id="b" 
                        className='answer' ref={answer}/>
                        <label htmlFor="b" id='b_text' ref={b}>Question</label>
                    </li>

                    <li>
                        <input type="radio" name="answer" id="c"
                        className='answer' ref={answer}/>
                        <label htmlFor="c" id='c_text' ref={c}>Question</label>
                    </li>

                    <li>
                        <input type="radio" name="answer" id="d"
                        className='answer' ref={answer}/>
                        <label htmlFor="d" id='d_text' ref={d}>Question</label>
                    </li>
                </ul>
            </div>
            <button id='submit' ref={submit} onClick={handleChange}>Submit</button>
        </div>
 
  )
}

export default App;

