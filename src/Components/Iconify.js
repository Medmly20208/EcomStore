import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

import React from "react";

const Iconify = (props) => {
  return (
    <Icon
      icon={props.icon}
      style={{ ...props.style }}
      onClick={props.onClick}
    />
  );
};
Iconify.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Iconify;
