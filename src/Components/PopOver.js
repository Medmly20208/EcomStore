import React from "react";
import PropTypes from "prop-types";

const PopOver = (props) => {
  return (
    <>
      {props.display == true ? props.content : <></>}
      {props.display == true ? (
        <div
          className="fixed w-full h-full top-0 left-0 z-0 "
          onClick={props.onClose}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
};

PopOver.propTypes = {
  content: PropTypes.element,
  display: PropTypes.bool,
  onClose: PropTypes.func,
};

export default PopOver;
