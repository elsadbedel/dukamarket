import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Recommend from "../Recommend/Recommend";
import Main from "../SectionTop/Main";
import TopFeatured from "../TopFeatured/TopFeatured";
import TopSelling from "../TopSelling/TopSelling";

function Home() {
  return (
    <div className="home">
      <Header />
      <Main />
      <TopSelling />
      <TopFeatured />
      <Recommend />
      <Footer />
    </div>
  );
}

export default Home;
