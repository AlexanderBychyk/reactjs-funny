import React from 'react';

const Option = (props) => (
  <div>
    <p>
      {props.optionText}
      &nbsp;
      <button
        onClick={() => {
          props.handleDeleteOption(props.optionText);
        }}
      >remove
      </button>
    </p>
  </div>
);

export default Option;
