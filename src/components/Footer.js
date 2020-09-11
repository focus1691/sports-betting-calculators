/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import {Typography,Box , Grid} from '@material-ui/core';
import footerStyle from "../jss/footerStyle";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({ ...footerStyle(theme) }));

export default function StickyFooter() {
  const classes = useStyles();
  const [openTerms, setOpenTerms] = useState(false);

  const onClickTerms = (e) => {
      e.preventDefault();

      setOpenTerms(!openTerms);
  };

  return (
    <footer className={clsx (classes.footer, "footer-setting")}>
      <Container >
      <Grid container >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box className="footer-main">
      <Box fontSize= "15px" paddingTop="10px" paddingBottom="5px" marginLeft="5px">Sports Betting Calculators</Box>
        <Box fontSize="15px" mb={2}>© Copyright - topbetcalculator.com (2020) - Top Bet Calculator <span className="terms-conditions"> <Link href="#" onClick={onClickTerms} className="terms-setting">
            Terms {"&"} Conditions
        </Link>
        <Link href="mailto:joshua@psychotechnology.com">
            Contact Us
        </Link></span></Box>
        </Box>
       
        <div style={{ display: openTerms ? 'inline-block' : 'none' }}>
            <Divider />
            <Typography variant="body2">TopBetCalculator disclaims all liabilities regarding the content of these calculators and any use thereof that could be made by any person. TopBetCalculator do not make any representations or warranties, express or implied, as to the accuracy, completeness, or fitness for any purpose or use of the content provided. Accordingly, you should not rely on any of the information as authoritative or as a substitute for the exercise of your own skill and judgment in making a trade or other decision.</Typography>
        </div>
			</Grid>
      
      </Grid>
      
      </Container>
    </footer>
  );
}
