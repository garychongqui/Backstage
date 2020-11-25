import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewStage = () => {
  // const handleFormSubmit = () => {
  //   try {
  //     axios
  //       .post('/api/equipment', { data: equipToSave })
  //       .then((response) => console.log(response))
  //       .then(alert('package created'));
  //     // .then(history.push('/packages/'));
  //     // .then((response) => alert(response));
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  return (
    <div>
      <form
        name="new-package"
        method="post"
        action="/api/packages"
        // onSubmit={handleFormSubmit}
      >
        <input
          name="name"
          type="text"
          placeholder="Stage name (click to edit)"
        />

        <div className="stage-dimensions new-stage-form-section">
          <h3>What are the stage dimensions?</h3>
          <label for="stage-width">Width</label>
          {/*  get rid of up/down arrows in input box */}
          <input id="stage-width" type="number" name="width"></input>
          <br></br>
          <label for="stage-depth">Depth</label>
          <input id="stage-depth" type="number" name="depth"></input>
        </div>
        <div className="indoorOrOutdoor new-stage-form-section">
          {/* <h3>Indoor or Outdoor?</h3> */}
          <label for="outdoor-checkbox">Is the stage outdoor?</label>
          <input
            type="checkbox"
            name="isOutdoor"
            id="outdoor-checkbox"
            value="true"
          />
          {/* <label for="indoor-checkbox">Indoor</label>
          <input
            type="checkbox"
            name="isOutdoor"
            id="indoor-checkbox"
            value="false"
          />
            */}

          {/* <div class="flex items-center justify-center w-full mb-24">
            <label for="toogleA" class="flex items-center cursor-pointer">
              <div class="relative">
                <input id="toogleA" type="checkbox" class="hidden" />
                <div class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
              </div>
              <div class="ml-3 text-gray-700 font-medium">Toggle Me!</div>
            </label>
          </div> */}

          {/* <label for="outdoor">Outdoor</label>
          <input id="outdoor" type="radio" name="isOutdoor" value="true" />
          <label for="indoor">Indoor</label>
          <input id="indoor" type="radio" name="isIndoor" value="false" /> */}
          {/*           
          <select name="isOutdoor" id="indoor-or-outdoor">
            <option value="true">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select> */}
          <textarea
            placeholder="If outdoor, is the stage covered? Anything else?"
            name="comments"
            rows="5"
            cols="35"
          />
        </div>
        <div className="additional-comments new-stage-form-selection">
          <h3>Anything else?</h3>
          <textarea
            name="anythingElse"
            rows="5"
            cols="35"
            placeholder="placeholder"
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewStage;
