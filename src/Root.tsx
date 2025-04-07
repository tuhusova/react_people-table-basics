import { HashRouter, Navigate } from 'react-router-dom';
import { App } from './App';
import { Routes, Route, } from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { PeoplePage } from './pages/PeoplePage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/home' element={<Navigate to='/' replace/>}></Route>

        <Route path='people'>
          <Route path='people/:slug?' element={<PeoplePage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />

      </Route>

    </Routes>
  </HashRouter>
);
