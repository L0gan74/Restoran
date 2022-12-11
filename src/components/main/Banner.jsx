import banner from "../../assets/banner-txt.png";
import fonBanner from "../../assets/main.png";

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-text">
          <img src={banner} alt="" />
        </div>
      </div>
      <img className="fonBanner" src={fonBanner} alt="fonBanner" />
    </section>
  );
}

export default Banner;
