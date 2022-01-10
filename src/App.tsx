import logo from './assets/logo.svg';

import './styles/global.scss';

const App = () => {
  return (
    <div style={{ background: 'var(--dark)', width: '100%', height: '100%' }}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default App;
