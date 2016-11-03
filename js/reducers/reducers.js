const brewData = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_BREW_DATA':
      return {
        data: action.data
      };
    default:
      return state
  };
}

export default brewData;
