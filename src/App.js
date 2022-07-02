import React, { Component } from "react";
import Box from "./Box";
import { color } from "./helper";
import "./styles/custom.scss";
let a = [];
class App extends Component {
  colors = [
    "aqua",
    "gray",
    "maroon",
    "red",
    "green",
    "blue",
    "yellow",
    "violet",
    "indigo",
    "pink",
    "olive",
    "brown",
  ];
  state = {
    boxes: [...Array(3)].map(() => [...Array(6)]),
  };

  handleClick = (bi, bj) => {
    let rand = color(this.colors);
    while (rand == this.state.boxes[bi][bj]) rand = color(this.colors);
    this.setState({
      boxes: this.state.boxes.map((v, i) => {
        return v.map((vv, ii) => {
          if (i == bi && ii == bj) return rand;
          return vv;
        });
      }),
    });
  };

  render() {
    if (!this.state.boxes[0][0])
      for (let i = 0; i < 3; i++)
        for (let j = 0; j < 6; j++) this.state.boxes[i][j] = color(this.colors);
    console.log(this.state.boxes);
    return (
      <div>
        {this.state.boxes.map((i, indp) => (
          <div class="row gx-0">
            {[...i].map((c, ind) => {
              let cc = c;
              return (
                <span
                  onClick={() => {
                    this.handleClick(indp, ind);
                  }}
                  className="col"
                >
                  <Box color={c} />
                </span>
              );
            })}
          </div>
        ))}
      </div>
    );
  }
}
export default App;
