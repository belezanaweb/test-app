import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getList } from "../../../../redux/actions/products";

import List from "./list";

function mapStateToProps(state) {
  const { order } = state.products;

  order;

  return {
    order
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getList }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
