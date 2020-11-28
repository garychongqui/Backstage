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
      await axios.delete(`/api/events/${eventId}`);
      alert('event deleted');
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container">
      <div className="dash-title-bar">
        <br />
        <h1 className="dash-h1">My Events</h1>
        <br />
        <br />
        <br />
        <br />
      </div>
      <h1>Here Are Your Events</h1>
      {events.map((event1) => {
        return (
          <div>
            <br />
            <h2>{event1?.eventTitle}</h2>
            <div className="saved-stage">
              <span>{`Date: ${event1?.eventDate}`}</span>
              <br />
              <span>{event1?.status ? 'Opened by Artist' : 'Not Opened'}</span>
              <br />
            </div>
            <div>
              <button onClick={() => handleEventDelete(event1?._id)}>
                Delete this event
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MyEvents;
