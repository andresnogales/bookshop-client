import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes["page-footer"]}>
      <div className={classes["container"]}>
        <div className={classes["area-footer"]}>
          <h5>Who we are?</h5>
          <p>
            Add some texutal content for describing about your
            company.organization or website.
          </p>
        </div>
        <div className={classes["area-footer"]}>
          <h5>Categorías </h5>

          <ul className={classes["footer-items"]}>
            <li>
              <a className={classes["footer-link"]} href="#!">
                Link 1
              </a>
            </li>
            <li>
              <a className={classes["footer-link"]} href="#!">
                Link 2
              </a>
            </li>
            <li>
              <a className={classes["footer-link"]} href="#!">
                Link 3
              </a>
            </li>
            <li>
              <a className={classes["footer-link"]} href="#!">
                Link 3
              </a>
            </li>
          </ul>
        </div>
        <div className={classes["area-footer"]}>
          <h5>About </h5>

          <ul className={classes["footer-items"]}>
            <li>
              <a className={classes["footer-link"]} href="#!">
                Acerca de la tienda
              </a>
            </li>

            <li>
              <a className={classes["footer-link"]} href="#!">
                Privacidad
              </a>
            </li>

            <li>
              <a className={classes["footer-link"]} href="#!">
                Soporte
              </a>
            </li>

            <li>
              <a className={classes["footer-link"]} href="#!">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["footer-copyright"]}>
        <div className="container">
          © 2022 Copyright - Andrés Nogales developer
        </div>
      </div>
    </footer>
  );
};

export default Footer;
