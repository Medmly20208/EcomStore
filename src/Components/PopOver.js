import React from "react";
import PropTypes from "prop-types";

const PopOver = (props) => {
  return <>{props.display == true ? props.content : <></>}</>;
};

PopOver.propTypes = {
  content: PropTypes.element,
  display: PropTypes.bool,
};

export default PopOver;
