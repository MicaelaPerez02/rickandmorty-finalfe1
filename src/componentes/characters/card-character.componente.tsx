import ButtonFavorite from "../buttons/button-favorite.component";
import "./card-character.css";
import { ICharacter } from "../../types/character";
import { useAppSelector } from "../../hooks";
import { Link } from "react-router-dom";

type Props = {
  character: ICharacter;
  itsFavorite: boolean;
};

/**
 * Personal card of each character
 * @returns a JSX.Element
 */

const CardCharacter = ({ character, itsFavorite }: Props) => {
  const { favourites } = useAppSelector((state) => state.characters);

  return (
    <div className="card-character">
      <Link
        to={`/detail/${character.name?.replace(/\s/g, "-")}/${character.id}`}
        state={character}
      >
        <img src={character.image} alt={character.name} />
      </Link>
      <div className="card-character-body">
        <span>{character.name}</span>
        <ButtonFavorite
          itsFavorite={!!favourites.find((obj) => obj.id === character.id)}
          character={character}
        />
      </div>
    </div>
  );
};

export default CardCharacter;
