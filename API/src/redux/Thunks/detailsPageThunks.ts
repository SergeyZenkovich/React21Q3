import {Dispatch} from "redux";
import {getDataById} from "../../DAL/API";
import {DetailsFetchingActions} from "../../interfaces/reducersInterfaces";
import {
  LoadingActionCreator,
  SetDetailsElementActionCreator
} from "../ActionCreators/deatailsPageActionCreators";

export const getDataByIDThunkCreator =
  (id: string) =>
  async (dispatch: Dispatch<DetailsFetchingActions>): Promise<void> => {
    dispatch(LoadingActionCreator());
    const elemData = await getDataById(id);
    dispatch(SetDetailsElementActionCreator(elemData));
    dispatch(LoadingActionCreator());
  };
