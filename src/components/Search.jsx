import { FaSearch } from "react-icons/fa";




function Search(props) {

    

    return (<>
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search posts</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search posts"
                onChange={props.changeHandle}
            />
            <button type="submit" className="search-icon"><FaSearch /></button>

        </form>
        {/* this is the line below search */}
        <div></div>


    </>
    )

};
export default Search;