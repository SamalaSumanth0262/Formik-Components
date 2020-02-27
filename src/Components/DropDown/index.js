import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';
import Select from 'react-select';
import renderHtml from 'react-render-html';

const customStyles = {
  indicatorSeparator: () => ({
    width: 1
  }),
  control: (base, state) => {
    return {
      ...base,
      boxShadow: 'none',
      borderColor: state.isFocused || state.isHover || state.menuIsOpen ? '#979797' : base.borderColor
    };
  }
};

//Native Dropdown
const CustomDropDown = (props) => {
  return (
    <div className="esop-select-group">
      <select {...props.field} disabled={props.disabled}>
        <option selected>Choose...</option>
        {props.option.map((v, idx) => (
          <option key={`${props.name}_${idx}`} value={v.value}>
            {v.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const CustomReactSelect = (props) => {
  let { name, onChange, onBlur, value } = props.field;
  let { setFieldValue, setFieldTouched } = props.form;
  return (
    <div className={props.split ? 'col-lg-5 p-0 esop-select-group' : 'esop-select-group'}>
      <Select
        isClearable={false}
        styles={customStyles}
        options={props.option}
        onChange={(e) => {
          setFieldTouched(name);
          setFieldValue(name, e);
          if (props.isCustomHandle) {
            props.handleCustom(e.value, props);
          }
        }}
        value={value}
        placeholder={props.placeholder}
      />
    </div>
  );
};
const DropDown = (props) => {
  return (
    <div className={props.split ? 'row m-0 field-row-pb' : 'esop-form-group'}>
      <label
        for={props.labelFor}
        className={props.split ? 'col-lg-5 p-0' : classnames({ 'form-disabled': props.disabled })}
      >
        {renderHtml(props.labelTitle)} {props.isMandatory ? <span className="text-mandatory">*</span> : ''}
      </label>

      <Field
        className={props.split ? 'esop-form-control col-lg-5' : 'esop-form-control'}
        disabled={props.disabled}
        name={props.labelName}
        component={CustomReactSelect}
        option={props.option}
        handleCustom={props.handleCustom}
        isCustomHandle={props.isCustomHandle}
        split={props.split}
        placeholder={props.placeholder}
        {...props}
      />
      {props.split && <div className={props.split && 'col-lg-5'} />}

      {props.notes && (
        <div className={props.split ? 'esop-notes col-lg-5 pl-0' : 'esop-notes'}>{renderHtml(props.notes)}</div>
      )}
      {props.split && !props.notes && <div className={'col-lg-5'} />}
      {props.split && <div className={props.split && 'col-lg-5'} />}
      <div className={props.split ? 'esop-error-text col-lg-5 pl-0' : 'esop-error-text'}>
        <ErrorMessage name={props.labelName} />
      </div>
    </div>
  );
};

DropDown.propTypes = {
  labelTitle: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  isMandatory: PropTypes.bool,
  isCustomHandle: PropTypes.bool,
  defaultValue: PropTypes.array
};

DropDown.defaultProps = {
  isMandatory: false,
  isCustomHandle: false
};

export default DropDown;
