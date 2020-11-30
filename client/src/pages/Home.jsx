import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  return (
    <div className="landing-page ">
      <div
        className="landing-container-1 bg-no-repeat bg-center bg-stretch"
        style={{
          backgroundImage: "url('landing-page-images/backstage1.png')",
          position: 'relative',
          bottom: '10rem',
          backgroundSize: '100vw'
        }}
      >
        <form
          className="form1"
          name="login-form1"
          method="POST"
          action="/api/users/login"
        >
          <div className="welcome">
            <h1
              style={{ marginTop: '4rem', paddingTop: '4rem' }}
              className="title-1"
            >
              WELCOME TO BACKSTAGE.
            </h1>
            <p className="title-paragraph-1">
              We’re here to make connecting venues and artists easier.
            </p>
            <button
              className="join-button rounded-md h-12"
              type="button"
              onClick={() => {
                history.push('/signup');
              }}
            >
              Join Backstage
            </button>
          </div>
        </form>
      </div>

      <div className="landing-container-back">
        <div className="landing-container-info-back">
          <h1 className="title">Save all your equipment in one place</h1>
          <p className="title-paragraph">
            No more rummaging through storage closets to take inventory.
          </p>
        </div>
        <div className="landing-container-image-back">
          <img
            className="landing-pic-back"
            src="../landing-page-images/land-pic-2.png"
            alt="backside picture of musicians playing"
          />
        </div>
      </div>

      <div
        className="landing-container-3 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('landing-page-images/green-background.png')"
        }}
      >
        <div className="landing-container-3-info">
          <h1 className="title">Easily share critical info with your artist</h1>
          <p className="title-paragraph">
            Stage dimenstions? Rain plans? Tell artist know everything they need
            to know before show time.
          </p>
        </div>
        <div className="landing-container-3-image">
          <img
            className="landing-pic-3"
            src="../landing-page-images/land-pic-3.png"
            alt="blackandwhite pic of concert with smoke"
          />
        </div>
      </div>

      <div className="landing-container-back">
        <div className="landing-container-info-back">
          <h1 className="title">See your artist's stage plot</h1>
          <p className="title-paragraph">
            Prepare your stage based on direct artist input for a smooth,
            music-filled night.
          </p>
        </div>
        <div className="landing-container-image-back">
          <img
            className="landing-pic-back"
            src="../landing-page-images/land-pic-4.png"
            alt="artis mirror with lightbulbs"
          />
        </div>
      </div>

      <div
        className="landing-container-5 bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('landing-page-images/white-background.png')"
        }}
      >
        <div className="landing-container-5-info">
          <h1 className="title-2">Upload & Share Riders And Stage Set Ups</h1>
          <p className="title-paragraph-2">
            No more combing through endless email attachments... Easily upload
            rider, flyer, & booking contract PDFs.
          </p>
        </div>
        <div className="landing-container-5-image">
          <img
            className="landing-pic-5"
            src="../landing-page-images/jojo.jpg"
            alt="DJ"
          />
        </div>
      </div>

      <div className="landing-footer">
        <div className="landing-footer-info">
          <h3>Privacy</h3>
          <h3>About Backstage</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
