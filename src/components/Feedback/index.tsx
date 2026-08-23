import "./style.scss";

const testimonials = [
  "Aiden is always in a good mood, making him a pleasure to work with. Would gladly work with him again.",
  "He is always on the lookout for someone not feeling good about themselves — looking out for the dignity of every person on the team.",
  "Aiden is just incredibly kind and patient with everything, toward everyone.",
];

const QuoteMark = () => (
  <svg width="26" height="20" viewBox="0 0 24 24" className="testimonials__quote-mark">
    <path
      d="M9 7c-2.8 0-4.8 2.2-4.8 5.4 0 2.6 1.7 4.6 3.9 4.6.4 0 .7-.1 1-.2-.4 2-2 3.4-4.1 3.8v2c3.6-.5 6.4-3.1 6.4-7V12c0-2.8-1.1-5-2.4-5Zm10 0c-2.8 0-4.8 2.2-4.8 5.4 0 2.6 1.7 4.6 3.9 4.6.4 0 .7-.1 1-.2-.4 2-2 3.4-4.1 3.8v2c3.6-.5 6.4-3.1 6.4-7V12c0-2.8-1.1-5-2.4-5Z"
      fill="currentColor"
    />
  </svg>
);

const Feedback = () => {
  return (
    <div id="feedback" className="testimonials">
      <div className="wrap">
        <div className="testimonials__head">
          <div className="eyebrow"><span className="eyebrow-mark" />Testimonials</div>
          <h2>Kind words from colleagues</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((quote) => (
            <div className="testimonials__card" key={quote}>
              <QuoteMark />
              <p>{quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
