import { SITE } from '@shared/data/site';
import './style.scss';

const ResumePage = () => {
    return (
        <div className="resume-page">
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
        </div>
    );
};
export default ResumePage;
