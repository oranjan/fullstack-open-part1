// 1.1

import React from "react";

function Part(props) {
  const { part, exercise } = props;
  return (
    <p>
      {part} {exercise}
    </p>
  );
}

export default Part;