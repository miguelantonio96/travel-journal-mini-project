import "./App.css";
import Header from "./components/header/Header";
import PageContent from "/src/components/mainPage_content/Content.jsx";
import travelData from "../db.js";
import Footer from "./components/footer/Footer.jsx";
export default function App() {
  const cardData = travelData.map((item) => {
    return <PageContent key={item.id} {...item} />;
  });

  return (
    <>
      <Header />
      <div className="main">
        <section className="content-container">{cardData}</section>
      </div>
      <Footer />
    </>
  );
}
