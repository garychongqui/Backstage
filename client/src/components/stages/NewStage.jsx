import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewStage = () => {
  const [stageData, setStageData] = useState(null);
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
    const response = await axios.post('/api/packages', stageData);
    alert('stage saved');
  };

  const handleChange = async (event) => {
    setStageData({ ...stageData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form
        name="new-package"
        method="post"
        action="/api/packages"
        onSubmit={handleFormSubmit}
      >
        <input
          name="name"
          type="text"
          placeholder="Stage name (click to edit)"
          onChange={handleChange}
        />
        <div className="stage-dimensions new-stage-form-section">
          <h3>What are the stage dimensions?</h3>
          <label for="stage-width">Width</label>
          {/*  get rid of up/down arrows in input box */}
          <input
            id="stage-width"
            type="number"
            name="width"
            onChange={handleChange}
          ></input>
          <br></br>
          <label for="stage-depth">Depth</label>
          <input
            id="stage-depth"
            type="number"
            name="depth"
            onChange={handleChange}
          ></input>
        </div>
        <div className="indoorOrOutdoor new-stage-form-section">
          <label for="outdoor-checkbox">Is the stage outdoor?</label>
          <input
            type="checkbox"
            name="isOutdoor"
            id="outdoor-checkbox"
            value="true"
            onChange={handleChange}
          />
          <textarea
            placeholder="If outdoor, is the stage covered? Anything else?"
            name="comments"
            rows="5"
            cols="35"
            onChange={handleChange}
          />
        </div>
        <div className="additional-comments new-stage-form-selection">
          <h3>Anything else?</h3>
          <textarea
            name="anythingElse"
            rows="5"
            cols="35"
            placeholder="placeholder"
            onChange={handleChange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewStage;
