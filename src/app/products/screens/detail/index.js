import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { get } from "../../../../redux/actions/products";

import Detail from "./detail";

function mapStateToProps(state, ownProps) {
  const { list } = state.products;
  const { sku } = ownProps.navigation.state.params;

  const product = list[sku];

  console.log(product);

  return {
    product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ get }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
