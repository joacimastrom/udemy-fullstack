import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import { submitSurvey } from '../../actions';

const ReviewField = ({ label, value }) => (
  <div>
    <label>{label}</label>
    <div>{value}</div>
  </div>
);

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => (
  <div>
    <h5>Please confirm your entries</h5>
    <div>
      {formFields.map(({ label, name }) => (
        <ReviewField key={name} label={label} value={formValues[name]} />
      ))}
    </div>
    <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
      Back
    </button>
    <button
      onClick={() => submitSurvey(formValues, history)}
      className="green btn-flat right white-text"
    >
      Send Survey
      <i className="material-icons right">email</i>
    </button>
  </div>
);

const mapStateToProps = state => ({ formValues: state.form.surveyForm.values });

export default connect(
  mapStateToProps,
  { submitSurvey }
)(withRouter(SurveyReview));
