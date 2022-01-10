import { Routes as RoutesReactRouterDOM, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Sinopse } from './pages/Sinopse';

export const Routes: React.FC = () => {
  return (
    <RoutesReactRouterDOM>
      <Route path="/" element={<Home />} />
      <Route path="/sinopse" element={<Sinopse />} />
    </RoutesReactRouterDOM>
  );
};
