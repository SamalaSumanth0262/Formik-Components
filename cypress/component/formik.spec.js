import React from 'react';
import TextInput from '../../src/Components/TextInput';
import TextArea from '../../src/Components/TextArea';
import RadioBox from '../../src/Components/RadioBox';
import CkEditor from '../../src/Components/CkEditor';
import CheckBox from '../../src/Components/CheckBox';
import PhotoUpload from '../../src/Components/PhotoUpload';
import DropZone from '../../src/Components/DropZone';
import DropDown from '../../src/Components/DropDown';
import { Formik } from 'formik';
import { mount } from 'cypress-react-unit-test';
const radioOptions = [
  {
    name: "Yes",
    value: true,
    labelTitle: "Yes"
  }, {
    name: "No",
    value: false,
    labelTitle: 'No'
  }
]

const DropDownOptions = [{
  label: 'option 1',
  value: 'option 1'
}, {
  label: 'option 2',
  value: 'option 2'
}]

describe('Mounting a formik components', () => {
  it('should render TextInput', () => {
    mount(<Formik render={() => {
      return (<TextInput type='text' labelName='name' labelTitle='Text Input' isMandatory={true} />)
    }} />)
  })

  it('should render Text Area', () => {
    mount(<Formik render={() => {
      return (<TextArea type='text' labelName="text_area" labelTitle='TextArea' isMandatory={true} />)
    }} />)
  })

  it('should render Radio Box', () => {
    mount(<Formik render={() => {
      return (<RadioBox labelName="radio_box" labelTitle="Radio Box" options={radioOptions} isMandatory={true} />)
    }} />)
  })

  it('should render CkEditor', () => {
    mount(<Formik render={() => {
      return (<CkEditor labelName='cke_editor' labelTitle="Check Your CKE Editor" isMandatory={true} />)
    }} />)
  })

  it('should render CheckBox', () => {
    mount(<Formik render={() => {
      return (<CheckBox labelName='check_box' labelTitle="CheckBox" isMandatory={true} />)
    }} />)
  })

  it('should render Photo Upload', () => {
    mount(<Formik render={() => {
      return (<PhotoUpload
        labelName="photo_upload"
        labelTitle="Upload Photo"
        labelFor="photo_upload"
        isMandatory={true}
      />)
    }} />)
  })

  it('should render Drop Zone', () => {
    mount(<Formik render={() => {
      return (<DropZone
        labelName="file_drop_zone"
        labelTitle="File Drop Zone"
        labelFor="File Drop Zone"
        isMandatory={true}
      />)
    }} />)
  })

  it('should render Drop Down', () => {
    mount(<Formik render={() => {
      return (<DropDown
        split={false}
        labelTitle='Drop Down'
        option={DropDownOptions}
        labelFor='drop_down'
        labelName='drop_down'
        isMandatory={true}
      />)
    }} />)
  })
})

