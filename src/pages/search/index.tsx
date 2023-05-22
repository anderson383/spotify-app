import {
  useEffect, useState
} from 'react';
import Albums from '@/components/features/albums';
import Artist from '@/components/features/artist/artist';
import { getParamsUrl } from '@/helpers/get-params-url';
import Header from '@/components/features/header';
import {ResponseSearch} from '@/services/repositories/spotify.repository';
import Tracks from '@/components/features/tracks';
import useAxiosToken from '@/hooks/use-axios-token';
import { useRouter } from 'next/router';
import useSpotifyRepository from '@/hooks/use-spotify-repository';

const Search = () => {
  useAxiosToken();
  const query = getParamsUrl('q');
  const repository = useSpotifyRepository();
  const [searchQuery, setSearchQuery] = useState('');
  const [dataSearch, setDataSearch] = useState<ResponseSearch>();

  useEffect(() => {
    setSearchQuery(query);
    repository.getSearch(query).then(data => {
      setDataSearch(data);
    });
  }, [query]);

  return (
    <>
      <Header />
      <div className="container">
        <h2><span>Buscando por</span> {searchQuery}</h2>
      </div>
      <Artist title='Artista' artists={dataSearch?.artists?.items} />
      <Tracks tracks={dataSearch?.tracks?.items} />
      <Albums title='Albums' albums={dataSearch?.albums?.items} />
    </>
  );
};

export default Search;

