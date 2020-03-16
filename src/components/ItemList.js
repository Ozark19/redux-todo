import React from "react";
import Item from "./Item";

export default class ItemList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <Item {...this.props} key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}
