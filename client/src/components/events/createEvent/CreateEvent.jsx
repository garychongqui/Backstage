import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventLink from './EventLink';
import './createEvent.css';

const CreateEvent = ({ handleClose, show }) => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [showLinkClassName, setShowLinkClassName] = useState(false);
  const [eventURL, setEventURL] = useState('');

  const getPackages = async () => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/api/packages`
      });
      setPackages(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPackages();
  }, []);

  const handleSelectPackage = (packageId) => {
    setSelectedPackage(packageId);
  };

  let showHideClassName = show ? 'block' : 'hidden';

  const handleGenerateEvent = () => {
    axios
      .post('/api/events', {
        data: { eventTitle, eventDate, selectedPackage, hasBeenOpened: false }
      })
      .then((results) =>
        setEventURL(`http://localhost:3000/artist/${results.data._id}`)
      );
    setShowLinkClassName(true);
  };
  // get isUpdated as prop from parent to make sure this re-renders if user adds packages

  return (
    <div className={showHideClassName}>
      <div class="entire-modal fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            class="fixed inset-0 transition-opacity"
            id="background-overlay-parent"
            aria-hidden="true"
          >
            <div
              class="absolute inset-0 bg-gray-500 opacity-75"
              id="background-overlay"
            ></div>
          </div>

          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            class="entire-modal-inner-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            style={{ minWidth: '70%' }}
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                {/* <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"> */}
                {/* <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    ></path>
                  </svg> */}
                {/* </div> */}
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    New Event{' '}
                  </h3>
                  <div class="mt-2">
                    <input
                      type="text"
                      placeholder="Event Title"
                      onInput={(event) => setEventTitle(event.target.value)}
                    />
                    <br />
                    <label for="date-select">Date</label>
                    <input
                      id="date-select"
                      type="date"
                      placeholder="date"
                      onInput={(event) => setEventDate(event.target.value)}
                    />
                    {/* <input type='text' id='time-input' placeholder='time'/> */}
                    <br />
                    <label for="package-select">Select Package</label>

                    <div
                      className="package-select overflow-y-auto h-44 border w-full"
                      id="package-select"
                    >
                      {packages.map((package1) => {
                        return (
                          <div
                            className=" hover:shadow-2xl hover:border-transparent"
                            key={package1?._id}
                            class={
                              selectedPackage === package1?._id
                                ? 'bg-blue-100 individual-package-container shadow-md'
                                : 'individual-package-container shadow-md '
                            }
                            onClick={() => handleSelectPackage(package1?._id)}
                          >
                            <h2 className="w-52">{package1?.name}</h2>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button onClick={handleGenerateEvent} type="button" class="btn-1">
                Generate Event Link
              </button>
              <button onClick={handleClose} type="button" class="btn-2">
                Close
              </button>
            </div>
            <div>
              <EventLink display={showLinkClassName} eventURL={eventURL} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
