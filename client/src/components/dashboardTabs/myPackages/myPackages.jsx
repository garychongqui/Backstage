import React, { useEffect, useState } from 'react';
import './myPackages.css';
import '../../../App.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-hook';

const MyPackages = () => {
  const [packages, setPackages] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const history = useHistory();

  const getPackages = async () => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/api/packages`
        // withCredentials: true
      });
      setPackages(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPackages();
    console.log('useEffect has run');
  }, [isUpdated]);

  // useEffect(() => {
  //   console.log('useeffect 2 has run');
  // }, [isUpdated]);

  const handlePackageDelete = async (packageId) => {
    try {
      setIsUpdated(!isUpdated);
      await axios.delete(`/api/packages/${packageId}`);
    } catch (error) {
      alert(error);
    }
  };

  const handleSeeMore = (packageId) => {
    history.push(`/packages/${packageId}`);
  };

  return (
    <div>
      <br />
      <br />
      <div></div>
      <br />
      <br />

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
              <p>{package1?._id}</p>
              <button onClick={() => handleSeeMore(package1?._id)}>
                See More Button
              </button>
              <button>Edit</button>
            </div>
            <div>
              <button onClick={() => handlePackageDelete(package1?._id)}>
                Delete this package
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyPackages;
