import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../../styles/index.css';

const StageDetails = () => {
  const [currentStage, setCurrentStage] = useState({});
  const [stageData, setStageData] = useState(null);

  const history = useHistory();

  const getStageDetails = () => {
    const stageId = history.location.pathname.slice(18);
    axios
      .get(`/api/packages/${stageId}`)
      .then((results) => setCurrentStage(results.data))
      .catch((error) => alert(error));
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
    <div>
      <label for="name" className="dash-h4">
        Name
      </label>
      <input
        name="name"
        id="name"
        type="text"
        placeholder={currentStage.name}
        onChange={handleChange}
      />
      <br />
      <label for="width" className="dash-h4">
        Width
      </label>
      <input
        name="width"
        id="width"
        type="number"
        placeholder={currentStage.width}
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
        placeholder={currentStage.depth}
        onChange={handleChange}
      />
      <label for="isOutoor" className="dash-h4">
        Outdoor Stage
      </label>
      {currentStage.isOutdoor ? (
        <input
          name="isOutdoor"
          id="isOutdoor"
          type="checkbox"
          checked
          onChange={handleChange}
        />
      ) : (
        <input
          name="isOutdoor"
          id="isOutdoor"
          type="checkbox"
          onChange={handleChange}
        />
      )}
      <label for="comments" className="dash-h4">
        Comments
      </label>{' '}
      <textarea
        name="comments"
        id="comments"
        placeholder={currentStage.comments}
        cols="30"
        rows="4"
        onChange={handleChange}
      ></textarea>
      <br />
      <button onClick={handleUpdateStage}>Save</button>
    </div>
  );
};

export default StageDetails;
