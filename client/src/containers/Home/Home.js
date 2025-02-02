import React, { Component } from 'react';
import { Subhead, Link } from 'rebass';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import report from '../../assets/images/medical_report.png';
import journal from '../../assets/images/journal.png';
import appointment from '../../assets/images/appointment.png';
import prescription from '../../assets/images/prescription.png';
import doctor from '../../assets/images/doctor.png';
import chart from '../../assets/images/chart2.png';
import NavBar from '../../Components/AppBar';

const styles = {
  root: {
    flexGrow: 1,
  },
  headline: {
    marginTop: 50,
  },
  heading: {
    fontSize: 35,
  }
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return [
      <NavBar />,
      <div style={{ padding: 70 }}>
        <Grid item xs={12} className={classes.headline}>
          <Grid container spacing={24} className={classes.root} justify="center">
            <Typography variant="display1" align="center">
              CLICK AN icon AND LETS GET STARTED
            </Typography>
          </Grid>
        </Grid>,

        <div className="main-content-section">
          <Grid container spacing={24} className={classes.root}>
            <Grid item xs={12} sm={6} md={4} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                My health log
              </Typography>
              <Subhead align="center">
                <Link
                  href="/log"
                >
                  <img src={report} alt="clipboard" />
                </Link>
              </Subhead>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                My symptom journal
              </Typography>
              <Subhead align="center">
                <Link
                  href="/symptoms"
                >
                  <img src={journal} alt="health journal" />
                </Link>
              </Subhead>
            </Grid>

            

            <Grid item xs={12} sm={6} md={4} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                My prescriptions
              </Typography>
              <Subhead align="center">
                <Link
                  href="/prescriptions"
                >
                  <img src={prescription} alt="prescription card" />
                </Link>
              </Subhead>
            </Grid>

            <Grid item xs={12} sm={6} md={4}className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                Doctors and clinics
              </Typography>
              <Subhead align="center">
                <Link
                  href="/doctors"
                >
                  <img src={doctor} alt="doctor" />
                </Link>
              </Subhead>
            </Grid>

            
          </Grid>
        </div>,
      </div>,
    ];
  }
}

export default withStyles(styles)(Home);
