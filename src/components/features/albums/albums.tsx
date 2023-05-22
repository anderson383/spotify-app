import { IAlbum } from '@/services/repositories/spotify.repository';
import styles from './albums.module.scss';

interface AlbumsProps {
  albums: IAlbum[]
  title: string
}

const Albums = (props: AlbumsProps) => {
  const {
    albums, title
  } = props;

  return (
    <>
      <section>
        <div className="container">
          {
            albums?.length && (
              <>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles['container-albums']}>
                  {
                    albums.map(album => (
                      <div className={styles.album} key={album.id}>
                        <img
                          src={album.images[0].url}
                          alt={album.name}
                          width="100%"
                        />
                        <a target="_blank" href={album.external_urls.spotify} >{ album.name }</a>
                        <div className={styles.artists}>
                          {
                            album.artists.map(arts => (<p key={'art' + arts.id} >{arts.name}</p>))
                          }
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

export default Albums;
