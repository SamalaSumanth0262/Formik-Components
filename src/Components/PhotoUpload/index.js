import { ErrorMessage, Field } from 'formik';
import _ from 'lodash';
import React, { useState } from 'react';
import renderHTML from 'react-render-html';
import './styles.scss';
const CustomPhotoUpload = (props) => {
  let [filePreview, setFilePreview] = useState('https://via.placeholder.com/80');
  let handleUpload = (event) => {
    var currentFile = event.currentTarget.files[0];
    props.form.setFieldTouched(props.field.name);
    props.form.setFieldValue(props.field.name, currentFile);
    var currentFilePreview = URL.createObjectURL(currentFile);
    setFilePreview(currentFilePreview);
  };
  return (
    <React.Fragment>
      <div className="d-inline-flex">
        {props && (
          <img
            className="mt-1"
            src={!_.isEmpty(props.field.value) ? props.field.value : filePreview}
            width="70"
            height="70"
          />
        )}
        <div className="upload-btn-wrapper">
          <div style={{ marginTop: '17px' }}>
            <button className='btn btn-primary' onClick={handleUpload}>Upload</button>
          </div>
          <input type="file" accept="image/*" name="myfile" onChange={handleUpload} />
        </div>
      </div>
    </React.Fragment>
  );
};

const PhotoUpload = (props) => {
  let { errors, touched } = props;

  return (
    <div className="esop-form-group">
      <label htmlFor={props.labelFor}>
        {props.labelTitle} {props.isMandatory ? <span className="text-mandatory">*</span> : ''}
      </label>
      <Field name={props.labelName} component={CustomPhotoUpload} />
      {props.notes && <div className="esop-file-notes">{renderHTML(props.notes)}</div>}
      <div className="esop-error-text">
        <ErrorMessage name={props.labelName} />
      </div>
    </div>
  );
};

export default PhotoUpload;
