import { signIn } from 'next-auth/react';
import styles from './login.module.scss';
interface LoginProps {
  name: string
  id: string
}
const Login:React.FC<LoginProps> = ({
  name, id
}) => {
  return (
    <div className={`container ${ styles.container }`}>
      <div className={styles.login_container} key={name}>
        <div className={styles.image}>
          <img src="/img/logo-bolivar-yellow.svg" alt="" width={500} />
          <img className={styles.logo_spotify} src="/img/spotify-logo.svg" alt="" width={150} />
        </div>
        <div className={styles.form}>
          <h2>¡Bienvenido de nuevo!</h2>
          <button onClick={() => signIn(id)}>
              Sign in with {name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
