import UnderConstructImg from "../assets/underconstruction_balkouras-nicos-unsplash.jpg";

const Gallery = () => {
  return (
    <section id="gallery-section">
      <h2>Gallery</h2>
      <div className="content-box">
        <h3>Page under construction. Please, come back later.</h3>
        <img src={UnderConstructImg} alt="Page Under Construction Image" />
      </div>
    </section>
  );
};
export default Gallery;
