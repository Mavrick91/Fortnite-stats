import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App';
import LogRocket from 'logrocket';

LogRocket.init('3bh0jz/fortnite');

// This is an example script - don't forget to change it!
LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
  name: 'James Morrison',
  email: 'jamesmorrison@example.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro',
});

ReactDOM.render(<App />, document.getElementById('root'));
