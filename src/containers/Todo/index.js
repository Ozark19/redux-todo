import { connect } from "react-redux";

import * as actionCreators from "../../actions";
import Todo from "../../components/Todos";

const mapStateToProps = state => {
  return {
    items: state.todos,
    activeEditItemId: state.activeEditItemId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    addItem: item => dispatch(actionCreators.addItem(item)),
    editItem: item => dispatch(actionCreators.doEditItem(item)),
    removeItem: item => dispatch(actionCreators.removeItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
