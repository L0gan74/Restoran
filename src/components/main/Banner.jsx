import banner from '../../assets/banner-txt.png';

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-text">
          <img src={banner} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
