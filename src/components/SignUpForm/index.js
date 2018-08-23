import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import renderField from '../AuthHelpers/renderField';

class SignUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <h1 className={classes.welcome}>Welcome To Recipes Advisor</h1>
          <div className={classes.wrap}>
            <div className={classes.grids}>
              <div className={classes.contentLeft}>
                <div className={classes.contentInfo}>
                  <h2>What Are We?</h2>
                  <div className={classes.slider}>
                    <div className={classes.callbacksContainer}>
                      <ul
                        className={`${classes.rslides} ${classes.callbacks}`}
                        id="slider4"
                      >
                        <li>
                          <div className={classes.descriptionBanner}>
                            <h3>A Simple Recipes Website</h3>
                            <p>
                              Recipes Advisor is a website that will help you to
                              get interesting recipes based on the products you
                              like and avoid the recipes that might be
                              potentially harmful for you.{' '}
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className={classes.descriptionBanner}>
                            <h3>What You Do ?</h3>
                            <p>
                              Set up your food prefferences once and get
                              interesting recipes daily.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={classes.signIn}>
                    <h4>
                      Already have an account{' '}
                      <Link to="Login" className={classes.a}>
                        Login
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className={classes.contentMain}>
                <div className={classes.signUpForm}>
                  <h4>New Customer?</h4>
                  <form method="post">
                    <Field
                      className={classes.text}
                      name="firstName"
                      component={renderField}
                      type="text"
                      placeholder="First Name"
                    />

                    <Field
                      className={classes.text}
                      name="lastName"
                      component={renderField}
                      type="text"
                      placeholder="Last Name"
                    />
                    <Field
                      className={classes.text}
                      name="email"
                      component={renderField}
                      type="text"
                      placeholder="Email"
                    />
                    <Field
                      className={classes.password}
                      name="password"
                      component={renderField}
                      type="password"
                      placeholder="Password"
                    />
                    <Field
                      className={classes.password}
                      name="passwordRepeat"
                      component={renderField}
                      type="password"
                      placeholder="Confirm Password"
                    />
                    <button className={classes.button} type="submit">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className={classes.footer}>
              <p>© Recipes Advisor LLC. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(SignUp);