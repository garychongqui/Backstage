import React, { useEffect, useState } from 'react';
import './stage.css';

const Stage = (props) => {
  const [icons, setIcons] = useState(props);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setIcons(props.iconsForStage);
    console.log(typeof icons);
  }, [isUpdated]);

  return (
    <div className="the-stage">
      {/* {icons.map((icon) => {
        return <h4>{icon}</h4>;
      })} */}
      <h1>hello</h1>
    </div>
  );
};

export default Stage;
