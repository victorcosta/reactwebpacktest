import React from "react";
import PropTypes from "prop-types";

export default function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Oculto"
};

TechItem.PropTypes = {
  tech: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};
