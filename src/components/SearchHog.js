import React from 'react';

const SearchHog = (props) => {
  return (
      <input value={props.searchTerm} className="search" onChange={props.name}/>
  )
}
export default SearchHog;
