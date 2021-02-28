import React from 'react';
import Header from '../header';
import About from '../about';
import Contact from '../contact';
import Fact from '../facts';
import Skills from '../skills';
import Resume from '../resume';
import Portfolio from '../portfolio';
import Services from '../services';
import Testimonial from '../testimonial';
import './styles.scss';

function CV() {
  return (
    <>
      <button type="button" className="mobile-nav-toggle d-xl-none">
        <i className="icofont-navigation-menu"></i>
      </button>
      <Header />
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Nguyen Khac Tam</h1>
          <p>
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span>
          </p>
        </div>
      </section>

      <main id="main">
        <About />
        <Fact />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonial />
        <Contact />
      </main>

      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{' '}
            <strong>
              <span>Developer</span>
            </strong>
          </div>
          <div className="credits">
            Designed by <a href="https://tamnk74.github.io"> Coder</a>
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
    </>
  );
}

export default CV;
