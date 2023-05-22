
import {
  IAlbum, ITrack
} from '@/services/repositories/spotify.repository';
import {
  render, screen
} from '@testing-library/react';
import Tracks from '.';

const imageTest = {url: 'url test'};
const artistTest = {
  external_urls: {spotify: ''},
  followers: {total: 20000000},
  id: 'Artista de prueba',
  images: [imageTest],
  name: 'Artista'
};
const tracksMock:ITrack[] = [
  {
    album: {
      artists: [artistTest],
      external_urls: {spotify: ''},
      id: 'album test',
      images: [imageTest],
      name: 'album'
    },
    artists: [
      artistTest
    ],
    id: 'idted',
    name: 'Albums de prueba',
    preview_url: 'url'
  }
];

describe('Tests in Traks component', () => {
  const setup = (tracks: ITrack[]) => {
    return render(
      <Tracks tracks={tracks}/>
    );
  };

  test('Should render the component', () => {
    const {asFragment} = setup(tracksMock);

    expect(asFragment()).toMatchSnapshot();
  });

  test('Should render if not pass props', () => {
    const {asFragment} = setup(null);

    expect(asFragment()).toMatchSnapshot();
  });
});
