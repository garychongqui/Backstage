import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
      <span>Name:</span>
      <input type="text" placeholder={currentStage.name} />
      <br />
      <span>Width:</span>
      <input type="number" placeholder={currentStage.width} />
      <br />
      <span>Depth:</span>
      <input type="number" placeholder={currentStage.depth} />
      <h4>indoor / outdoor: {currentStage.indoorOrOutdoor}</h4>
      <h4>indoor / outdoor comments: {currentStage.comments}</h4>
      <span>General comments:</span>{' '}
      <textarea
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
