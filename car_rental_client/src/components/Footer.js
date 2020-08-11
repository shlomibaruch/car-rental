import React from 'react'
import '../components/css/navbar.css';
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import Title from './template/Title';
export default function Footer() {
    return (
        <div className='footer-container'>
            <FaFacebookSquare className='footer-contact' color='blue' fontSize='45px' />
            <AiFillInstagram className='footer-contact' color='red' fontSize='45px' />
            <AiFillGithub className='footer-contact' color='white' fontSize='45px'/>
            <AiFillLinkedin className='footer-contact' color='#1e1ee0' fontSize='45px'/>
            <div className='footer-logo'>
                <Title title='Car Rental ' />
            </div>
        </div>
    )
}
