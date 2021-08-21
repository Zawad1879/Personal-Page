import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { Link, useHistory } from 'react-router-dom';
// import FirebaseContext from '../context/firebase';
// import * as ROUTES from '../constants/routes';
import LoginForm from '../components/login-form'

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const[user, setUser] = useContext(UserContext);

  const handleSubmit = (evt) => {
    if(username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD)
    {
        console.log('USERNAME PASSWORD MATCH');
        history.push('/edit-blog');
    }
  };

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
      <div>
        <LoginForm setUsername={setUsername} setPassword={setPassword} handleSubmit={handleSubmit}/>
      </div>
  );
}
