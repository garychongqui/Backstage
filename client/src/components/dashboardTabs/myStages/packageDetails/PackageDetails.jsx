import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const PackageDetails = () => {
  const [currentPackage, setCurrentPackage] = useState({});
  const history = useHistory();

  const getPackageDetails = () => {
    const packageId = history.location.pathname.slice(10);
    axios
      .get(`/api/packages/${packageId}`)
      .then((results) => setCurrentPackage(results.data));
  };

  useEffect(() => {
    getPackageDetails();
  }, []);

  return (
    <div>
      <h4>name: {currentPackage.name}</h4>
      <h4>width: {currentPackage.width}</h4>
      <h4>depth: {currentPackage.depth}</h4>
      <h4>indoor / outdoor: {currentPackage.indoorOrOutdoor}</h4>
      <h4>indoor / outdoor comments: {currentPackage.comments}</h4>
      <h4>General comments: {currentPackage.anythingElse}</h4>
      <br />
      <h4>Equipment Included: **TBD**</h4>
    </div>
  );
};

export default PackageDetails;
