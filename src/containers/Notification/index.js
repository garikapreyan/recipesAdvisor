import { connect } from 'react-redux';

import App from '../../components/Notification';

import { getRecipesForNotification } from '../../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    notification: state.notification,
    isNotificationFetching: state.isNotificationFetching
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getRecipesForNotification }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
