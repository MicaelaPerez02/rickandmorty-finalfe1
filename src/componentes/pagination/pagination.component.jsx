import "./pagination.css";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { charactersSlice } from "../../slices";

/**
 * Pagination buttons
 * @returns a Jsx.Element
 */

const Pagination = () => {
    const dispatch = useAppDispatch();

    const { characters } = useAppSelector((state) => state.characters);

    /**
     * @author Micaela Perez
     * Action to go to the next page
     */
    function nextPage() {
        dispatch(charactersSlice.actions.nextPage());
    }

    /**
     * @author Micaela Perez
     * Action to go to the previous page
     */
    function prevPage() {
        dispatch(charactersSlice.actions.prevPage());
    }

    return (
        <div className="pagination">
            <button
                disabled={characters.info?.prev == null ? true : false}
                className={"primary"}
                onClick={prevPage}
            >
                Previous
            </button>
            <button
                disabled={characters.info?.next == null ? true : false}
                className={"primary"}
                onClick={nextPage}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
