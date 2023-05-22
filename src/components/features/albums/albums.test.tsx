
import {
  render, screen
} from '@testing-library/react';
import Albums from '.';
import { IAlbum } from '@/services/repositories/spotify.repository';

const imageTest = {url: 'url test'};

const albumsTest:IAlbum[] = [
  {
    artists: [
      {
        external_urls: {spotify: ''},
        followers: {total: 20000000},
        id: 'Artista de prueba',
        images: [imageTest],
        name: 'Artista'
      }
    ],
    external_urls: {spotify: ''},
    id: 'idted',
    images: [
      imageTest
    ],
    name: 'Albums de prueba'
  }
];

describe('Tests in Albums component', () => {
  const setup = (albums: IAlbum[]) => {
    return render(
      <Albums title='Albums' albums={albums}/>
    );
  };

  test('Should render the component', () => {
    const {asFragment} = setup(albumsTest);

    expect(asFragment()).toMatchSnapshot();
  });

  test('Should render the component if not pass the prop albums', () => {
    const {asFragment} = setup(null);

    expect(asFragment()).toMatchSnapshot();
  });
});
