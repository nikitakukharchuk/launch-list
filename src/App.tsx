import React, { useEffect } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { useAppDispatch, useAppSelector } from './common/hooks/customHooks';
import LinearProgress from '@mui/material/LinearProgress';
import { ErrorSnackbar } from './components/ErrorSnackbar/ErrorSnackbar';
import { selectAllLaunch, selectStatus } from './store/selectors';
import { CircularProgress } from '@mui/material';
import { getAllLaunch } from './store/reducers/launchReducer';
import { Navigates } from './components/Routes/Navigates';

const App = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const allLaunch = useAppSelector(selectAllLaunch);

  useEffect(() => {
    dispatch(getAllLaunch());
  }, [dispatch]);

  if (!allLaunch) {
    return (
      <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <div>
        <ErrorSnackbar />
        <Header />
        {status === 'loading' && <LinearProgress color="success" />}
        <Navigates />
        <Footer />
      </div>
    </div>
  );
};
export default App;