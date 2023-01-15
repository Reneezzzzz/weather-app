import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search";

function App() {
  const handleOnSearchChange = (searchData) => {
    // to do
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;