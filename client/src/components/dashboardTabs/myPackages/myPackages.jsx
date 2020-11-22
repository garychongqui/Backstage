import React, { useEffect, useState } from 'react';
import './myPackages.css';
import '../../../App.css';
import axios from 'axios';

const MyPackages = () => {
  const [packages, setPackages] = useState([]);

  const getPackages = async () => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/api/packages`,
        withCredentials: true
      });
      setPackages(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPackages();
  }, []);

  return (
    <div>
      <button>Add Package</button>
      <br />
      <br />
      <h1>Here Are Your Packages</h1>
      {packages.map((package1) => {
        return (
          <div>
            <br />

            <h2>{package1?.name}</h2>
            <div className="saved-stage">
              <span>{`Dimensions: ${package1?.width} x ${package1?.depth}`}</span>
              <br />
              <span>{package1?.indoorOrOutdoor}</span>
              <br />
              <p>{package1?.anythingElse}</p>
            </div>
            <button>Delete this package</button>
          </div>
        );
      })}
    </div>
  );
};

export default MyPackages;
