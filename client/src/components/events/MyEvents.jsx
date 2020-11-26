import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const MyEvents = () => {
  const { currentUser } = useContext(AppContext);
  const [events, setEvents] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const history = useHistory();

  const getEvents = async () => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/api/events`
        // withCredentials: true
      });
      console.log(res.data);
      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEvents();
  }, [isUpdated]);

  const handleEventDelete = async (eventId) => {
    try {
      setIsUpdated(!isUpdated);
      const res = await axios.delete(`/api/events/${eventId}`);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <br />
      <br />
      <h1>My Events</h1>
      <br />
      <br />

      <br />
      <br />
      <h1>Here Are Your Events</h1>
      {events.map((event1) => {
        return (
          <div>
            <br />

            <h2>{event1?.eventTitle}</h2>
            <div className="saved-stage">
              <span>{`Date: ${event1?.eventDate}`}</span>
              <br />

              <button>Edit</button>
            </div>
            <div>
              <button onClick={() => handleEventDelete(event1?._id)}>
                Delete this stage
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyEvents;
