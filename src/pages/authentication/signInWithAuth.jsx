import { useEffect } from 'react';
import { Redirect } from 'react-router';

export const Protected = (Component) => {
  const Protected = (props) => {
    useEffect(() => {
      console.log('protected page');
    }, []);

    const token = JSON.parse(localStorage.getItem('auth.token'));
    if (!token) {
      return <Redirect to="/" />;
    }
    return <Component {...props} />;
  };

  return Protected;
};
