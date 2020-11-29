import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const NewStage = () => {
  const [stageData, setStageData] = useState(null);

  const history = useHistory();
  // const handleFormSubmit = () => {
  //   try {
  //     axios
  //       .post('/api/packages', { data: equipToSave })
  //       .then((response) => console.log(response))
  //       .then(alert('package created'));
  //     // .then(history.push('/packages/'));
  //     // .then((response) => alert(response));
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/packages', stageData);

    swal('Stage saved!', { icon: 'success' });
    history.push('/dashboard/stages');
  };

  const handleChange = async (event) => {
    setStageData({ ...stageData, [event.target.name]: event.target.value });
  };

  return (
    <div className="new-stage-full">
      <div>
        <form
          name="new-package"
          // method="post"
          // action="/api/packages"
          onSubmit={handleFormSubmit}
        >
          <div className="new-stage-name">
            <h2>STAGE NAME</h2>
          </div>
          <div className="new-stage-container">
            <input
              className="stage-name-input"
              name="name"
              type="text"
              placeholder="Stage name (click to edit)"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="new-stage-dimensions">
            <h3>What are the stage dimensions?</h3>
          </div>
          <div className="new-stage-area">
            <label for="stage-width">Width</label>
            {/*  get rid of up/down arrows in input box */}
            <input
              id="stage-width"
              type="number"
              name="width"
              onChange={handleChange}
            ></input>
            <br />
            <label for="stage-depth">Depth</label>
            <input
              id="stage-depth"
              type="number"
              name="depth"
              onChange={handleChange}
            ></input>
          </div>
          <div className="new-stage-place">
            <label for="outdoor-checkbox">outdoor stage?</label>
            <input
              type="checkbox"
              name="isOutdoor"
              id="outdoor-checkbox"
              value="true"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="new-stage-comments-title">
            <label for="comments-text-area">Comments</label>
          </div>
          <div className="new-stage-comments">
            <textarea
              id="comments-text-area"
              name="comments"
              rows="5"
              cols="75"
              placeholder="placeholder"
              onChange={handleChange}
            />
            <br />
          </div>
          <br />
          <div className="new-stage-button">
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewStage;
