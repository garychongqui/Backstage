import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import swal from 'sweetalert';
import moment from 'moment';

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
      swal('Event deleted', { icon: 'success' });
    } catch (error) {
      swal('Operation failed', { icon: 'error' });
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
              <span>{`Date: ${moment(event1?.eventDate).format(
                'MMMM Do YYYY'
              )}`}</span>
              <br />
              <span>
                {event1?.hasBeenOpened ? 'Opened by Artist' : 'Not Opened'}
              </span>
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
