import { ITrack } from '@/services/repositories/spotify.repository';
import styles from './tracks.module.scss';

interface TracksProps {
  tracks: ITrack[]
}

const Tracks = (props: TracksProps) => {
  const {tracks} = props;

  return (
    <>
      <section>
        <div className="container">
          {
            tracks?.length && (
              <>
                <h2>Canciones</h2>
                <div className={styles['container-albums']}>
                  {
                    tracks.map(trak => (

                      // <iframe src={`https://open.spotify.com/embed?uri=${ trak.uri }`} width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                      <div className={styles.album} key={trak.id}>
                        <img
                          src={trak.album.images[0].url}
                          alt={trak.name}
                          width="70px"
                          height="70px"
                        />
                        <div className={styles.content_trak}>
                          <div className="">
                            <p> { trak.name }</p>
                            {
                              trak.artists.map(artis => (
                                <span key={artis.id}>{artis.name}</span>
                              ))
                            }
                          </div>
                          <div className={styles.artists}>
                            <audio controls className={styles.audio}>
                              <source src={trak.preview_url} type="audio/mp3" />
                                Tu navegador no soporta audio HTML5.
                            </audio>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </>
            )
          }

        </div>
      </section>
    </>
  );
};

export default Tracks;
