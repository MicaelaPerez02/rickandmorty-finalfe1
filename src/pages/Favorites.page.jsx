import CardCharacter from "../componentes/characters/card-character.componente";
import { useAppSelector, useAppDispatch } from "../hooks";
import "../componentes/characters/grid-characters.css";
import { charactersSlice } from "../slices";
import { useEffect } from "react";

/**
 * Page of favorites. Here you should see all the characters marked as favorites
 * @returns a Jsx.Element
 */

const PageFavorites = () => {
    const { favourites } = useAppSelector((state) => state.characters);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(charactersSlice.actions.resetEpisodes());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="actions">
                <h3>Favorites characters</h3>
                <button
                    className="reset-favs"
                    onClick={() => dispatch(charactersSlice.actions.resetFav())}
                >
                    Delete favorites
                </button>
                <button className="danger">Test button</button>
            </div>
            <div className="grid-characters">
                {favourites?.map((character) => (
                    <CardCharacter character={character} key={character.id} />
                ))}
            </div>
        </div>
    );
};

export default PageFavorites;