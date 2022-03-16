const { FETCH_SUCCESS, FETCH_FAIL, FETCH_START } = require("./ActionType");

export const getPhotoList = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    return fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res);
          if (res) {
            dispatch({ type: FETCH_SUCCESS, payload: res });
          } else {
            dispatch({ type: FETCH_FAIL, payload: "something went wrong" });
          }
        },
        (err) => {
          console.log(err);
          dispatch({ type: FETCH_FAIL, payload: err });
        }
      );
  };
};
