import React, { Component } from 'react'
import Title from './Title';
import { FaCarAlt, FaComment, FaLock, FaGrinBeam } from 'react-icons/fa'
import './navbar.css'
export default class Services extends Component {
    state = {
        services: [
            {
                icone: <FaCarAlt />,
                title: "מכוניות במצב מעולה",
                info: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            },
            {
                icone: <FaComment />,
                title: " הדעה שלך חשובה ",
                info: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            },
            {
                icone: <FaLock />,
                title: "עסקה בטוחה",
                info: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            },
            {
                icone: <FaGrinBeam />,
                title: "חיוך",
                info: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa"
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
