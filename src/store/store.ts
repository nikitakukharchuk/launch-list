import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { NewsActionType, launchReducer } from './reducers/launchReducer';
import { AppActionType, appReducer } from './reducers/appReducer';


const rootReducer = combineReducers({
  launch: launchReducer,
  app: appReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type AppRootActionType = NewsActionType | AppActionType;

export type RootState = ReturnType<typeof store.getState>;
// typing all dispatches
export type AppDispatch = ThunkDispatch<RootState, unknown, AppRootActionType>;
/**
 * new typing for all Thunk, will be work just with useAppSelector!
 */
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppRootActionType>;

// @ts-ignore
window.store = store;