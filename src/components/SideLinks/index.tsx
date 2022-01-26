import React, { Component } from 'react';
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { MdEmail } from 'react-icons/md';
import './style.scss';

export default class SideLinks extends Component {
    render() {
        return (
            <div className='btn-group-vertical bg-accent custom-shadow text-center'>
                {/* Github */}
                <a href='https://github.com/a-thread' aria-label='github' rel='noreferrer' target='_blank'>
                    <button type='button' className='btn text-center' aria-label='link to github page'>
                        <IconContext.Provider
                            value={{ color: 'bg-accent' }}>
                            <BsGithub />
                        </IconContext.Provider>
                    </button>
                </a>

                {/* LinkedIn */}
                <a href='https://www.linkedin.com/in/a-thread' aria-label='linkedin' rel='noreferrer' target='_blank'>
                    <button type='button' className='btn text-center' aria-label='link to linkedin page'>
                <IconContext.Provider
                        value={{ color: 'bg-accent' }}>
                        <FaLinkedinIn />
                    </IconContext.Provider>
                    </button>
                </a>

                {/* Email */}
                <a href='mailto:aiden.threadgoode@gmail.com' aria-label='email' rel='noreferrer' target='_blank'>
                    <button type='button' className='btn text-center' aria-label='email address for Aiden'>
                    <IconContext.Provider
                        value={{ color: 'bg-accent' }}>
                        <MdEmail />
                    </IconContext.Provider>
                    </button>
                </a>
            </div>
        )
    }
}
