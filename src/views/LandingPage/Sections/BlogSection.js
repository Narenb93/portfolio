import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import BlogThumb from "components/BlogThumb";
const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Blog</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
        </GridItem>
        </GridContainer>
        <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} lg={4}>
          <BlogThumb title={"How To Build a Portfolio Website"} authorName={"Naren Rao"} authorImg={'https://images.unsplash.com/photo-1599194996655-3e32b094cbcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'} url={"/"} background={"https://images.unsplash.com/photo-1599158130629-1906e8bc930a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"} />
        </GridItem>
        <GridItem xs={12} sm={12} md={8} lg={4}>
          <BlogThumb title={"How To Build a Portfolio Website"} authorName={"Naren Rao"} authorImg={'https://images.unsplash.com/photo-1599194996655-3e32b094cbcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'} url={"/"} background={"https://images.unsplash.com/photo-1599173100405-b83a4f38bfea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"} />
        </GridItem>
        <GridItem xs={12} sm={12} md={8} lg={4}>
          <BlogThumb title={"How To Build a Portfolio Website How To Build a Portfolio Website"} authorName={"Naren Rao"} authorImg={'https://images.unsplash.com/photo-1599194996655-3e32b094cbcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'} url={"/"} background={"https://images.unsplash.com/photo-1598929213197-a0042191f4ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}  />
        </GridItem>
        <GridItem xs={12} sm={12} md={8} lg={4}>
          <BlogThumb title={"How To Build a Portfolio Website"} authorName={"Naren Rao"} authorImg={'https://images.unsplash.com/photo-1599194996655-3e32b094cbcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'} url={"/"} background={"https://images.unsplash.com/photo-1599186994830-731640234cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"} />
        </GridItem>
        <GridItem xs={12} sm={12} md={8} lg={4}>
          <BlogThumb title={"How To Build a Portfolio Website"} authorName={"Naren Rao"} authorImg={'https://images.unsplash.com/photo-1599194996655-3e32b094cbcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'} url={"/"} background={"https://images.unsplash.com/photo-1599163731041-1e1751e08b4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"} />
        </GridItem>
        <GridItem xs={12} sm={12} md={8} lg={4}>
          <BlogThumb title={"How To Build a Portfolio Website"} authorName={"Naren Rao"} authorImg={'https://images.unsplash.com/photo-1599194996655-3e32b094cbcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'} url={"/"} background={"https://images.unsplash.com/photo-1599069563779-eb1f687d0757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
