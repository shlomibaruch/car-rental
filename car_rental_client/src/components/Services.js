import React, { Component } from 'react'
import Title from '../components/template/Title';
import { FaCarAlt, FaComment, FaLock, FaGrinBeam } from 'react-icons/fa'
import './css/navbar.css'
export default class Services extends Component {
    state = {
        services: [
            {
                icone: <FaCarAlt />,
                title: "New cars",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                icone: <FaComment />,
                title: " Your opinion is important to us ",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                icone: <FaLock />,
                title: "A safe deal",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                icone: <FaGrinBeam />,
                title: "Excellent service",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title="Services" />
                <div className='services_center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="services_artical">
                            <span>{item.icone}</span>
                            <h2>{item.title}</h2>
                            <p>{item.info}</p>
                        </article>
                    })}

                </div>
            </section>
        )
    }
}
