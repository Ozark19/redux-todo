import { combineReducers } from "redux";

const itemsReducer = (
  state = [{ id: 1, description: "My Task", completed: true }],
  action
) => {
  switch (action.type) {
    case "ADD_NEW_ITEM":
      //Fixes a bug where duplicate keys were being generated
      //Finds the highest key value and adds 1
      let maxID = Math.max.apply(
        Math,
        state.map(data => data.id)
      );

      if (maxID === -Infinity) {
        maxID = 1;
      }

      return [...state, { ...action.item, id: maxID + 1 }];

    case "REMOVE_ITEM":
      return state.filter(item => {
        return item.id !== action.id;
      });
    case "EDIT_ITEM":
      return state.map(item => {
        if (item.id === action.item.id) {
          return { ...item, description: action.item.description };
        }
        return item;
      });
    case "TOGGLE_ITEM_COMPLETION":
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    default:
      return state;
  }
};

const activeEditItemId = (state = null, action) => {
  switch (action.type) {
    case "START_EDIT_ITEM":
      return action.id;
    case "FINISH_EDIT_ITEM":
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  todos: itemsReducer,
  activeEditItemId
});
