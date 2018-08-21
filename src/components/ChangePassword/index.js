import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { Glyphicon } from 'react-bootstrap';
import injectSheet from 'react-jss';
import styles from './styles';

class ChangePassword extends Component {
  render() {
    const { handleSubmit, classes, reset, hasError } = this.props;
    return (
      <Form onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor={'oldPassword'} className={classes.field}>Old Password</label>
        <Field
          className={classes.field}
          component={'input'}
          type={'password'}
          name={'oldPassword'}
          placeholder={'Old Password'}
          autoComplete={'oldPassword'}
        />
        <label className={classes.field}>New Password</label>
        <Field
          className={classes.field}
          component={'input'}
          type={'password'}
          name={'newPassword'}
          placeholder={'New Password'}
          autoComplete={'newPassword'}
        />
        <label className={classes.field}>Repeat Password</label>
        <Field
          className={classes.field}
          component={'input'}
          type={'password'}
          name={'coPassword'}
          placeholder={'Repeat Password'}
          autoComplete={'coPassword'}
        />
        {hasError ? <Glyphicon glyph={'remove-sign'}/> : ''}
        <button className={classes.field} type={'submit'} onClick={() => setTimeout(reset)}>
          Save
        </button>
      </Form>
    );
  }
}

export default reduxForm({ form: 'changePassword' })(
  injectSheet(styles)(ChangePassword)
);
