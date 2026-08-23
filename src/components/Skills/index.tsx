import SectionHeader from '../SectionHeader';
import { skillGroups } from '@shared/data/skills';
import './style.scss';

const Skills = () => {
  return (
    <div id="skills" className="toolkit">
      <div className="wrap">
        <SectionHeader eyebrow="Toolkit" heading="Tools & technologies" />
        <div className="toolkit__grid">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3>{group.label}</h3>
              <div className="toolkit__pills">
                {group.items.map((item) => (
                  <span className="pill" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
