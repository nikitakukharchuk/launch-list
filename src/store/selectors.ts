import { RootState } from './store';

export const selectAllLaunch = (state: RootState) => state.launch.results;
export const selectError = (state: RootState) => state.app.error;
export const selectStatus = (state: RootState) => state.app.status;