import React from 'react'
import { Formik } from "formik";
import TextInput from './TextInput';
import * as Yup from "yup";
import CkEditor from './CkEditor';
import TextArea from './TextArea';
import RadioBox from './RadioBox';
//Yup Validaation STARTS 
import { radioOptions } from '../constants';
const exampleSchema = Yup.object().shape({
  name: Yup.string().required('Text is Required'),
  cke_editor: Yup.string().required('CKE editor is required'),
  text_area: Yup.string().required('Text Area is Empty..')
})

//Yup Validation ENDS

class FormikExample extends React.Component {
  state = {
    initialValues: {
      name: "",
      text_area: "",
      cke_editor: ""
    }
  }


  handleSubmitForm = ({ values, actions }) => {
    console.log("TCL: FormikExample -> handleSubmitForm -> {values, actions}", { values, actions })
  }

  render() {
    let renderView = props => {
      return (
        <form onSubmit={props.handleSubmit}>
          <div className="container">
            <div className='row'>
              <div className="col-sm-6">
                <TextInput type='text' labelName='name' labelTitle='Text Input' isMandatory={true} />
                <TextArea type='text' labelName="text_area" labelTitle='TextArea' isMandatory={true} />
                <CkEditor labelName='cke_editor' labelTitle="Check Your CKE Editor" isMandatory={true} />
                <RadioBox labelName="radio_box" labelTitle="Radio Box" options={radioOptions} isMandatory={true} style={{ width: '6%' }} />
                <button type="submit" className="btn btn-primary mt-5">Submit</button>
              </div>
            </div>
          </div>
        </form>
      )
    }
    return (
      <Formik initialValues={this.state.initialValues} render={renderView} validationSchema={exampleSchema} handleSubmit={({ values, actions }) => {
        this.handleSubmitForm({ values, actions })
      }} />
    )
  }
}

export default FormikExample;