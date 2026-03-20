import "./styles/HeroGraphic.css";

const HeroGraphic = () => {
  return (
    <div className="hero-graphic-container">
      <div className="hero-orbit">
        <div className="hero-planet"></div>
        <div className="hero-satellite node-1"></div>
        <div className="hero-satellite node-2"></div>
        <div className="hero-satellite node-3"></div>
      </div>
    </div>
  );
};

export default HeroGraphic;
