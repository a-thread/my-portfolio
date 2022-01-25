import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className='bg-additional w-100 d-flex align-items-center justify-content-center text-blue'>
                <p className='mb-0 py-2'>built with <span className='text-green py-2'>♡</span> by a-thread</p>
            </footer>
        )
    }
}