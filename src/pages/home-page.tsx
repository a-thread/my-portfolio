import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';
import Highlights from '../components/Highlights';
import Intro from '../components/Intro';
import Navigation from '../components/Navigation';
import Skills from '../components/Skills';

interface HomeLocationState {
    scrollTo?: string;
}

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        const target = (location.state as HomeLocationState | null)?.scrollTo;
        if (!target) return;

        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [location.state]);

    return (
        <>
            <Navigation />
            <Intro />
            <Highlights />
            <Skills />
            <Bio />
            <Feedback />
            <Contact />
            <Footer />
        </>
    )
}

export default HomePage;
