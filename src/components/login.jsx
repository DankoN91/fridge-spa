import * as React from "react";
import { useHistory } from "react-router-dom";

export const Login = (props) => {
  const history = useHistory();
  const [identification, setIdentification] = React.useState("");
  const [password, setPassword] = React.useState("");

  const setLoggedIn = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (identification && password) {
      console.log(identification);
      fetch(`http://127.0.0.1:3000/login?identification=${identification}`)
        //   fetch(`http://127.0.0.1:3000/login/`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: JSON.stringify({
        //       identification: identification,
        //       password: password,
        //     }),
        //   })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data[0].successful === true) {
            window.localStorage.setItem("userId", data[0].id);
            window.location.href = 'http://127.0.0.1:3001/fridge';
            // history.push("/fridge");
          } else alert("Something went wrong!");
        });
    }
  };

  const handleChangeIdentification = (e) => {
    setIdentification(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="container">
        <label for="uname">
          <b>Username or email</b>
        </label>
        <input
          type="text"
          placeholder="Enter username or email"
          //   name="uname"
          required
          value={identification}
          onChange={handleChangeIdentification}
        />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter password"
          //   name="psw"
          required
          value={password}
          onChange={handleChangePassword}
        />

        <button type="submit">Login</button>
      </div>
    </form>
  );
};
