import React from 'react';

const Alert = (props) => {
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  // Want to dismiss alert automatically after two seconds
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            {/* <span aria-hidden="true">&times;</span> */}
          </button>
        </div>
      </div>
    )
  );
};

export default Alert;
