import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Tu página de videojuegos</h1>
      <Link to="/page">
        <button name="button">VAMOS</button>
      </Link>
    </div>
  );
};

export default Home;
