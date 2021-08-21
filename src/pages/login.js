import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { Link, useHistory } from 'react-router-dom';
// import FirebaseContext from '../context/firebase';
// import * as ROUTES from '../constants/routes';

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const[user, setUser] = useContext(UserContext);

  const handleClick = () => {
    if(username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD)
    {
        console.log('USERNAME PASSWORD MATCH');
        setUser('Changed the default user');
        history.push('/edit-blog');
    }
  };

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      {/* <form> */}
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button onClick={handleClick}>Submit</button>
        </div>
      {/* </form> */}
    </div>
  );
}
