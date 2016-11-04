// const fetchBrew = () => {
//   return (dispatch, getState) => {
//
//
//   }
// }

export const addBrew = brewData => {
  console.log('in add brew action creator'),
  return {
    type: 'ADD_BREW_DATA',
    brewData
  };
};

// export const editCurrentCard = brewData => {
//   return {
//     type: 'EDIT_BREW_DATA',
//   };
// };
