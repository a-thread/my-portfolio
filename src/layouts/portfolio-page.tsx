import { Component } from 'react';
import data from '../data/projects.json';
import PortCard from '../components/PortCard';
import './style.scss';
import { IProject } from '../components/PortCard/project.model';
import Navigation from '../components/Navigation';
import SideLinks from '../components/SideLinks';

export default class PortfolioPage extends Component {

    render() {
        return (
            <>
                <Navigation />
                <div className='project-container'>
                    <header>
                        <h1>Recent Projects</h1>
                    </header>
                    <div className='portfolio'>
                        {data.map((project: IProject) => {

                            return <PortCard {...project} />
                        })}
                    </div>
                </div>
                <SideLinks />
            </>
        )
    }

};
