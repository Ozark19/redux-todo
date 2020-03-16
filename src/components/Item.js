import React, { Component, PropTypes } from "react";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired
    }),
    onEditItem: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired
  };

  onChangeCompleteItem = event => {
    event.preventDefault();
    this.props.onToggleComplete(this.props.item.id);
  };

  onClickEdit = event => {
    event.preventDefault();
    this.props.onEditItem(this.props.item.id);
  };

  onClickRemove = event => {
    event.preventDefault();
    this.props.onRemoveItem(this.props.item.id);
  };

  render() {
    return (
      <div className="fadeIn animated">
        <li>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={this.onChangeCompleteItem}
              defaultChecked={this.props.item.completed}
            />
          </div>

          <div
            className="todo"
            style={{
              textDecoration: this.props.item.completed
                ? "line-through"
                : "none"
            }}
          >
            {this.props.item.description}
          </div>

          <div className="icons">
            <div>
              <a onClick={this.onClickEdit} href="#">
                <i className="fa fa-pen"></i>
              </a>
            </div>
            <div>
              <a onClick={this.onClickRemove} href="#">
                <i className="fa fa-times"></i>
              </a>
            </div>
          </div>
        </li>
      </div>
    );
  }
}
