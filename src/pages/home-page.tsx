import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';
import Highlights from '../components/Highlights';
import Intro from '../components/Intro';
import Navigation from '../components/Navigation';
import Skills from '../components/Skills';

const HomePage = () => {
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
