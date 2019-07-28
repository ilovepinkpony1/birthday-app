import { connect } from 'react-redux';
import TabLinks from './TabLinks';
import { setRequestedFalse } from '../../redux/actions';

function mapDispatchToProps(dispatch) {
  return {
    setRequestFalse: () => dispatch(setRequestedFalse())
  };
}

const TabLinksHandler = connect(
  null,
  mapDispatchToProps
)(TabLinks);

export default TabLinksHandler;
