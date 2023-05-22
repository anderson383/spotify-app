import '@/styles/styles.scss';
import 'normalize.css/normalize.css';
import type { AppProps } from 'next/app';
import { RepositoryIocProvider } from '@/services/context';
import {SessionProvider} from 'next-auth/react';

function App(props:AppProps) {
  const {
    pageProps: {session}, Component
  } = props;

  return (
    <SessionProvider session={session}>
      <RepositoryIocProvider>
        <Component {...props.pageProps} />
      </RepositoryIocProvider>
    </SessionProvider>
  );
}
export default App;
