import React, { Component } from "react";
import Product from "./Products";
import Title from "./Title";

import { ProductConsumer } from "../context";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div clasname="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
