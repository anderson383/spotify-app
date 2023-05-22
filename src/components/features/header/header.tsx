import * as yup from 'yup';
import {
  signIn, signOut, useSession
} from 'next-auth/react';
import { Formik } from 'formik';
import { getParamsUrl } from '@/helpers/get-params-url';
import Image from 'next/image';
import { InputText } from '@/components/ui/atoms/input-text/input-text';
import { MenuDropDown } from '@/components/ui/atoms/menu-dropdown/menu-dropdown';
import styles from './header.module.scss';
import { useRouter } from 'next/router';

const DEFAULT_IMG = 'https://th.bing.com/th/id/OIP.PB3QCTk1kCZZ6ZvvVqpM5gHaHa?pid=ImgDet&rs=1';
const Header = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const initialValues = {search: getParamsUrl('q')};

  const searchSubmit = (values:{search:string}) => {
    if (values.search) {
      router.push('/search?q=' + values.search);
    }
  };

  return (

    <header className={`${ styles.header_container }`} >
      <div className={`${ styles.header }  container`}>
        <div data-testid="logo" className={styles.logo} onClick={() => router.push('/')}>
          <Image
            src={'/img/logo-bolivar.svg'}
            width={100}
            height={100}
            alt='Logo constructora bolivar'
          />
          <Image
            src={'/img/spotify-logo.svg'}
            width={100}
            height={100}
            alt='Logo constructora bolivar'
          />
        </div>

        <nav className={styles.menu}>
          {
            session && (
              <Formik
                initialValues={initialValues}
                onSubmit={searchSubmit}
              >
                {({handleSubmit}) => (
                  <form onSubmit={handleSubmit}>
                    <div className="">
                      <InputText name='search' placeholder='Buscar' search />
                    </div>

                    <MenuDropDown
                      className={styles.position_menu}
                      activator={setOpenMenu => (
                        <span data-testid="img_butt" className={styles.profile} onClick={() => setOpenMenu()}>
                          <img src={session.user.image ? session.user.image : DEFAULT_IMG} alt="" />
                        </span>
                      )}
                    >
                      <div className={styles.menuSession}>
                        <button type='button' onClick={() => signOut()}>
                          Cerrar sesión
                        </button>
                      </div>
                    </MenuDropDown>
                    {/* <button style={{display: 'none'}} ></button> */}
                  </form>
                )}
              </Formik>
            )
          }
        </nav>
      </div>
    </header>
  );
};

export default Header;
