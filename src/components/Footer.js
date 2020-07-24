/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import footerStyle from "../jss/footerStyle";

const useStyles = makeStyles(theme => ({ ...footerStyle(theme) }));

export default function StickyFooter() {
  const classes = useStyles();
  const [openTerms, setOpenTerms] = useState(false);
  const preventDefault = (event) => event.preventDefault();

  const onClickTerms = (e) => {
      e.preventDefault();

      setOpenTerms(!openTerms);
  };

  const onClickContact = (e) => {
      e.preventDefault();

  };

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="h1">Sports Betting Calculators</Typography>
        <Typography variant="body1">© Copyright - topbetcalculator.com (2020) - Top Bet Calculator</Typography>
        <Link href="#" onClick={onClickTerms}>
            Terms {"&"} Conditions
        </Link>
        <Link href="mailto:joshua@psychotechnology.com">
            Contact Us
        </Link>
        <div style={{ display: openTerms ? 'inline-block' : 'none' }}>
            <Divider />
            <Typography variant="body2">TopBetCalculator disclaims all liabilities regarding the content of these calculators and any use thereof that could be made by any person. TopBetCalculator do not make any representations or warranties, express or implied, as to the accuracy, completeness, or fitness for any purpose or use of the content provided. Accordingly, you should not rely on any of the information as authoritative or as a substitute for the exercise of your own skill and judgment in making a trade or other decision.</Typography>
        </div>
      </Container>
    </footer>
  );
}