import './App.css';
import React, { useRef, useEffect, useState } from 'react';




function App() {
    const testimonial = useRef(null)
    const userImage = useRef(null)
    const username = useRef(null)
    const role = useRef(null)


    const testimonials = [
        {
            name: 'Miyah Myles',
            position: 'Marketing',
            photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
        },
        {
            name: 'June Cha',
            position: 'Softwere Engr',
            photo: 'https://randomuser.me/api/portraits/women/44.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
        },
        {
            name: 'Iida Niskanen',
            position: 'Data Entry',
            photo: 'https://randomuser.me/api/portraits/women/68.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
        },
        {
            name: 'Jhonathan Nunfiez',
            position: 'Graphic Designer',
            photo: 'https://randomuser.me/api/portraits/women/43.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
        },
        {
            name: 'Sasha Ho',
            position: 'Accountant',
            photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
        },
        {
            name: 'Veeti Seppanen',
            position: 'Director',
            photo: 'https://randomuser.me/api/portraits/men/97.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
        }
    ]

    let idx = 0

    useEffect(() => {

        const  upadteTestimonial = () => {

            const { name, position, photo, text } = testimonials[idx]

            testimonial.current.innerHTML = text
            userImage.current.src = photo
            username.current.innerHTML = name
            role.current.innerHTML = position

            idx++

            if (idx > testimonials.length - 1) {
                idx = 0
            }
        }

        setInterval(upadteTestimonial, 10000)


    }, [idx])



    return (

        <div className="testimonial-container">
            <div className="progress-bar"></div>
            <div className="fas fa-quote-right fa-quote"></div>
            <div className="fas fa-quote-left fa-quote"></div>
            <p className="testimonial" ref={testimonial}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.
                Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam
                nemo ratione id, necessitatibus ab debitis nulla harum. Optio corrupti dolorum debitis incidunt est
                architecto voluptas aut, nobis amet corporis accusamus.
            </p>
            <div className="user">
                <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="user" className="user-image" ref={userImage} />
                <div className="user-details">
                    <h4 className="username" ref={username} >Eva Adams</h4>
                    <p className="role" ref={role} >Blockchain Developer</p>
                </div>
            </div>
        </div>


    )
}

export default App;

