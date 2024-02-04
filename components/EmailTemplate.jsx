import React from 'react';

export const EmailTemplate = ({ firstName, email, message }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>You have a new message:</p>
    <p>{message}</p>
    <p>From: {email}</p>
  </div>
);
