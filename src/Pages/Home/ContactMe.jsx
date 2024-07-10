export default function ContactMe() {
  const submit = () => {
    alert(' 준비중입니다 ! ');
  };
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact Me</h2>
        <p className="text-lg">감사합니다. :)</p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input type="text" className="contact--input text-md" name="first-name" id="first-name" required />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input type="text" className="contact--input text-md" name="last-name" id="last-name" required />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input type="email" className="contact--input text-md" name="email" id="email" required />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone-number</span>
            <input type="number" className="contact--input text-md" name="phone-number" id="phone-number" required />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select Project</option>
            <option>Project Movie</option>
            <option>Project MyPortfolio</option>
            <option>Project Fit Club</option>
            <option>Project Login& Signup</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea className="contact--input text-md" id="message" rows="8" placeholder="내용을 입력해주세요." />
        </label>
      </form>
      <div>
        <button className="btn btn-primary contact--form--btn" onClick={submit}>
          메일 회신하기
        </button>
      </div>
    </section>
  );
}
