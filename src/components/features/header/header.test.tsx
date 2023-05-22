
import {
  fireEvent,
  render, screen
} from '@testing-library/react';
import Header from '.';
import { IArtist } from '@/services/repositories/spotify.repository';
import { SessionProvider } from 'next-auth/react';
import { act } from 'react-dom/test-utils';

const imageTest = {url: 'url test'};

const pushMock = jest.fn();

jest.mock('next/router', () => {
  const useRouter = () => {
    return {
      asPath: '',
      pathname: '',
      push: () => pushMock(),
      query: '',
      route: ''
    };
  };

  return { useRouter };
});

jest.mock('@/helpers/get-params-url', () => (
  {getParamsUrl: jest.fn().mockReturnValue('')}
));

const signIn = jest.fn();
const signOut = jest.fn();

jest.mock('next-auth/react', () => {
  const useSession = () => {
    return { data: {user: {image: 'image test'}} };
  };

  return {
    ...jest.requireActual('next-auth/react'),
    signIn: () => signIn(),
    signOut: () => signOut(),
    useSession
  };
});

global.fetch = jest.fn();

const mockSession = {
  expires: '',
  user: {
    email: '',
    image: '',
    name: ''
  }
};

describe('Tests in Artist component', () => {
  const setup = () => {
    return render(
      <SessionProvider session={mockSession}>
        <Header />
      </SessionProvider>
    );
  };

  test('Should render the component', async () => {
    const {
      asFragment, getByTestId
    } = setup();

    const buttonImage = getByTestId('img_butt');

    fireEvent.click(buttonImage);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should close session', async () => {
    const {getByText} = setup();

    const buttonClose = getByText('Cerrar sesión');

    fireEvent.click(buttonClose);

    expect(signOut).toHaveBeenCalled();
  });

  test('Should close redirect main page', async () => {
    const {getByTestId} = setup();

    const butttonLogo = getByTestId('logo');

    fireEvent.click(butttonLogo);

    expect(pushMock).toHaveBeenCalled();
  });

  test('Should search value', async () => {
    const {
      getByTestId, getByPlaceholderText
    } = setup();

    const buttSearch = getByTestId('search');

    await act(async () => {
      fireEvent.change(getByPlaceholderText('Buscar'), {target: { value: 'michael jackson' }});

      fireEvent.click(buttSearch);
    });
    expect(pushMock).toHaveBeenCalled();
  });
});
