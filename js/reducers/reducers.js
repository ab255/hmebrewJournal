const brewData = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_BREW_DATA':
      return [...state, Object.assign({}, action.)]
    default:
      return state;
  }
}

export default brewData;
