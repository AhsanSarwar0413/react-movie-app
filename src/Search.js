import React from 'react'
import { useGlobalContext } from './Context'
function Search() {
    const { searchQuery, setSearchQuery, isError } = useGlobalContext();
    return (
        <div className="search-section">
            <h2>Search Your Favorite Movie</h2>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input type="text"
                        placeholder="Search Here"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </form>
            <div className="card-error">
                <p>{isError.show && isError.message}</p>
            </div>
        </div>
    )
}

export default Search