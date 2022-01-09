import classes from "./Sidebar.module.css";
const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <h3>Categorías</h3>
      <a className={classes.link} href="#">
        Link 1
      </a>
      <a className={classes.link} href="#">
        Link 2
      </a>
      <a className={classes.link} href="#">
        Link 3
      </a>
    </div>
  );
};
export default Sidebar;
