import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Resume from "../components/Resume";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="content">
          <Resume />
        </div>
      </div>
    </div>
  );
};

export default Home;
