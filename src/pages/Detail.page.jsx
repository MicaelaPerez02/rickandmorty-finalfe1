import "./detail.css";
import CardEpisode from "../componentes/episodes/card-episode.component";
import { useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useEffect } from "react";
import { loadEpisodes, charactersSlice } from "../slices";
import ButtonFavorite from "../componentes/buttons/button-favorite.component";

/**
 * Detail page, here you can see the selected character and the list of episodes in which he appears
 * @returns {JSX.Element}
 */

const PageDetail = () => {
    const location = useLocation();
    const character = location.state;

    const { favourites, episodes } = useAppSelector((state) => state.characters);
    const dispatch = useAppDispatch();

    const numberOfEpisodes = character.episode.map((episode) =>
        parseInt(episode.slice(40))
    );

    useEffect(() => {
        dispatch(charactersSlice.actions.getEpisodes(numberOfEpisodes));
        dispatch(loadEpisodes());
    }, [dispatch, numberOfEpisodes]);

    return (
        <div className="container">
            <h3>{character.name}</h3>
            <div className={"detail"}>
                <div className={"detail-header"}>
                    <img src={character.image} alt={character.name} />
                    <div className={"detail-header-text"}>
                        <p>{character.name}</p>
                        <p>Planet: {character.origin.name}</p>
                        <p>Gender: {character.gender}</p>
                    </div>
                    <ButtonFavorite
                        itsFavorite={!!favourites.find((obj) => obj.id === character.id)}
                        character={character}
                    />
                </div>
            </div>
            <h4>List of episodes in which the character appeared</h4>
            <div className={"episodes-grid"}>
                {Array.isArray(episodes) ? (
                    episodes.map((episode, index) => (
                        <CardEpisode episode={episode} key={index} />
                    ))
                ) : (
                    <CardEpisode episode={episodes} />
                )}
            </div>
        </div>
    );
};

export default PageDetail;
