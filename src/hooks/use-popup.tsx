import { useReducer } from "react";

export interface IPopupState {
  open: boolean;
}
export interface IPopupReturn {
  openPopup: () => void;
  closePopup: () => void;
  togglePopup: () => void;
  open: boolean;
}

export type PopupAction =
  | { type: "OPEN_Popup" }
  | { type: "CLOSE_Popup" }
  | { type: "TOGGLE_Popup" };

const dialogReducer = (
  state: IPopupState,
  action: PopupAction
): IPopupState => {
  switch (action.type) {
    case "OPEN_Popup":
      return { ...state, open: true };
    case "CLOSE_Popup":
      return { ...state, open: false };
    case "TOGGLE_Popup":
      return { ...state, open: !state.open };
    default:
      return state;
  }
};

const usePopup = () => {
  const [state, dispatch] = useReducer(dialogReducer, { open: false });

  const openPopup = () => {
    dispatch({ type: "OPEN_Popup" });
  };

  const closePopup = () => {
    dispatch({ type: "CLOSE_Popup" });
  };

  const togglePopup = () => {
    dispatch({ type: "TOGGLE_Popup" });
  };

  return {
    openPopup,
    closePopup,
    togglePopup,
    open: state.open,
  };
};

export default usePopup;
