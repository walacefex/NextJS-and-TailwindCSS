import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Project from "../components/Project";

const Home: NextPage = () => {
  return (
    <main>
      <div>
        <Header />
        <Profile />
        <Project />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
