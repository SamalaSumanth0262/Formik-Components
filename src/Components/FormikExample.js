import React from 'react'
import { Formik } from "formik";
import TextInput from './TextInput';
import * as Yup from "yup";
import CkEditor from './CkEditor';
const exampleSchema = Yup.object().shape({
  name: Yup.string().required('Text is Required'),
  cke_editor: Yup.string().required('CKE editor is required')
})
class FormikExample extends React.Component {
  state = {
    name: "",
    sumanth: ""
  }
  render() {
    let renderView = props => {
      return (
        <form onSubmit={props.handleSubmit}>
          <div>
            <TextInput type='text' labelName='name' labelTitle='Name' />
            <CkEditor labelName='cke_editor' isMandatory={true} />
          </div>
        </form>
      )
    }
    return (
      <Formik initialValues={this.state.initialValues} render={renderView} validationSchema={exampleSchema} />
    )
  }
}

export default FormikExample;