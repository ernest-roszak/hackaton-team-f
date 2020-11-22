import React, { Component } from "react";
import axios from "axios";
import './style.css';
import Item from "../item/Item";
export default class OfferList extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    let itemUrl = `http://localhost:3001/offer`;
    let data;
    axios.get(itemUrl).then((response) => {
      data = response.data;
      this.setState({
        data: data,
      });
    });
  }
  render() {
    const { data } = this.state;
    let itemsToRender;
    if (data) {
      itemsToRender = data.map((item) => {
        return (
          <li>
             <Item id={item.id} />
          </li>
       
        );
      });
    }
    return <ul>{itemsToRender}</ul>;
  }
}
