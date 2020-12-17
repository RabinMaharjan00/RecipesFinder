import React from "react";

const Message = ({ message }) => {
  return (
    <React.Fragment>
      <div className="h4 text-center" id="center">
        <p>There are no search results. Try again!</p>
      </div>
    </React.Fragment>
  );
};

export default Message;
