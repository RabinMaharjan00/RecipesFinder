import React from "react";

const Result = ({ alt, image, mealId, index, onClick }) => {
  const clickHandle = (e, index) => {
    e.preventDefault();
    onClick(index);
  };
  return (
    <React.Fragment>
      <div className="meal" onClick={(e) => clickHandle(e, index)}>
        <img src={image} alt={alt} />
        <div className="meal-info" data-mealid={mealId}>
          <h4 className="text-white">{alt}</h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Result;
