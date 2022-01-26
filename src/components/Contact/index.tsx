import React, { Component } from "react";
import { BsGithub, BsTelephone } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { MdEmail } from 'react-icons/md';
import './style.scss';

export default class Contact extends Component {
    render() {
        return (
            <div id='contact' className='bg-accent'>
                <h3 className='title'>Contact</h3>

                <article>
                    <div className='contact-info'>
                        {/* Github */}
                        <a className='contact-item' href='https://github.com/a-thread' rel='noreferrer' target='_blank'>
                            <IconContext.Provider
                                value={{ color: 'white' }}>
                                <BsGithub />
                            </IconContext.Provider> github.com/a-thread
                        </a>
                        {/* LinkedIn */}
                        <a className='contact-item' href='https://www.linkedin.com/in/a-thread' rel='noreferrer' target='_blank'>
                            <IconContext.Provider
                                value={{ color: 'white' }}>
                                <FaLinkedinIn />
                            </IconContext.Provider> linkedin.com/in/a-thread/
                        </a>
                        {/* Email */}
                        <a className='contact-item' href='mailto:aiden.threadgoode@gmail.com'>
                            <IconContext.Provider
                                value={{ color: 'bg-accent' }}>
                                <MdEmail />
                            </IconContext.Provider> aiden.threadgoode@gmail.com
                        </a>
                        {/* Phone */}
                        <a className='contact-item' href='tel:2077491341'>
                            <IconContext.Provider
                                value={{ color: 'bg-accent' }}>
                                <BsTelephone />
                            </IconContext.Provider> 207-749-1341
                        </a>
                    </div>
                </article>
            </div>
        )
    }
}
