import React, { useState, useEffect } from "react";
import InputWithIcon from "../commons/others/InputWithIcon";

export default function CustomInput(props) {
  const [validations, setValidations] = useState(props.validations ?? []);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // setErrors([])
  }, [errors]);

  const validateInput = (e) => {
  
    let newErrors = [];
    setErrors(newErrors)

    validations.forEach((validation) => {
      const newError = validation(e);
      if (newError.length > 0) {
        newErrors.push(newError)
      }
    });
   
    props.onChange(e);
    setErrors(newErrors)
  };

  const getError = (e) => {
    let errorString = "";
    e.forEach((error, index) => {
      if (index === e.length - 1) {
        errorString += error;
      } else {
        errorString += error + " | ";
      }
    });

    return errorString;
  };

  return (
    <div>
      <p className="text-xl font-semibold mb-2">{props.title}</p>
      {errors.length > 0 && (
        <small className="text-red-300 text-xs flex items-center ml-3 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            className="bi bi-exclamation-circle text-red-300 mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
          <span>{getError(errors)}</span>
        </small>
      )}
      <InputWithIcon type={props.type} label={props.label} onChange={(e) => validateInput(e)}>
        {props.children}
      </InputWithIcon>
    </div>
  );
}
