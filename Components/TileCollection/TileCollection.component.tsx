import styles from './TileCollection.module.css';
import Tile from '../Tile/Tile.component';

interface props<T> {
  tiles: T[];
  primeHeader: string;
  subHeader: string;
  id?: string;
  click?: string;
  title?: boolean;
  body?: boolean;
  staticBG?: string;
  external?: boolean;
}

const TileCollection = <T,>({
  tiles,
  primeHeader,
  subHeader,
  id,
  title,
  body,
  staticBG,
  external,
}: props<T>) => {
  return (
    <div className={styles.container} id={id}>
      <h1>{primeHeader}</h1>
      <p>{subHeader}</p>
      <div className={styles.techContainer}>
        {tiles.map((t: any, i: number) => (
          <Tile
            tile={t}
            key={i}
            title={title}
            body={body}
            staticBG={staticBG}
            external={external}
          />
        ))}
      </div>
    </div>
  );
};

export default TileCollection;
