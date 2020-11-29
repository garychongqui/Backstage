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
          <div></div>
          <div className="new-stage-container">
            <input
              className="stage-name-input"
              cols="75"
              rows="5"
              name="name"
              type="text"
              placeholder="Enter new Stage name-->"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="new-stage-dimensions">
            <h3 className="dash-h3">Stage Dimensions</h3>
          </div>
          <div className="new-stage-area">
            <label for="stage-width">Width</label>
            {/*  get rid of up/down arrows in input box */}
            <input
              className="stage-width"
              id="stage-width"
              type="number"
              name="width"
              onChange={handleChange}
            ></input>
            <label for="stage-depth">Depth</label>
            <input
              className="stage-height"
              id="stage-depth"
              type="number"
              name="depth"
              onChange={handleChange}
            ></input>
          </div>
          <div className="new-stage-place">
            <label for="outdoor-checkbox">Outdoor Stage?</label>
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
            <label className="dash-h3" for="comments-text-area">
              Comments
            </label>
          </div>
          <div className="new-stage-comments">
            <textarea
              id="comments-text-area"
              name="comments"
              rows="5"
              cols="75"
              placeholder="Comments about this stage"
              onChange={handleChange}
            />
            <br />
          </div>
          <br />
          <div className="new-stage-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewStage;
