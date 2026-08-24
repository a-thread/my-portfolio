import SectionHeader from '../SectionHeader';
import { highlights } from '@shared/data/highlights';
import './style.scss';

const Highlights = () => {
  return (
    <div id="impact" className="highlights">
      <div className="wrap">
        <SectionHeader eyebrow="Impact" heading="Career highlights" />
        <div className="grid">
          {highlights.map((item) => (
            <div className="card" key={item.title}>
              <div className={`icon icon--${item.tint}`}>{item.icon}</div>
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
