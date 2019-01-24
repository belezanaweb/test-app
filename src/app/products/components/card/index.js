import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Card from "./card";

function mapStateToProps(state, ownProps) {
  const { list } = state.products;
  const { sku } = ownProps;

  const product = list[sku];

  return {
    product
  };
}

export default connect(mapStateToProps)(Card);
