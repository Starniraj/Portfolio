import React from "react";
import { Link } from "react-scroll";
import "../style.css";
import bannerguy from "../Image/banner-guy.png";
import aboutmeguy from "../Image/about-me-guy.png";
import name1 from "../Image/name1.png";
import name2 from "../Image/name2.png";
import name4 from "../Image/name4.png";
import resumeGguy from "../Image/resume-guy-img.png";
import Typewriter from "typewriter-effect";
// import Typical from "react-typical";
import Icon from "../Icon";

import { DiJavascript1, DiReact, DiGit, DiCss3, DiHtml5 } from "react-icons/di";
import {
  SiNetlify,
  SiBootstrap,
  SiVisualstudiocode,
  SiCodepen
} from "react-icons/si";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineStar
} from "react-icons/ai";
import { saveAs } from "file-saver";

const Header = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1Zmfzs9XJc8ZzGrwX_mIqtNcyNI9Uyzj7/view?usp=sharing",
      "Niraj Resume.pdf"
    );
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bar-color">
        <div className="container-fluid">
          <Link className="navbar-brand ms-3 header-name" to="#">
            Niraj Singh
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <Link className="nav-link active" aria-current="page" to="Home">
                  {" "}
                  <AiOutlineHome />
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="Portfolio">
                  <AiOutlineFundProjectionScreen />
                  Portfolio
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="Skills">
                  <AiOutlineStar />
                  Skill
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="Contact">
                  <AiOutlineUser />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="main-heading Home">
        <div className="container-main">
          <div className="main-text">
            <h3 className="name">Hi! I'm Niraj Singh</h3>
            <h4 className="job">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Full Stack Developer")

                     autoStart: true,
                     loop: true,
                     deleteSpeed: 50,
                }}
              />
            </h4>
            <h6 className="quote">Get ready to turn ideas into reality</h6>
            <Link
              to="Contact"
              className="  btn hireMe"
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              Hire ME
            </Link>
            <Link
              to="#"
              className="btn Resumebtn "
              tabindex="-1"
              role="button"
              aria-disabled="true"
              onClick={saveFile}
            >
              Resume
            </Link>
          </div>
          <div className="-dump-picture">
            <img src={bannerguy} alt="banner" className="bannerguy" />
          </div>
        </div>
        {/* <svg width="100%" height="50%" id="svg" viewBox="0 0 1440 300" xmlns="http://www.w3.org/2000/svg" className=" svg-item transition duration-300 ease-in-out delay-150 item3"><defs><linearGradient id="gradient" x1="10%" y1="80%" x2="90%" y2="20%"><stop offset="5%" stop-color="#00d084ff"></stop><stop offset="95%" stop-color="#00d084ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 53.20302301614565,160.61284781861903 106.4060460322913,121.22569563723806 180,140 C 253.5939539677087,158.77430436276194 347.5788388869804,235.7100652696668 430,264 C 512.4211611130196,292.2899347303332 583.278598419787,271.9340432840948 644,238 C 704.721401580213,204.0659567159052 755.3067674338714,156.553761593954 825,159 C 894.6932325661286,161.446238406046 983.4943318447272,213.85091034008929 1051,219 C 1118.5056681552728,224.14908965991071 1164.7159051872206,182.04259704568878 1226,171 C 1287.2840948127794,159.95740295431122 1363.6420474063898,179.9787014771556 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg> */}
      </div>
      <div className="AboutMe card-width  About">
        <div className="Image aboutme-item1">
          <img src={aboutmeguy} alt="aboutmebanner" className="aboutmeguy" />
        </div>
        <div className="aboutme-content aboutme-item2">
          <h2>About Me</h2>
          <p>
            I'm Link web designer and front-end developer with 7 years of
            professional experience. I'm interested in all kinds of visual
            communication, but my major focus is on designing web, mobile &
            tablet interfaces. I also have skills in other fields like branding,
            icon design or web development.
          </p>

          <p>
            I enjoy turning complex problems into simple, beautiful and
            intuitive designs. When I'm not pushing pixels, you'll find me
            cooking, gardening or working out in the park.
          </p>

          <div className="language">
            <p>Languages/Library/Technology</p>
            <div className="icon">
              <SiNetlify />
              <DiReact />
              <SiBootstrap />
              <DiJavascript1 />
              <DiGit />
              <DiCss3 />
              <DiHtml5 />
              <SiVisualstudiocode />
              <SiCodepen />
            </div>
          </div>
        </div>
      </div>
      <div className="card-header card-width Portfolio">
        <h2>My Portfolio</h2>
        <br />
        <div className="portfolio-img">
          <a href="https://starniraj.github.io/TODO-JS/" target={"blank"}>
            <img src={name1} alt="" />
          </a>
          <a href="https://starniraj.github.io/DIgital-Clock/" target={"blank"}>
            <img src={name2} alt="" />
          </a>
          <a href="https://wkf3j1.csb.app/" target={"blank"}>
            <img
              src="https://miro.medium.com/max/1100/1*OlgqUIhvl5-9dZISlZ2-yQ.jpeg"
              alt=""
            />
          </a>
          <a
            href="https://coruscating-wisp-98ace5.netlify.app/"
            target={"blank"}
          >
            <img src={name4} alt="" />
          </a>
        </div>
      </div>
      <div className="card-header card-width Skills">
        <h2>Skills</h2>

        <div className="AboutMe card-width  About">
          <div className="aboutme-content">
            <li>
              <p>
                Electronic medical records (EMR) systems Patient scheduling
                software Team leadership Interpersonal communication Customer
                service
              </p>
            </li>
            <li>
              <p>
                Problem-solving Adaptability Time management Organization Oral
                communication Collaboration Written communication Negotiation
                Conflict resolution
              </p>
            </li>
            <li>
              <p>
                Professionalism Drive Enthusiasm Confidence Creative thinking
                Transparency Perseverance Honesty Strong work ethic
                Open-mindedness
              </p>
            </li>
          </div>
          <div className="Image">
            <img src={resumeGguy} alt="aboutmebanner" className="skillguy" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="card-header card-width">
        <h2>What People Say About ME</h2>
        <br />
        <br />
        <div className="comment-header">
          <div className="comment-section">
            <img
              src="http://sdfsystems.com/things-to-discuss-with-your-web-developer-before-you-start/"
              alt=""
            />
            <h5>Deepak Singh</h5>
            <h6>Sr. Software Engineer</h6>
            <p>
              He is a Sr.Software Engineer in accennture from last 6 years. Lead some major projects for accenture and
              he guide me very well in coding part.{" "}
            </p>
          </div>
          <div className="comment-section comment-hidden">
            <img
              src="http://sdfsystems.com/things-to-discuss-with-your-web-developer-before-you-start/"
              alt=""
            />
            <h5>Yash Mangalni</h5>
            <h6>BackEnd Developer</h6>
            <p>
              He is a Competitive Programmer with some achievements like 5 stars
              at TCS and a Specialist at TCS.
            </p>
          </div>
          <div className="comment-section comment-hidden">
            <img
              src="http://sdfsystems.com/things-to-discuss-with-your-web-developer-before-you-start/"
              alt=""
            />
            <h5>Sudhanshu Mishra </h5>
            <h6>FullStack Developer</h6>
            <p>
              {" "}
              He is working in infosys from last 1 year important part of personal and professional development,guides
              through times when people need someone that is able to point them
              in the right direction.{" "}
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="card-header card-width Contact">
        <h2>Contact</h2>
        <br />
        <div className="card-grid">
          <div className="letsContact-card">
            <div className="content-card content-card-first">
              <h4>Let's connect</h4>
              <p>
                But in order that you may see whence all this born error is the
                pleasure of those who accuse and praise the pain, I will open
                the whole matter, and those very things which were said by that
                discoverer of truth and, as it were, the architect of Link happy
                life...
              </p>
              <ul>
                <li id="Email">singhniraj637@gmail.com</li>
                <li id="Phone-No">7905010687</li>
                <li id="Location">Varanasi, Uttar Pradesh</li>
              </ul>
            </div>
          </div>
          <div className="card-Message ">
            <div className="content-card">
              <h4>Send me Link message</h4>

              <div className="form mb-3 form-label">
                <label for="Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />

                <label for="Name" className="form-label">
                  Phone-No
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />

                <label for="" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
                <label for="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>

                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                <br />
                <br />

                <button type="button" className=" btn Messagebtn">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="copyright">
        {" "}
        <Icon />Develop and Design By Niraj.
      </div>
    </>
  );
};

export default Header;
