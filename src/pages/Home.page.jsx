import Filters from "../componentes/characters/filters.component"
import GridCharacters from "../componentes/characters/grid-characters.component"
import Pagination from "../componentes/pagination/pagination.component";

/**
 * Main page. Here you should see the filters panel and the grid of characters.
 * @returns a JSX.Element
 */

const Home = () => {
    return <div className="container">
        <div className="actions">
            <h3>Character Cataloge</h3>
            <button className="danger">Test Button</button>
        </div>
        <Filters />
        <Pagination />
        <GridCharacters />
        <Pagination />
    </div>
}

export default Home;