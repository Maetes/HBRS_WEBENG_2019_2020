import styles from './Tile.module.css';
import { useRouter } from 'next/router';
import Url from 'next/client';

interface Tile<T> {
  tile: T;
  body?: boolean;
  title?: boolean;
  staticBG?: string;
  external?: boolean;
}

interface Specialities {
  pic?: String;
  url?: String;
  name: String;
  click?: String;
  beschreibung: String;
}

const Tile = <T extends Specialities>({
  tile,
  body,
  title,
  staticBG,
  external = false,
}: Tile<T>) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(external);
    if (external) {
      window.location.href = tile.click as string;
    } else {
      router.push(tile.click as Url);
    }
  };

  return (
    <div
      className={styles.outerTile}
      onClick={tile.click ? handleClick : undefined}
    >
      <div
        className={styles.tile}
        style={{
          backgroundImage:
            tile.pic || tile.url || staticBG
              ? `url(${tile.pic ? tile.pic : tile.url ? tile.url : staticBG})`
              : 'none',
        }}
      >
        {title ? <div className={styles.tileHead}>{tile.name}</div> : ''}
        {body ? <div className={styles.tileBody}>{tile.beschreibung}</div> : ''}
      </div>
    </div>
  );
};

export default Tile;
