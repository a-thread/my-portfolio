import { Component } from 'react';
import data from '../utils/data/projects.json';
import PortCard from '../components/PortCard';
import './style.scss';
import { IProject } from '../components/PortCard/project.model';
import Navigation from '../components/Navigation';
import SideLinks from '../components/SideLinks';
import Footer from '../components/Footer';

export default class PortfolioPage extends Component {

    render() {
        return (
            <>
                <Navigation />
                <div className='project-container bg-additional pb-2'>
                    <header className='text-center d-flex justify-content-center'>
                        <h1 className='text-blue text-center'>Recent Projects</h1>
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
    }

};
