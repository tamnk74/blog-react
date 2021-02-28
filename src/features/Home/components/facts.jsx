import React from 'react';

export default function Facts() {
  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row no-gutters">
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
          >
            <div className="count-box">
              <i className="icofont-simple-smile"></i>
              <span data-toggle="counter-up">232</span>
              <p>
                <strong>Happy Clients</strong> consequuntur quae
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="count-box">
              <i className="icofont-document-folder"></i>
              <span data-toggle="counter-up">521</span>
              <p>
                <strong>Projects</strong> adipisci atque cum quia aut
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="count-box">
              <i className="icofont-live-support"></i>
              <span data-toggle="counter-up">1,463</span>
              <p>
                <strong>Hours Of Support</strong> aut commodi quaerat
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="count-box">
              <i className="icofont-users-alt-5"></i>
              <span data-toggle="counter-up">15</span>
              <p>
                <strong>Hard Workers</strong> rerum asperiores dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
