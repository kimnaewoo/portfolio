import { GoPersonFill } from 'react-icons/go';
import { IoIosMail } from 'react-icons/io';
import { FaBirthdayCake, FaHome } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/hero_img.jpg" alt="AboutMe" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section--description">
            <ul>
              <li className="hero--section--introduce">
                <GoPersonFill />
                <span>이름 : 김내우</span>
              </li>
              <li className="hero--section--introduce">
                <FaBirthdayCake />
                <span>나이 : 1994. 07. 15</span>
              </li>
              <li className="hero--section--introduce">
                <FaHome />
                <span>주소 : 서울시 관악구</span>
              </li>
              <li className="hero--section--introduce">
                <IoIosMail />
                <span>메일 : gnag0403@naver.com</span>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}
