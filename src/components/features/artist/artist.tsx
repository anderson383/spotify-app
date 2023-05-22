import { formatearNumero } from '@/helpers/format-number';
import { IArtist } from '@/services/repositories/spotify.repository';
import styles from './artist.module.scss';

interface ArtistProps {
  title: string
  artists: IArtist[]
}

const Artist:React.FC<ArtistProps> = props => {
  const {
    artists, title
  } = props;

  return (
    <>
      <section >
        <div className="container">
          {
            artists?.length && (
              <>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles['container-artist']}>
                  {
                    artists.map(arti => (
                      <div className={styles.artist} key={arti.id}>
                        <img
                          src={arti.images[0]?.url}
                          alt={arti.name}
                          width="100%"
                        />
                        <a target="_blank" href={arti.external_urls.spotify}>{ arti.name }</a>
                        <div className={styles.followers}>
                          <p>Seguidores {formatearNumero(arti.followers.total)} </p>
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

export default Artist;
