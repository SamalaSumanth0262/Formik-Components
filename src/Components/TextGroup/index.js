import classnames from 'classnames';
import {ErrorMessage, Field} from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import renderHtml from 'react-render-html';
import Select from 'react-select';
import './styles.scss';
const customStyles = {
  indicatorSeparator: () => ({
    width: 1
  }),
  container: (base) => ({
    ...base,
    width: 120,
    display: 'inline-block'
  }),
  valueContainer: (base) => ({
    ...base,
    height: 35
  }),
  control: (base, state) => ({
    ...base,
    boxShadow: 'none',
    borderColor: state.isFocused || state.isHover || state.menuIsOpen ? '#979797' : base.borderColor
  })
};

const CustomTextGroup = ({field, form, innerRef, ...props}) => {
  const onChangeAction = (e) => {
    if (props.onOptionChange) props.onOptionChange(e);
  };
  return (
    <div className={props.split ? 'col-lg-5 p-0 esop-text-group' : 'esop-text-group'}>
      <input
        type="text"
        {...field}
        {...props}
        onChange={(changeEvent) => {
          form.setFieldValue(field.name, changeEvent.target.value);
          if (props.onTextChange) props.onTextChange(changeEvent);
        }}
        style={props.split ? {width: '70%'} : {}}
      />
      <div className="esop-drop-view" style={props.split ? {width: '30%'} : {}}>
        <Select
          ref={innerRef}
          isDisabled={props.disabled}
          isSearchable={false}
          styles={customStyles}
          isClearable={false}
          options={props.selectOptions}
          defaultValue={props.defaultValue ? props.defaultValue : props.selectOptions ? props.selectOptions[0] : {}}
          onChange={onChangeAction}
        />
      </div>
    </div>
  );
};

// To access value of dropdown from select element create a ref in parent component
const TextGroup = React.forwardRef((props, ref) => {
  return (
    <div className={props.split ? 'row m-0 field-row-pb' : 'esop-form-group'}>
      <label
        for={props.labelFor}
        className={props.split ? 'col-lg-5 mt-2 p-0' : classnames({'form-disabled': props.disabled})}
      >
        {props.labelTitle} {props.isMandatory ? <span className="text-mandatory">*</span> : ''}
      </label>

      <Field
        innerRef={ref}
        disabled={props.disabled}
        name={props.labelName}
        selectOptions={props.selectOptions}
        component={CustomTextGroup}
        split={props.split}
        defaultValue={props.defaultValue}
        onTextChange={props.onTextChange}
        onOptionChange={props.onOptionChange}
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
});

TextGroup.propTypes = {
  labelTitle: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  isMandatory: PropTypes.bool
};

TextGroup.defaultProps = {
  isMandatory: false,
  disabled: false
};

export default TextGroup;
