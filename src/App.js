import './App.css';

import { Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Dashboard from './page/Dashboard';
import Login from './page/Login/Login';
import InformasiList from './page/Informasi/InformasiList';
import UMKMList from './page/UMKM/UMKMList';
import WisataList from './page/Wisata/WisataList';

import InformasiDetail from "./page/Informasi/Informasi";
import UmkmDetail from "./page/UMKM/UMKM";
import WisataDetail from "./page/Wisata/Wisata";

import InformasiDesa from './page/admin/InformasiDesaAdmin';
import UMKMAdmin from './page/admin/UMKM/UMKMAdmin';
import UpdateUMKM from './page/admin/UMKM/UpdateUMKM';
import InformasiKegiatanAdmin from "./page/admin/Informasi Kegiatan/InformasiKegiatanAdmin";
import WisataAdmin from "./page/admin/Wisata/WisataAdmin";



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<InformasiDetail />}>
          <Route index element={<Dashboard/>} />
          <Route path="login" element={<Login />} />
          <Route path="informasi" element={<InformasiList />}/>
          <Route path="umkm" element={<UMKMList />}/>
          <Route path="wisata" element={<WisataList />}/>

          <Route path="informasiDetail" element={<InformasiDetail/>}/>
          <Route path="umkmDetail" element={<UmkmDetail/>}/>
          <Route path="wisataDetail" element={<WisataDetail/>}/>
        </Route>

        <Route path="/admin" element={<InformasiDesa/>}>
          <Route index element={<InformasiDesa/>} />
          <Route path="umkm" element={<UMKMAdmin/>} />
          <Route path='update-umkm' element={<UpdateUMKM/>}/>
          <Route path="informasi-kegiatan" element={<InformasiKegiatanAdmin/>} />
          <Route path="wisata" element={<WisataAdmin/>}/>

        </Route>
      </Routes>
    </div>
  

  );
}

export default App;
