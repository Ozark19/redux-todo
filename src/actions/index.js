// Action creator

export const addItem = item => {
  return {
    type: "ADD_NEW_ITEM",
    item
  };
};

export const startEditingItem = () => {
  return {
    type: "START_EDITING_ITEM"
  };
};

export const finishEditItem = () => {
  return {
    type: "FINISH_EDIT_ITEM"
  };
};

export const editItem = item => {
  return { type: "EDIT_ITEM", item };
};

export const doEditItem = item => {
  return dispatch => {
    dispatch(startEditingItem());
    dispatch(editItem(item));
    dispatch(finishEditItem());
  };
};

export const removeItem = id => {
  return {
    type: "REMOVE_ITEM",
    id
  };
};
