import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import HomeIcon from "@material-ui/icons/Home";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import styled from "styled-components";
import 'assets/css/fonts.css';
import Canvas from "components/Canvas";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, rightLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const customStyles = makeStyles({
    root: {
      fontFamily: "Lexend",
      fontSize: "30px",
      height: "70px",
      '& p': {
        margin: "5px"
      }
    },
    leftIcons: {
      justifyContent: "space-between",
      display: "flex",
      flexGrow: "1",
      maxWidth: "600px"
    },
    iconComp: {
      cursor: "pointer",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      fontFamily: "Lexend",
      width: "150px",
      display: "flex",
      flexDirection: "column",
      '& svg': {
        margin: "0 auto 0 auto"
      },
      '&:hover': {
        '& p': {
          display: "inline-flex",
          margin: "0 auto 0 auto",
          fontSize: "10px"
        }
      },
      '& p': {
        display: "none",
        textTransform: "uppercase",
        letterSpacing: "3px",
        fontSize: "10px"    
      }
    },
    iconCompActive: {
      cursor: "pointer",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      fontFamily: "Lexend",
      width: "150px",
      display: "flex",
      flexDirection: "column",
      '& svg': {
        margin: "0 auto 0 auto"
      },
      '& p': {
        display: "inline-flex",
        margin: "0 auto 0 auto",
        textTransform: "uppercase",
        letterSpacing: "3px",
        fontSize: "10px"
      }
    }
  })
  const customClass = customStyles()
  const [activeIcon, setActiveIcon] = useState(0)
  const handleTabClick = (event) => {
    setActiveIcon(event)
  }
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={customClass.leftIcons}>
          <div onClick={() => handleTabClick("0")} id="0" className={activeIcon == "0" ? customClass.iconCompActive : customClass.iconComp}>
            <HomeIcon />
            <p>Home</p>
          </div>
          <div onClick={() => handleTabClick("1")} key={"1"} className={activeIcon == "1" ? customClass.iconCompActive : customClass.iconComp}>
            <PersonOutlineIcon />
            <p>About</p>
          </div>
          <div onClick={() => handleTabClick("2")} key={"2"} className={activeIcon == "2" ? customClass.iconCompActive : customClass.iconComp}>
            <FlashOnIcon/>
            <p>Projects</p>
          </div>
          <div onClick={() => handleTabClick("3")} key={"3"} className={activeIcon == "3" ? customClass.iconCompActive : customClass.iconComp}>
            <AllInclusiveIcon/>
            <p>Blog</p>
          </div>
        </div>
        <div className={customClass.root}>
          <p>NAREN</p>
        </div>
        {/* <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden> */}
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
