// const fetchBrew = () => {
//   return (dispatch, getState) => {
//
//
//   }
// }

export const addBrew = async (brewData) => {
  console.log('in add brew action creator'),
  return (dispatch) => {
    let uid = brewData.uuid
    let brew = JSON.stringify(brewData)
    try {
      await AsyncStorage.setItem(uid, brew)
    }
    .then(() => {
      type: 'ADD_BREW_DATA',
      brewData
    })
    .catch(error => {
      console.log('Error saving Brew Data:', error);
    })
  };
};

// export const editCurrentCard = brewData => {
//   return {
//     type: 'EDIT_BREW_DATA',
//   };
// };
