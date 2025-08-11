import React from 'react';

import { ErrorMessageTypes } from '../../types/error-message/ErrorMessage';


const ErrorMessage: React.FC<ErrorMessageTypes> = ({ message }) => (
  <div role="alert" style={{ color: 'red', margin: '1rem 0' }}>
    {message}
  </div>
);

export default ErrorMessage;