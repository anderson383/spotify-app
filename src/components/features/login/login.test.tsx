
import {
  fireEvent, render
} from '@testing-library/react';
import Login from '.';

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

describe('Tests in Traks component', () => {
  const setup = () => {
    return render(
      <Login name="spotify" id='login' />
    );
  };

  test('Should render the component', () => {
    const {asFragment} = setup();

    expect(asFragment()).toMatchSnapshot();
  });
  test('Should render click loggin', () => {
    const {getByText} = setup();

    const button = getByText('Sign in with spotify');

    fireEvent.click(button);

    expect(signIn).toHaveBeenCalled();
  });
});
