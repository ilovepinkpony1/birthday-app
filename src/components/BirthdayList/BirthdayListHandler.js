import { connect } from 'react-redux';
import BirthdayList from './BirthdayList';
import { TODAY, RECENT, NEARBY } from '../../constants';
import { load } from '../../redux/actions';

function mapStateToProps(state, ownProps) {
  const { tab } = ownProps;
  switch (tab) {
    case RECENT:
      return {
        data: state.recentData,
        tab
      };
    case TODAY:
      return {
        data: state.todaysData,
        tab
      };
    case NEARBY:
      return {
        data: state.nearbyData,
        tab
      };
    default:
      return {
        data: null
      };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: (from, to, tab) => dispatch(load(from, to, tab))
  };
}

const BirthdayListHandler = connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdayList);

export default BirthdayListHandler;
