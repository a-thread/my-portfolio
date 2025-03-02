import React from "react";
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { IconContext } from "react-icons/lib";

const Footer: React.FC = () => {
    return (
        <footer className='bg-accent w-100 d-flex align-items-center justify-content-center text-primary-light'>
            <p className='mb-0 py-2'>built with</p>
            <IconContext.Provider value={{ color: '#C054BE' }}>
                <div className="px-2"><BsFillSuitHeartFill /></div>
            </IconContext.Provider>
            <p className='mb-0 py-2'>by <a className="text-links" href="https://github.com/a-thread" target="_blank" rel="noreferrer">a-thread</a></p>
        </footer>
    );
};

export default Footer;
