import classes from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={classes["hero"]}>
      <div className={classes["hero-inner"]}>
        <h1>Tienda de Libros</h1>
        <h2>Novelas, cuentos, infantiles,historia, economía y más.</h2>
        <a href="" className={classes["btn"]}>
          Pedí tu libro
        </a>
      </div>
    </section>
  );
};

export default Hero;
