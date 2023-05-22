import {
  IAlbum,
  IArtist,
  ResponseCommon, ResponseSearch, SpotifyRepository
} from './spotify.repository';
import axiosIntance from '../../core/axios-config';
import { injectable } from 'inversify';

@injectable()
export class SpotifyRepositoryService implements SpotifyRepository {
  async getSearch(querySearch:string): Promise<ResponseSearch> {
    try {
      const {data} = await axiosIntance.get<ResponseSearch>(`/search?q=${ querySearch }&type=album,artist,track`);

      return {
        ...data,
        artists: {items: data.artists?.items?.length ? [data.artists.items[0]] : []}
      };
    } catch (err) {
      console.error(err);
    }
  }

  async getArtists(): Promise<IArtist[]> {
    try {
      const {data} = await axiosIntance.get<ResponseCommon>('/artists?ids=716NhGYqD1jl2wI1Qkgq36,2R21vXR83lH98kGeO99Y66,1vCWHaC5f2uS3yhpwWbIA6,2LRoIwlKmHjgvigdNGBHNo,4q3ewBCX7sLwd24euuV69X');

      return data.artists;
    } catch (err) {
      console.error(err);
    }
  }

  async getAlbums(): Promise<IAlbum[]> {
    try {
      const {data} = await axiosIntance.get<ResponseCommon>('/albums?ids=3RQQmkQEvNCY4prGKE6oc5,6gQKAYf3TJM9sppw3AtbHH,2noRn2Aes5aoNVsU6iWThc');

      return data.albums;
    } catch (err) {
      console.error(err);
    }
  }
}
