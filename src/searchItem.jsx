const searchItem = ({search, setSearch}) => {
  return (
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">search</label>
        <input 
        id="search"
        type="text"
        role='searchbox'
        placeholder='Search Items'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
      </form>
  )
}
export default searchItem
