import React, { Component } from "react";
import { Monster } from "../../App";
import "./card.css";

// FUNCTIONAL IMPLEMENTATION

type CardProps = {
  monster: Monster;
};

function card(props: CardProps) {
  const { name, email, id } = props.monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2 `}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// CLASS IMPLEMENTATION

// class card extends Component {
//   render() {
//     const { name, email, id } = this.props.monster;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2 `}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default card;
