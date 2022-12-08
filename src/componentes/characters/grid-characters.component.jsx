import "./grid-characters.css";
import CardCharacter from "./card-character.componente";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { loadCharacters, loadFilterCharacters } from "../../slices";
import { charactersSlice } from "../../slices";

/**
 * Grid of characters for the home page
 * @returns a JSX.Element
 */

const GridCharacters = () => {
    const { characters, loading, filter, page } = useAppSelector(
        (state) => state.characters
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        filter === ""
            ? dispatch(loadCharacters())
            : dispatch(loadFilterCharacters());
        dispatch(charactersSlice.actions.resetEpisodes());
    }, [page, filter, dispatch]);

    if (loading) return <div> Loading...</div>;

    return (
        <div className="grid-characters">
            {characters.results?.map((character) => (
                <CardCharacter character={character} key={character.id} />
            ))}
        </div>
    );
};

export default GridCharacters;
