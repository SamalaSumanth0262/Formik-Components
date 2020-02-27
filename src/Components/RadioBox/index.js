import React from 'react';
import "./styles.scss";
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import renderHtml from "react-render-html";

const RadioBox = (props) => {
  const { options, labelTitle, labelFor, width } = props
  return (
    <div>
      <label for={labelFor}>
        {renderHtml(labelTitle)}
        {props.isMandatory ? (<span className='text-mandatory'>&nbsp;*</span>) : ("")}
        {options.map((option) => {
          const { labelName } = option
          return (
            <label className="inline">
              <Field
                disabled={props.disabled}
                type={"radio"}
                className=''
                name={props.labelName + '_' + `${option.labelName}`}
                validate={props.validate}
                {...props}
              />
              {renderHtml(labelName)}
            </label>
          )
        })}
      </label>
      <div className='error-text'>
        <ErrorMessage name={props.labelName} />
      </div>
    </div>
  )
}

RadioBox.propTypes = {
  labelName: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.bool
  })),
  width: PropTypes.string.isRequired
}

export default RadioBox;