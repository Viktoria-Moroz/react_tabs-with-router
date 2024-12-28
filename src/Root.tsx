import { Navigate, Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home/Home';
import { TabsPage } from './pages/TabsPage/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { TabsProvider } from './Context/TabsProvider/TabsProvider';

export const Root = () => (
  <HashRouter>
    <TabsProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </TabsProvider>
  </HashRouter>
);
