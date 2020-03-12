import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TextInput from '../src/Components/TextInput';
import * as Yup from "yup";
import CkEditor from '.../src/Components/CkEditor';
import TextArea from '.../src/Components/TextArea';
import RadioBox from '.../src/Components/RadioBox';
import CheckBox from '.../src/Components/CheckBox';
import PhotoUpload from '.../src/Components/PhotoUpload';
import DropZone from '.../src/Components/DropZone';
import DropDown from '.../src/Components/DropDown';
import DatePicker from '.../src/Components/DatePicker';
import TextGroup from '.../src/Components/TextGroup';

export { TextInput, CkEditor, TextArea, RadioBox, CheckBox, PhotoUpload, DropZone, DropDown, DatePicker, TextGroup }

ReactDOM.render(<App />, document.getElementById('root'));

