import SignInForm from '../../components/sign-in-form/signIn';

function SignInPage(props) {
  return (
    <div className="row">
      <h2>Sign in Page</h2>
      <div className="row">
        <SignInForm />
      </div>
    </div>
  );
}

export default SignInPage;
