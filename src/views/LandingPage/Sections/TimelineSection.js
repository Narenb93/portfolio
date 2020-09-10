import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import PlayingCard from 'components/PlayingCard';
import { faHeart, faCrown, faChessKnight, faChessRook } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(styles);
const fistCardContent = `Various sources like those quoted in Wikipedia say that it's a mistake, or old-fashioned, to refer to rooks as "castles". Why is this, though? Other languages generally refer to these pieces as "towers" and when the king exchanges places with them, we call it "castling" rather than "rooking". The pieces look like castles.`
const secondCardContent = `Various sources like those quoted in Wikipedia say that it's a mistake, or old-fashioned, to refer to rooks as "castles". Why is this, though? Other languages generally refer to these pieces as "towers" and when the king exchanges places with them, we call it "castling" rather than "rooking". The pieces look like castles.`
const thirdCardContent = `Various sources like those quoted in Wikipedia say that it's a mistake, or old-fashioned, to refer to rooks as "castles". Why is this, though? Other languages generally refer to these pieces as "towers" and when the king exchanges places with them, we call it "castling" rather than "rooking". The pieces look like castles.`
export default function TimelineSection() {
  const classes = useStyles(styles);
  return (
    <div>
      <GridContainer justify="center" >
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Skills</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            skills. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center" spacing={10}>
          <GridItem xs={12} sm={12} md={8} lg={4}>
              <PlayingCard icon={faChessRook} title={"FRONT END"} content={fistCardContent}/>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} lg={4}>
              <PlayingCard icon={faChessKnight} title={"BACK END"} content={secondCardContent}/>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} lg={4}>
              <PlayingCard icon={faCrown} title={"TEAM"} content={thirdCardContent}/>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
