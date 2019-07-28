import { connect } from 'react-redux';
import TabLinks from './TabLinks';
import { setRequestedFalse, setActiveLink } from '../../redux/actions';

function mapStateToProps(state) {
  return {
    activeLink: state.activeLink,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setRequestFalse: () => dispatch(setRequestedFalse()),
    setActiveLink: (tab) => dispatch(setActiveLink(tab)),
  };
}

const TabLinksHandler = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabLinks);

export default TabLinksHandler;
