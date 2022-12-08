import "./filters.css";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { charactersSlice } from "../../slices/index";

/**
 * Component for the filter by name of the characters
 * @returns a JSX.Element
 */
const Filter = () => {
    const dispatch = useAppDispatch();
    const { filter } = useAppSelector((state) => state.characters);

    return (
        <div className="filters">
            <label htmlFor="name">Filter by name:</label>
            <div>
                <input
                    type="text"
                    placeholder="Rick, Morty, Beth, Alien, ...etc"
                    name="name"
                    value={filter}
                    onChange={(e) => {
                        dispatch(charactersSlice.actions.filter(e.target.value));
                        dispatch(charactersSlice.actions.resetPage());
                    }}
                />
                <button onClick={() => {
                    dispatch(charactersSlice.actions.resetfilter());
                    dispatch(charactersSlice.actions.resetPage());
                }}>
                    Clean filters
                </button>
            </div>
        </div>
    );
};

export default Filter;
