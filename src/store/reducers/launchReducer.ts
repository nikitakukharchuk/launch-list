import { Dispatch } from "redux";
import { AppThunk } from "../store";
import { setAppStatus } from "./appReducer";
import { launchApi } from "../../api/launchApi";
import { handleServerAppError } from "../../common/utils/error-utils";
import { ItemLaunchType } from "../../types/ItemLaunchType";

export type NewsInitialStateType = typeof initialState ;

const initialState = {
    count: 0,
    next: "",
    previous: null,
    results: [],
    rockets:[]
};

export const launchReducer = (state = initialState, action: NewsActionType): NewsInitialStateType => {
    switch (action.type) {
        case 'LAUNCH/SET-LAUNCH':
            return {...state, ...action.allLaunch};
        default:
            return state;
    }
};

export const addAllLaunch = (allLaunch: ItemLaunchType) => ({type: 'LAUNCH/SET-LAUNCH', allLaunch} as const);

export const getAllLaunch = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatus('loading'));
        let res = await launchApi.getAllLaunch();
        const data = await res.data;
        dispatch(addAllLaunch(data));
        dispatch(setAppStatus('succeeded'));
    } catch (e: any) {
        handleServerAppError(e, dispatch);
    }
};

// types
export type NewsActionType = ReturnType<typeof addAllLaunch>