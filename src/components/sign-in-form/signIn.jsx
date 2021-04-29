import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { logIn } from '../../services/loginAuth';

function SignInForm(props) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const loggedIn = await logIn(data);
    localStorage.setItem('auth.token', JSON.stringify(loggedIn.token));
    history.replace('/profile');
  };

  return (
    <div className="col-6">
      <h2>Sign in form</h2>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            defaultValue="youremail@gmail.com"
            {...register('email', { required: true })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            defaultValue="your password"
            {...register('password', {
              required: true,
            })}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          sign in
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
