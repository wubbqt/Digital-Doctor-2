import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    width: 500,
  },
  footerContent: {
    backgroundColor: '#33658A',
    color: 'white',
  },
  button: {
    color: 'white',
    float: 'right',
    marginBottom: 60,
  },
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className="footer">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" className={classes.footerContent}>

          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Footer);
