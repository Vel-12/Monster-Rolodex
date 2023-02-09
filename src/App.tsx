import { ChangeEvent, Component } from "react";
import { useState, useEffect } from "react";
import Cardlist from "./components/card-list/cardlist";
import Searchbox from "./components/search-box/searchbox";
import { getData } from "./components/utils/data.util";
import "./App.css";

// FUNCTIONAL IMPLEMENTATION

export type Monster = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [searchFeild, setSearchFeild] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filtermonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUser = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUser();
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((response) => setMonsters(response));
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFeildString = event.target.value.toLocaleLowerCase();
    setSearchFeild(searchFeildString);
  };

  useEffect(() => {
    const newfiltermonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchFeild);
    });
    setFilterMonsters(newfiltermonsters);
  }, [monsters, searchFeild]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <Searchbox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        classname="monsters-search-box"
      />

      <Cardlist monsters={filtermonsters} />
    </div>
  );
}

// CLASS IMPLEMENTATION

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchFeild: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((response) =>
//         this.setState(
//           () => {
//             return { monsters: response };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

// onSearchChange = (event) => {
//   const searchFeild = event.target.value.toLocaleLowerCase();

//   this.setState(() => {
//     return { searchFeild };
//   });
// };

//   render() {
//     const filtermonster = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(this.state.searchFeild);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>

//         <Searchbox
//           onChangeHandler={this.onSearchChange}
//           placeholder="search monsters"
//           classname="monsters-search-box"
//         />

//         <Cardlist monsters={filtermonster} />
//       </div>
//     );
//   }
// }

export default App;
