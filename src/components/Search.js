function Search() {
    return (
        <div className="Hero-search">
            <div className="Header-search">
                <h1>Medications</h1>
            </div>

            <div className="Intro-search">
                <p>Start your search</p>
                <input className="Search-box" type='text' placeholder='Search by brand name, generic name or health condition' />
            </div>
            <br /> <br />
            <br /> <br />           
        </div>
    );
}

export default Search;