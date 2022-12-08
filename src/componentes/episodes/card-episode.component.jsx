import "./card-episode.css";
import { useAppSelector } from "../../hooks";

/**
 * Card for each episode
 * @returns a JSX.Element
 */
const CardEpisode = ({ episode }) => {
    const { loading } = useAppSelector((state) => state.characters);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="card-episode">
            <h4>{episode.name}</h4>
            <div>
                <span>{episode.episode}</span>
                <span>
                    Released on {episode.air_date}</span>
            </div>
        </div>
    );
};

export default CardEpisode;
