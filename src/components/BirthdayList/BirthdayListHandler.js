import { connect } from 'react-redux';
import BirthdayList from './BirthdayList';
import { TODAY, RECENT, NEARBY } from '../../constants';
import { load, addUsers } from '../../redux/actions';

function mapStateToProps(state, ownProps) {
  const { tab } = ownProps;
  const propsHandler =  {
    [RECENT]: () => {
      return {
        data: state.recentData,
        requested: state.requested,
        usersAddedForRecent: state.usersAddedForRecent,
        usersAddedForNearby: state.usersAddedForNearby,
        tab,

      }
    },

    [TODAY]: () => {
      return {
        data: state.todaysData,
        requested: state.requested,
        usersAddedForRecent: state.usersAddedForRecent,
        usersAddedForNearby: state.usersAddedForNearby,
        tab,
      }
    },

    [NEARBY]: () => {
      return {
        data: state.nearbyData,
        requested: state.requested,
        usersAddedForRecent: state.usersAddedForRecent,
        usersAddedForNearby: state.usersAddedForNearby,
        tab,
      }
    }
  }
  return propsHandler[tab]();
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: (from, to, tab) => dispatch(load(from, to, tab)),
    addUsers: (tab) => dispatch(addUsers(tab))
  };
}

const BirthdayListHandler = connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdayList);

export default BirthdayListHandler;
