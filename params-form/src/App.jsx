import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>HOME</h1>
      <br />
      <Link to={"/posts"}>Posts</Link>
    </>
  );
}

export default App;
