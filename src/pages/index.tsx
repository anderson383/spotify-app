import {
  useEffect, useState
} from 'react';
import Albums from '@/components/features/albums';
import Artist from '@/components/features/artist/artist';
import Header from '@/components/features/header';
import { ResponseCommon } from '@/services/repositories/spotify.repository';
import styles from './index.module.scss';
import useAxiosToken from '@/hooks/use-axios-token';
import { useSession } from 'next-auth/react';
import useSpotifyRepository from '@/hooks/use-spotify-repository';
const Index = () => {
  useAxiosToken();
  const repository = useSpotifyRepository();
  const {data: dataSession} = useSession();
  const [dataPage, setDataPage] = useState<ResponseCommon>({
    albums: [],
    artists: []
  });

  useEffect(() => {
    (async () => {
      const [albums, artists] = await Promise.all([repository.getAlbums(), repository.getArtists()]);

      setDataPage({
        albums,
        artists
      });
    })();
  }, []);

  return <>
    <Header />
    <div className={styles.container_degrade}>
      <div className="container">
        <h1><span>Bienvenido de nuevo </span>{dataSession?.user?.name}!</h1>
      </div>
      <Artist artists={dataPage?.artists} title='Artistas del momento' />
      <Albums albums={dataPage?.albums} title='Albums' />
    </div>
  </>;
};

export default Index;

