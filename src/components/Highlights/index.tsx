import SectionHeader from '../SectionHeader';
import { highlights } from '@shared/data/highlights';
import './style.scss';

const Highlights = () => {
  return (
    <div id="impact" className="highlights">
      <div className="wrap">
        <SectionHeader eyebrow="Impact" heading="Career highlights" />
        <div className="highlights-grid">
          {highlights.map((item) => (
            <div className="highlights-card" key={item.title}>
              <div className={`highlights-icon highlights-icon--${item.tint}`}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
