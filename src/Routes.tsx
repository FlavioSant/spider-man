import { Routes as RoutesReactRouterDOM, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Sinopse } from './pages/Sinopse';
import { Elenco } from './pages/Elenco';

export const Routes: React.FC = () => {
  return (
    <RoutesReactRouterDOM>
      <Route path="/" element={<Home />} />
      <Route path="/sinopse" element={<Sinopse />} />
      <Route path="/elenco" element={<Elenco />} />
    </RoutesReactRouterDOM>
  );
};
