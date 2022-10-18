export const cartReducer = (initialState = [], action) => {
  switch (action.type) {
    case "Add":
      return [...initialState, action.payload];
    case "Remove":
      return initialState.filter((p) => p.id !== action.payload);
    case "Clean":
      return [];
    default:
      return initialState;
  }
};
