import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';

const SurveyNew = () => {
  const [showReview, setShowReview] = useState(false);
  return (
    <div>
      {showReview ? (
        <SurveyReview onCancel={() => setShowReview(false)} />
      ) : (
        <SurveyForm onSurveySubmit={() => setShowReview(true)} />
      )}
    </div>
  );
};

export default reduxForm({
  form: 'SurveyForm'
})(SurveyNew);
