import React, { Component } from "react";
import './style.scss';

export default class Feedback extends Component {
    render() {
        return (
            <div id='feedback'>
                <h3 className='text-blue'>Feedback</h3>
                <article className='feedback'>
                    <p>
                        'Aiden is always in a good mood making him a pleasure to work with. Would gladly work with
                        him again.'
                        <br />
                        <br />
                    'He is always on the lookout for someone not feeling good about themselves and not letting
                    them put themselves down - looking out for the diginity of each human being, for sure.'
                        <br />
                        <br />
                    'Aiden is just incredibly kind and patient with everything toward everyone.'
                    </p>
                </article>
            </div>
        )
    }
}
