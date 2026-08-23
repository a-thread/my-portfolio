import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import './style.scss';

const ResumePage = () => {
    return (
        <div className="resume-page">
            <Navigation />
            <div className="resume-page__actions">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://docs.google.com/document/d/1sA68wHHfIcCFOtg2DxkTUiGCc7eReWvk16JM7kYO8r0/export?format=pdf"
                    className="btn btn-primary"
                >
                    Download résumé
                </a>
            </div>
            <div className="resume-page__frame-wrap">
                <div className="resume-page__frame">
                    <iframe title="Resume" src="https://docs.google.com/document/d/e/2PACX-1vRIQQCPL2xGJ_e0dKuza_VkhwG38bnqJKSQ8q6j-3X2Z491wZPrUlfXyMpmVQNVRatIxdB4h41zVhga/pub?embedded=true"></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default ResumePage;
