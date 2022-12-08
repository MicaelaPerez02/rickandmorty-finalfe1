import "./button-favorite.css";
import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { charactersSlice } from "../../slices";

/**
 * Button that indicates if a person was selected as a favorite and allows marking and unmarking
 * @returns a JSX.Element
 */

const ButtonFavorite = ({ itsFavorite, character }) => {
    const [favorite, setFavorite] = useState(itsFavorite);
    const dispatch = useAppDispatch();

    /**
     * @author Micaela Perez
     * @name HandleChange
     * @function 
     * The function handles the change of states of favorites
     */
    function handleChange () {
        if (favorite) {
            setFavorite(false);
            dispatch(charactersSlice.actions.deleteFav(character));
        } else {
            setFavorite(true);
            dispatch(charactersSlice.actions.addFav(character));
        }
    };

    return (
        <div className="button-favorite">
            <img
                src={favorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"}
                alt={"favorite"}
                onClick={() => handleChange()}
            />
        </div>
    );
};

export default ButtonFavorite;
