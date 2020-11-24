import React from 'react';
import { useClipboard } from 'use-clipboard-hook';
import './eventLink.css';

const EventLink = ({ display, eventURL }) => {
  let showLinkClassName = display ? 'block' : 'hidden';

  const { ref, copy } = useClipboard({
    onSuccess: (text) => alert(`Copied: ${text}`)
  });

  return (
    <div class={showLinkClassName}>
      <div>
        <div class="mt-1 relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {/* <span class="text-gray-500 sm:text-sm">{eventURL}</span> */}
          </div>
          <input
            readonly
            type="text"
            id="price"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-700 rounded-md"
            value={eventURL}
            ref={ref}
          />
          <div class="clipboard-button absolute inset-y-0 right-0 flex items-center">
            <svg
              onClick={copy}
              class="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              ></path>
            </svg>
            {/* <img
              src=''
              
              id="Currency"
              class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLink;
