import classes from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={classes["hero"]}>
      <div className={classes["hero-inner"]}>
        <h1>Tienda de Libros</h1>
        <h2>
          Encontrá el libro que estás buscando. Novelas, cuentos, infantiles,
          historia, economía y más.
        </h2>
        <a href="" className={classes["btn"]}>
          Ver destacados
        </a>
      </div>
    </section>
  );
};

export default Hero;
