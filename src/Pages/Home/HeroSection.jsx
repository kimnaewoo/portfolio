export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">안녕하세요! 김내우입니다!</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Frontend</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adiposicing elit.
            <br />
            Dolorum, quas. Amet soluta assumenda cum?
          </p>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
