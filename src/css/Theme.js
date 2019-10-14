import { connect } from 'react-redux';
import { withRouter } from 'react-router';

/**
 * Add theme reducer to the Component passed as argument
 */
function withTheme(Component) {
  const mapStateToProps = ({ theme }) => ({ theme });
  return withRouter(connect(mapStateToProps)(Component));
}

export default withTheme;
