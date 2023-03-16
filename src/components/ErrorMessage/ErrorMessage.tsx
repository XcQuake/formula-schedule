import React from 'react';

import './ErrorMessage.scss';

interface Props {
  message?: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => (
  <div className="errormessage">
    <h3 className="errormessage__title">Error</h3>
    <p className="errormessage__message">{message || 'Something went wrong!'}</p>
  </div>
);

export default ErrorMessage;
