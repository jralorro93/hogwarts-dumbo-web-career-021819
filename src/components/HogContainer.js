import React from 'react';
import HogTile from './HogTile'
import SearchHog from './SearchHog'


export default class HogContainer extends React.Component {
  state = {
    searchTerm: ""
  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div>
        <SearchHog searchTerm={this.state.searchTerm} name={this.handleSearch}/>
        <ul>
          {this.props.hogs.filter(hog => hog.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map((hog) => {
            return (
              <HogTile
                name={hog.name}
                specialty={hog.specialty}
                greased={hog.greased}
                medal={hog['highest medal achieved']}
                weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
