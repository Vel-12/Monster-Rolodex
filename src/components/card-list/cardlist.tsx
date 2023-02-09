import { Component } from "react";
import "./cardlist.css";
import Card from "../card/card";
import { Monster } from "../../App";

// FUNCTIONAL IMPLEMENTATION

type CardProps = {
  monsters: Monster[];
};

function cardlist({ monsters }: CardProps) {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} />
      ))}
    </div>
  );
}

// CLASS IMPLEMENTATION

// class cardlist extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => (
//           <Card monster={monster} />
//         ))}
//       </div>
//     );
//   }
// }

export default cardlist;
