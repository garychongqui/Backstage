import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const StageDetails = () => {
  const [currentStage, setCurrentStage] = useState({});
  const [stageData, setStageData] = useState(null);

  const history = useHistory();

  const getStageDetails = () => {
    const stageId = history.location.pathname.slice(18);
    axios
      .get(`/api/packages/${stageId}`)
      .then((results) => setCurrentStage(results.data))
      .catch((error) => swal('Operation failed', { icon: 'error' }));
  };

  useEffect(() => {
    getStageDetails();
  }, []);

  const handleChange = async (event) => {
    setStageData({ ...stageData, [event.target.name]: event.target.value });
    console.log(stageData);
  };

  const handleUpdateStage = async () => {
    console.log('cuad');
    const stageId = history.location.pathname.slice(18);
    await axios
      .patch(`/api/packages/${stageId}`, stageData)
      .then((results) => console.log(results));
  };

  return (
    <div className="new-stage-full">
      <div>
        <div className="new-stage-container">
          <label for="name" className="dash-h4">
            Name
          </label>
          <input
            className="stage-name-input"
            name="name"
            id="name"
            type="text"
            defaultValue={currentStage.name}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="new-stage-dimensions">
          <h3 className="dash-h3">Stage Dimensions</h3>
        </div>
        <div className="new-stage-area">
          <label for="width" className="dash-h4">
            Width
          </label>
          <input
            className="stage-width"
            name="width"
            id="width"
            type="number"
            defaultValue={currentStage.width}
            onChange={handleChange}
          />
          <br />
          <label for="depth" className="dash-h4">
            Depth
          </label>
          <input
            name="depth"
            id="depth"
            type="number"
            defaultValue={currentStage.depth}
            onChange={handleChange}
          />
        </div>
        <div className="new-stage-place">
          <label for="isOutoor" className="dash-h4">
            Indoor/Outdoor
          </label>
          {currentStage.isOutdoor ? (
            <select className="drop-stage">
              <option value="true" name="isOutdoor">
                Outdoor
              </option>
              <option value="false" name="isOutdoor">
                Indoor
              </option>
            </select>
          ) : (
            <select className="drop-stage">
              <option value="false" name="isOutdoor">
                Indoor
              </option>
              <option value="true" name="isOutdoor">
                Outdoor
              </option>
            </select>
          )}
        </div>
        {/*}  <input
      //     name="isOutdoor"
      //     id="isOutdoor"
      //     value="true"
      //     type="checkbox"
      //     // checked
      //     onChange={handleChange}
      //   />
      // ) : (
      //   <input
      //     name="isOutdoor"
      //     value="false"
      //     id="isOutdoor"
      //     type="checkbox"
      //     onChange={handleChange}
      //   /> */}
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
          <button onClick={handleUpdateStage}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default StageDetails;
