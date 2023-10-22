import { useState } from "react";
import Jumbo from "../../components/cards/Jumbo";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const REACT_APP_API = "http://localhost:8000/api";

  //connect to the back-end via api
  const handleSubmit = async (e) => {
    e.preventDefault(); //this prevent the browser from refreshing  and errassing everthing
    try {
      const { data } = await axios.post(`${REACT_APP_API}/login`, {
        email,
        password,
      });
      console.log(data);

      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Login Sucessful");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
  };

  return (
    <>
      <div>
        <Jumbo title="Login" />
        <Toaster />
        <div className="conatiner mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="form-control mb-4 p-2"
                  placeholder="name@gmail.com"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="form-control mb-4 p-2 "
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
