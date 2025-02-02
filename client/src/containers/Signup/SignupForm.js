import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import InputAdornment from 'material-ui/Input/InputAdornment';
import Input from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
  textField: {
    marginTop: 60,
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#c19434',
  },
  formControl: {
    minWidth: 120,
    marginTop: 30,
  },
  button: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#ac3b61',
    color: 'white',
  },
  loginButton: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#ac3b61',
    float: 'right',
    color: 'white',
  },
  formError: {
    color: 'red',
  }
});

class LoginForm extends React.Component {
  state = {
    password: '',
    showPassword: false,
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="animated bounceInLeft">
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2" align="center">
              SIGN UP to Create your account
            </Typography>
            <Typography gutterBottom component="p" align="center">
              Fill out the form below
            </Typography>
            <form noValidate autoComplete="off">
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="Username">Username</InputLabel>
                <Input
                  id="username"
                  type="text"
                  value={this.props.username}
                  onChange={this.props.handleUsernameChange}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Typography className={classes.formError} component="p">{this.props.usernameMissingError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="Password">Password</InputLabel>
                <Input
                  id="password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.props.password}
                  onChange={this.props.handlePasswordChange}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showPassword ? <i className="fas fa-eye-slash" /> : <i className="fas fa-eye" />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Typography className={classes.formError} component="p">{this.props.passwordMissingError}</Typography>
                <Typography className={classes.formError} component="p">{this.props.passwordLengthError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="Password">Confirm password</InputLabel>
                <Input
                  id="password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.props.confirmPassword}
                  onChange={this.props.handleConfirmPasswordChange}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showPassword ? <i className="fas fa-eye-slash" /> : <i className="fas fa-eye" />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Typography className={classes.formError} component="p">{this.props.confirmPasswordError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  type="text"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.props.email}
                  onChange={this.props.handleEmailChange}
                />
                <Typography className={classes.formError} component="p">{this.props.emailMissingError}</Typography>
              </FormControl>

              <Button size="large" className={classes.button} onClick={this.handleClickShowPassword} onMouseDown={this.handleMouseDownPassword}variant="raised" color="primary">
              {this.state.showPassword ? "HIDE PASSWORD" : "SHOW PASSWORD"}
              </Button>
              <br />

              <Button size="large" className={classes.button} onClick={this.props.handleFormSubmit} variant="raised" color="primary">
              SIGN UP
              </Button>
              <Button size="large" className={classes.loginButton} component={Link} to="/" variant="raised" color="primary">
              Already have an account? Go back to LOGIN page
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);
