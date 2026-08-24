import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { SITE } from '@shared/data/site';
import './style.scss';

const ResumePage = () => {
    return (
        <div className="resume-page">
            <Navigation />
            <div className="actions">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href={SITE.resumeDownloadUrl}
                    className="btn btn-primary"
                >
                    Download résumé
                </a>
            </div>
            <div className="frame-wrap">
                <div className="frame">
                    <iframe title="Resume" src={SITE.resumeEmbedUrl}></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default ResumePage;
