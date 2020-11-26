import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MyStages = () => {
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
  }, [isUpdated]);

  const handlePackageDelete = async (packageId) => {
    try {
      setIsUpdated(!isUpdated);
      await axios.delete(`/api/packages/${packageId}`);
    } catch (error) {
      alert(error);
    }
  };

  const handleSeeMore = (packageId) => {
    history.push(`/dashboard/stages/${packageId}`);
  };

  return (
    <div>
      <br />
      <h1 className="dash-h1">My Stages</h1>
      <br />
      <br />
      <button onClick={() => history.push('/dashboard/stages/new')}>
        Add A New Stage
      </button>

      <br />
      <br />
      <h3 className="dash-h3">Here Are Your Stages</h3>
      {packages.map((package1) => {
        return (
          <div>
            <br />

            <h2 className="dash-h2">{package1?.name}</h2>
            <div className="saved-stage">
              <span>{`Dimensions: ${package1?.width} x ${package1?.depth}`}</span>
              <br />
              <span>{package1?.indoorOrOutdoor}</span>
              <br />
              <p>{package1?.anythingElse}</p>
              <p>{package1?._id}</p>
              <button
                className="btn-2"
                onClick={() => handleSeeMore(package1?._id)}
              >
                See More Button
              </button>
              <button>Edit</button>
            </div>
            <div>
              <button onClick={() => handlePackageDelete(package1?._id)}>
                Delete this stage
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyStages;
