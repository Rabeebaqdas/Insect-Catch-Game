import './App.css';
import React, { useRef, useEffect } from 'react';




function App() {
    const form = useRef(null);
    const input = useRef(null);
    const todosUl = useRef(null);
    const todos = JSON.parse(localStorage.getItem('todos'))

    useEffect(() => {

        if (todos) {
            todos.forEach(todo => addTodo(todo))
        }

        form.current.addEventListener('submit', (e) => {
            e.preventDefault()

            addTodo()
        })

        function addTodo(todo) {
            let todoText = input.current.value


            if (todo) {
                todoText = todo.text
            }

            if (todoText) {
                const todoEl = document.createElement('li')
                if (todo && todo.completed) {
                    todoEl.classList.add('completed')
                }

                todoEl.innerText = todoText

                todoEl.addEventListener('click', () => {
                    todoEl.classList.toggle('completed')
                    updateLS()

                })

                todoEl.addEventListener('contextmenu', (e) => {
                    e.preventDefault()
                    todoEl.remove()
                    updateLS()

                })

                todosUl.current.appendChild(todoEl)

                input.current.value = ''

                updateLS()


            }
        }

        function updateLS() {
            const todosEl = document.querySelectorAll('li')

            const todos = []

            todosEl.forEach(todoEl => {
                todos.push({
                    text: todoEl.innerText,
                    completed: todoEl.classList.contains('completed')
                })
            })

            localStorage.setItem('todos', JSON.stringify(todos))
        }

    }, [])


    return (

        <>
            <h1>todos</h1>
            <form id="form" ref={form}>
                <input type="text" className="input" id="input" placeholder="Enter your todo" autocomplete="off" ref={input} />

                <ul className="todos" id="todos" ref={todosUl}></ul>
            </form>
            <small className='sml1'>Left click to toggle completed.</small><br />
            <small className='sml2'> Right click to delete todo</small>

        </>


    )
}

export default App;

