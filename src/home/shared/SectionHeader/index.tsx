import './style.scss';

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader = ({ eyebrow, heading, align = 'left', className }: SectionHeaderProps) => {
  const classes = ['section-header', `section-header--${align}`, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="eyebrow"><span className="eyebrow-mark" />{eyebrow}</div>
      <h2>{heading}</h2>
    </div>
  );
};

export default SectionHeader;
