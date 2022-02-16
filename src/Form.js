import React from "react";
import Car from "./Car";

class Form extends React.Component {
  state = {
    username: "",
    color: "",
    colors: ["", "red", "blue", "green", "yellow", "grey", "orange", "pink"],
    comment: "",
  };

  handlePseudo = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleColor = (e) => {
    this.setState({
      color: e.target.value,
    });
  };

  handleComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Username: ${this.state.username} Couleur: ${this.state.color} Commentaires: ${this.state.comment}`
    );
  };

  render() {
    return (
      <div>
        <Car color={this.state.color} height="400" />
        <h1>Commentaires</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Pseudo</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handlePseudo}
            ></input>
          </div>

          <div>
            <label>Couleur</label>
            <select value={this.state.color} onChange={this.handleColor}>
              {this.state.colors.map((color, index) => {
                return (
                  <option key={index} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label>Commentaires</label>
            <textarea
              value={this.state.comment}
              onChange={this.handleComment}
            ></textarea>
          </div>

          <button>Valider</button>
        </form>
      </div>
    );
  }
}

export default Form;
