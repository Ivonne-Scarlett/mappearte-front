import React from 'react';
import classNames from 'classnames';

import LoginForm from '../components/form/LoginForm';


export default function login() {
  return (
    <div className={classNames(
      'bg-loginBlur bg-no-repeat bg-cover w-full min-h-screen',
      'py-20 px-10'
      )}>
        <LoginForm />
    </div>

  )
}
