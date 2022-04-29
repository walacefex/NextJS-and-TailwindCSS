import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import ProjectPreview from "../components/ProjectPreview";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="text-slate-700 flex flex-col gap-6">
        <Header />
        <Profile />
        <div>
          <ProjectPreview />
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
