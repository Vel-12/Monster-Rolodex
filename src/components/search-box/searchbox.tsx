import { Component } from "react";
import { ChangeEvent } from "react";
import "./searchbox.css";

// FUNCTIONAL IMPLEMENTATION

type SearchBox = {
  classname: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

function searchbox({ classname, placeholder, onChangeHandler }: SearchBox) {
  return (
    <div className="search">
      <input
        className={`search-box ${classname}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}

// CLASS IMPLEMENTATION

// class searchbox extends Component {
//   render() {
//     return (
//       <div className="search">
//         <input
//           className={`search-box ${this.props.classname}`}
//           type="search"
//           placeholder={this.props.placeholder}
//           onChange={this.props.onChangeHandler}
//         />
//       </div>
//     );
//   }
// }

export default searchbox;
