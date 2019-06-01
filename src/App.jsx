import React, { Fragment, useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { getProducts } from './actionCreators/products';

class App extends React.Component {
  handleProducts = () => {
    this.props.handleData();
  };

  render() {
    const data = this.props.products;

    return (
      <div>
        <Helmet titleTemplate={'%s | Future Card'} defaultTitle='Future Card'>
          <link rel='canonical' href='https://futurecard.com' />
          <meta name='description' content='W' />
        </Helmet>
        <h1>Future Card</h1>
        <button onClick={this.handleProducts}>Click</button>
        {!!data.length && (
          <ul>
            {data.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });
const mapDispatchToProps = dispatch => ({
  handleData: () => dispatch(getProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
