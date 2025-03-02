import React from "react";
import data from '@shared/data/data.json';
import PortCard from '../components/PortCard';
import './style.scss';
import { IProject } from '../components/PortCard/project.model';
import Navigation from '../components/Navigation';
import SideLinks from '../components/SideLinks';
import Footer from '../components/Footer';

const PortfolioPage: React.FC = () => {
    return (
        <>
            <Navigation />
            <div className='project-container bg-accent p-2'>
                <header className='d-flex justify-content-center'>
                    <h1 className='text-secondary-light text-center'>Recent Projects</h1>
                </header>
                <div className='portfolio'>
                    {data.map((project: IProject) => {

                        return <PortCard {...project} />
                    })}
                </div>
            </div>
            <SideLinks />
            <Footer />
        </>
    )
};
export default PortfolioPage;

