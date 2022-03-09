import classes from "./layout.module.css";

const Layout = ({ description, children, title, descriptionTitle }) => {
  return (
    <div className={classes.container}>
      <div className={classes.sectionLeft}>
        <p className={classes.title}>{title}</p>
        {children}
      </div>
      <div className={classes.sectionRight}>
        <p className={classes.title}>{descriptionTitle}</p>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default Layout;
