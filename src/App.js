import { Route, Switch } from 'react-router';
import AuthPage from './pages/auth';

import Navigation from './components/navigation';
import Theme from './components/theme';

import './App.css';

function App() {
  <div className="main-box">
    <Navigation />
    <Switch>
      <Route path="/authentication">
        <AuthPage />
      </Route>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Company} />
      </Switch>
    </Switch>
  </div>;
}

export default App;
