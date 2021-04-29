import classNames from 'classnames';
import { Route, Switch, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import SignInPage from './sign-in';
import { Protected } from './authentication/signInWithAuth';

function AuthentPage(props) {
  const location = useLocation();
  return (
    <div className="row">
      <div className="col-12 mb-5">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link
              className={classNames('nav-link', {
                active: location.pathname.includes('/sign-in'),
              })}
              to="/auth/sign-in"
            >
              sign in
            </Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <Switch>
          <Route path="/auth/sign-in">
            <SignInPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Protected(AuthentPage);
