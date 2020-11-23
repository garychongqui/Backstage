import React from 'react';

const EventLink = ({ display, eventURL }) => {
  let showLinkClassName = display ? 'block' : 'hidden';

  return (
    <div class={showLinkClassName}>
      <h1>{eventURL}</h1>
    </div>
  );
};

export default EventLink;
