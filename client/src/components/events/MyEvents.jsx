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
    <div className="bg-dark-gray">
      <div className="dash-title-bar">
        <br />
        <h1 className="dash-h1">My Events</h1>
        <br />
        <div className="dash-title-bar-buttons">
          <button
            className="btn-1"
            onClick={() => history.push('/dashboard/events/new')}
          >
            Create Event
          </button>
        </div>
      </div>

      {events.map((event1) => {
        return (
          <div>
            <br />

            <div className="saved-event">
              <div className="saved-event-info">
                <h2 className="dash-h2">{event1?.eventTitle}</h2>
                <br />
                <span>{`Date: ${moment(event1?.eventDate).format(
                  'MMMM Do YYYY'
                )}`}</span>
                <br />
                <span>
                  {event1?.hasBeenOpened ? 'Opened by Artist' : 'Not Opened'}
                </span>
                <br />
              </div>
              <div className="saved-event-btn-area">
                <button
                  className="btn-3"
                  onClick={() => handleEventDelete(event1?._id)}
                >
                  Delete this event
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MyEvents;
