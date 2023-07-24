import './App.css';

import { Route, Routes} from "react-router-dom";
import Dashboard from './page/Dashboard';
import Login from './page/Login/Login';



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>}>
          <Route index element={<Dashboard/>} />
          <Route path="login" element={<Login />} />

        </Route>
      </Routes>
    </div>
  

  );
}

export default App;
