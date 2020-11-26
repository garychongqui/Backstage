import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../../styles/index.css';

const StageDetails = () => {
  const [currentStage, setCurrentStage] = useState({});
  const history = useHistory();

  const getStageDetails = () => {
    const packageId = history.location.pathname.slice(18);
    axios
      .get(`/api/packages/${packageId}`)
      .then((results) => setCurrentStage(results.data))
      .catch((error) => alert(error));
  };

  useEffect(() => {
    getStageDetails();
  }, []);

  return (
    <div>
      {/*
      <h4 className="dash-h4">name: {currentPackage.name}</h4>
      <h4 className="dash-h4">width: {currentPackage.width}</h4>
      <h4 className="dash-h4">depth: {currentPackage.depth}</h4>
      <h4 className="dash-h4">
        indoor / outdoor: {currentPackage.indoorOrOutdoor}
      </h4>
      <h4 className="dash-h4">
        indoor / outdoor comments: {currentPackage.comments}
      </h4>
      <h4 className="dash-h4">
        General comments: {currentPackage.anythingElse}
      </h4>
      <br />
      <h4 className="dash-h4">Equipment Included: **TBD**</h4>
*/}
      <label for="name">Name</label>
      <input id="name" type="text" placeholder={currentStage.name} />
      <br />
      <label for="width">Width</label>
      <input id="width" type="number" placeholder={currentStage.width} />
      <br />
      <label for="depth">Depth</label>
      <input id="depth" type="number" placeholder={currentStage.depth} />
      <label for="isOutoor">Outdoor Stage</label>
      {currentStage.isOutdoor ? (
        <input id="isOutdoor" type="checkbox" checked />
      ) : (
        <input id="isOutdoor" type="checkbox" />
      )}
      <label for="general-comments">Comments</label>{' '}
      <textarea
        id="general-comments"
        placeholder={currentStage.anythingElse}
        cols="30"
        rows="4"
      ></textarea>
      <br />
      <button>Save</button>
    </div>
  );
};

export default StageDetails;
