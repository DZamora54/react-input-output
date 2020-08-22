import React from "react";

const useroutput = (props) => {
  return (
    <div>
      <p>This is the first user output paragraph.</p>
      <p>This is the second user output paragraph.</p>
      <p>Username: {props.username}</p>
    </div>
  );
};

export default useroutput;
