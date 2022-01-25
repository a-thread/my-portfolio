import { Component } from 'react';
import './style.scss';

export default class Contact extends Component {
    render() {
        return (
            <div id='contact' className='bg-additional'>
                <h3 className='title'>Contact</h3>

                <article>
                    <div className='contact-info'>
                        {/* Github */}
                        <a className='contact-item' href='https://github.com/a-thread' rel='noreferrer' target='_blank'>
                            <b><i className='fab fa-github'></i></b> github.com/a-thread</a>
                        {/* LinkedIn */}
                        <a className='contact-item' href='https://www.linkedin.com/in/a-thread' rel='noreferrer' target='_blank'>
                            <b><i className='fab fa-linkedin'></i></b> linkedin.com/in/a-thread/</a>
                        {/* Email */}
                        <a className='contact-item' href='mailto:aiden.threadgoode@gmail.com'>
                            <b><i className='fas fa-paper-plane'></i></b> aiden.threadgoode@gmail.com</a>
                        {/* Phone */}
                        <a className='contact-item' href='tel:2077491341'>
                            <b><i className='fas fa-phone'></i></b> 207-749-1341</a>
                    </div>
                </article>
            </div>
        )
    }
}
