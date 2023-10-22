import { useState } from "react";
import Jumbo from "../components/cards/Jumbo";

export default function Register() {
  //useState - it is a react hook that let me add a state variable in my component -- state lets a component remember(store) information like userr input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      console.log(name, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <Jumbo title="Register" />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handleSubmit}>
                {/*the adavantage of enclossing everything ina form is that the user does not neccessarily have to press submit the user can just press enter */}
                <input
                  type="text"
                  className="form-control mb-4 p-2"
                  placeholder="Enter Name Here"
                  autoFocus
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />

                <input
                  type="email"
                  className="form-control mb-4 p-2"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                <input
                  type="password"
                  className="form-control mb-4 p-2"
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
