import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
      score: {
        x: 0,
        0: 0,
      },
      signs: ["x", "0"],
    };
  }
  isWinner = (sign) => {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winnerLines.forEach((el) => {
      if (
        this.state.squares[el[0]] === sign &&
        this.state.squares[el[1]] === sign &&
        this.state.squares[el[2]] === sign
      ) {
        alert(sign + " победили");
        let currentScore = this.state.score;
        currentScore[sign]++;

        this.setState({ score: currentScore });
        setTimeout(this.clear(), 500);
      }
    });
  };

  isDraw = () => {
    if (this.state.count === 8) {
      alert("Ничья");
      setTimeout(this.clear(), 500);
    }
  };
  clickHandler = (event) => {
    let data = event.target.getAttribute("data");
    let currentSquares = this.state.squares;
    if (currentSquares[data] === null) {
      currentSquares[data] =
        this.state.count % 2 ? this.state.signs[1] : this.state.signs[0];
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquares });
    }
    console.log(
      this.state.squares,
      "count= ",
      this.state.count,
      "startSign= ",
      this.state.startSign
    );
    this.isWinner(currentSquares[data]);
    this.isDraw();
  };

  clear = () => {
    this.setState({
      count: 0,
      squares: Array(9).fill(null),
    });
  };
  changeStartSign = (e) => {
    let currentSigns = e.target.value === "x" ? ["x", "0"] : ["0", "x"];
    this.setState({ signs: currentSigns });
  };
  render() {
    return (
      <div className="App">
        <div className="tic-tac-toe">
          <div className="ttt-grid" onClick={this.clickHandler} data="0">
            {this.state.squares[0]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="1">
            {this.state.squares[1]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="2">
            {this.state.squares[2]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="3">
            {this.state.squares[3]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="4">
            {this.state.squares[4]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="5">
            {this.state.squares[5]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="6">
            {this.state.squares[6]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="7">
            {this.state.squares[7]}
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="8">
            {this.state.squares[8]}
          </div>
        </div>
        <p>Счет:</p>
        {Object.keys(this.state.score).map((el) => (
          <p>
            `{el}`: {this.state.score[el]}{" "}
          </p>
        ))}

        <p>Выберите кто ходит первым</p>
        <input
          type="radio"
          name="sign"
          id="x"
          value="x"
          onChange={this.changeStartSign}
        />
        <label for="x">x</label>
        <input
          type="radio"
          name="sign"
          id="0"
          value="0"
          onChange={this.changeStartSign}
        />
        <label for="0">0</label>
        <br />
        <br />

        <button className="newGame" onClick={this.clear}>
          Новая игра
        </button>
      </div>
    );
  }
}

export default App;
