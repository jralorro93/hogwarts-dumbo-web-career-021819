import React from 'react';

class HogTile extends React.Component {

  state = {
    clicked: false
  }

  handleClick = (event) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  slugify = (name) => {
    let nameArray = []
    let newName = name.split(" ")
    let finalName = newName.join("_")
    return finalName.toLowerCase()

  }

  cardInfo = () => {
    if(this.state.clicked === true){
      return (
        <ul>
          <li>Name: {this.props.name} </li>
          <li>Specialty: {this.props.specialty}</li>
          <li>Greased: {this.props.greased.toString()} </li>
          <li>Medal: {this.props.medal}</li>
          <li>Weight: {this.props.weight} Fridges</li>
        </ul>
    )}
    else if(this.state.clicked === false){
      return(
        <ul>
          <li>{this.props.name} </li>
          <img src={require(`../hog-imgs/${this.slugify(this.props.name)}.jpg`)} alt={this.props.name}/>
        </ul>
    )}
  }


  render() {
  return (
    <div onClick={this.handleClick} className="pigTile">
      {this.cardInfo()}
    </div>
  )}
}
export default HogTile;
