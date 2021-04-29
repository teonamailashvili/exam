import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    fetch("https://reqres.in/api/login")
      .then((res) => res.json())
      .then((res) => {
        alert(res);
      });
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={(e) => login(e)}>
          <div className="form-group">
            <input
              type="text"
              value={name}
              className="form-control"
              placeholder="userName"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              value={password}
              placeholder="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
