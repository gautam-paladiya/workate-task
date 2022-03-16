import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "./ActionType";

const initialState = {
  isLoading: false,
  photoList: [],
  message: "",
};

const PhotoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_START:
      return { ...state, isLoading: true };
      break;
    case FETCH_SUCCESS:
      return { ...state, photoList: payload };
      break;
    case FETCH_FAIL:
      return { ...state, isLoading: false };
      break;

    default:
      return state;
  }
};

export default PhotoReducer;
