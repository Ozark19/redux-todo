import React, { Component, PropTypes } from "react";

import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

class Todos extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  onNewItemSubmited = item => {
    this.props.addItem(item);
  };

  onEditItemSubmited = item => {
    this.props.editItem(item);
  };

  toggleItemCompletion = id => {
    this.props.dispatch({
      type: "TOGGLE_ITEM_COMPLETION",
      id: id
    });
  };

  startEditItem = id => {
    this.props.dispatch({
      type: "START_EDIT_ITEM",
      id: id
    });
  };

  removeItem = id => {
    this.props.removeItem(id);
  };

  render() {
    const editItem = this.props.items.filter(item => {
      return item.id === this.props.activeEditItemId;
    })[0];

    return (
      <div>
        <div>
          <ItemForm
            onNewItemSubmited={this.onNewItemSubmited}
            onEditItemSubmited={this.onEditItemSubmited}
            editItem={editItem}
          />
        </div>
        <div>
          <ItemList
            items={this.props.items}
            onToggleComplete={this.toggleItemCompletion}
            onEditItem={this.startEditItem}
            onRemoveItem={this.removeItem}
          />
        </div>
      </div>
    );
  }
}

export default Todos;
