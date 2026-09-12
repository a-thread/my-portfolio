import SectionHeader from "../../shared/SectionHeader";
import { skillGroups } from "./data";
import "./style.scss";

const Skills = () => {
  return (
    <div id="skills" className="toolkit">
      <div className="wrap">
        <SectionHeader eyebrow="Toolkit" heading="Tools & technologies" />
        <div className="grid">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3>{group.label}</h3>
              <div className="pills">
                {group.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
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
