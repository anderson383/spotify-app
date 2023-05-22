
import {
  render, screen
} from '@testing-library/react';
import Artist from '.';
import { IArtist } from '@/services/repositories/spotify.repository';

const imageTest = {url: 'url test'};

const artistsTest:IArtist[] = [
  {
    external_urls: {spotify: ''},
    followers: {total: 20000000},
    id: 'Artista de prueba',
    images: [imageTest],
    name: 'Artista'
  },
  {
    external_urls: {spotify: ''},
    followers: {total: 200},
    id: 'Artista de prueba 2',
    images: [],
    name: 'Artista 2'
  }
];

describe('Tests in Artist component', () => {
  const setup = (artists: IArtist[]) => {
    return render(
      <Artist title='Artist' artists={artists}/>
    );
  };

  test('Should render the component', () => {
    const {
      asFragment, debug
    } = setup(artistsTest);

    expect(asFragment()).toMatchSnapshot();
  });

  test('Should render the component if not pass the prop albums', () => {
    const {asFragment} = setup(null);

    expect(asFragment()).toMatchSnapshot();
  });
});
