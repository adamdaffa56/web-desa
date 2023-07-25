import './App.css';

import { Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Dashboard from './page/Dashboard';
import Login from './page/Login/Login';
import InformasiList from './page/Informasi/InformasiList';
import UMKMList from './page/UMKM/UMKMList';
import WisataList from './page/Wisata/WisataList';



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Dashboard/>} />
          <Route path="login" element={<Login />} />
          <Route path="informasi" element={<InformasiList />}/>
          <Route path="umkm" element={<UMKMList />}/>
          <Route path="wisata" element={<WisataList />}/>
        </Route>
      </Routes>
    </div>
  

  );
}

export default App;
