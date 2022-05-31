import "./about.css";
import Programmer from "../../img/coding.png";
import Cisco from "../../img/computer.png";
import Mine from "../../img/me.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Mine}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          BOBY MAULANA SUBAGJA
        </p>
        <p className="a-desc">
        I am a web developer graduated from Indonesian Computer University majoring in informatics engineering. 
        My work experience as a junior web developer at PT Avelca Software System for 1.5 years.
        I am experienced using javascript programming language, and have experience in making projects using the PERN & MERN Stack method. Furthermore, I have several certifications I have obtained:
        </p>
        <div className="a-award">
          <img src={Programmer} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Junior Web Programmer Certification</h4>
            <p className="a-award-desc">
              I have graduated from this certification, i learned about web developing, bootstrap frameworks, mysql database, and pass with good marks on this test.
            </p>
          </div>
        </div>
        <div className="a-award">
          <img src={Cisco} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Cisco Certification</h4>
            <p className="a-award-desc">
              I have graduated on this certification, and there is 2 certifications:
              <br /> 1. CCNA Routing and Switching: Introduction to networks (CCNA 1)
              <br /> 2. CCNA Routing and Switching: Routing and Switching Essentials (CCNA 2)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;