import React, { Component, useContext, } from 'react'
import Client from 'shopify-buy'
import NotificationContext from './NotificationContext';

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API

});

class ShopProvider extends Component {

  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,

    status: null,
    description: null
  }

  componentDidMount() {
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id)
    } else {
      this.createCheckout()
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create()
    localStorage.setItem('checkout_id', checkout.id)
    this.setState({ checkout: checkout })
  }

  fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout: checkout })
      })
  }

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10)
      }
    ]

    const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);
    this.setState({ checkout: checkout });
    if (checkout) {
      this.setState({
        status: 'success',
        description: 'Item has been successfully added to basket',
        title: 'success adding'
      });
    } else {
      this.setState({
        status: 'error',
        description: 'Something went wrong',
        title: 'error adding'
      });
    }
  }

  removeLineItem = async (lineItemIdsToRemove) => {
    const checkout = await client.checkout.removeLineItems(this.state.checkout.id, lineItemIdsToRemove);
    this.setState({ checkout: checkout });
  }

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products })
  };

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });
    // console.log('fetched product');
  }

  closeCart = () => {
    this.setState({ isCartOpen: false });
  }

  openCart = () => {
    this.setState({ isCartOpen: true });
  }

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  }

  openMenu = () => {
    this.setState({ isMenuOpen: true });
  }

  closeNotification = () => {
    this.setState({ status: null })
  }

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          closeCart: this.closeCart,
          openCart: this.openCart,
          closeMenu: this.closeMenu,
          openMenu: this.openMenu,

          closeNotification: this.closeNotification
        }}>
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
