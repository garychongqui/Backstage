import React, { useEffect, useState, useContext } from 'react';
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
        url: `/api/packages`,
        withCredentials: true
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
      const res = await axios.delete(`/api/packages/${packageId}`);
    } catch (error) {
      alert(error);
    }
  };

  const handleEditClick = (packageId) => {
    history.push(`/dashboard/stages/${packageId}`);
  };

  return (
    <div className="bg-dark-gray">
      <div className="dash-title-bar">
        <br />
        <h1 className="dash-h1">My Stages</h1>
        <br />
        <div className="dash-title-bar-buttons">
          <button
            className="btn-1"
            onClick={() => history.push('/dashboard/stages/new')}
          >
            Add A New Stage
          </button>
        </div>
      </div>

      {packages.map((package1) => {
        return (
          <div>
            <br />

            <div className="saved-stage">
              <div className="saved-stage-info">
                <h2 className="dash-h2">{package1?.name}</h2>
                <br />
                <span>{package1?.isOutdoor ? 'Outdoor' : 'Indoor'}</span>
                <span>{`Dimensions: ${package1?.width} x ${package1?.depth}`}</span>

                <p>{package1?.comments}</p>
              </div>

              <div className="saved-stage-btn-area">
                <button
                  className="btn-2"
                  onClick={() => handleEditClick(package1?._id)}
                >
                  Edit
                </button>

                <button
                  className="btn-4"
                  onClick={() => handlePackageDelete(package1?._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyStages;
