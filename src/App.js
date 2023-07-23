import logo from './logo.svg';
import './App.css';

import gambar from "./assets/fiave-italy 1.png";
import gambarContent from "./assets/Rectangle 3.png"


function App() {
  return (
    <div className=''>
      <div className='relative'>
        <img src={gambar} className='h-[800px] w-full object-cover'/>
        <div className="flex flex-col absolute top-[300px] left-0 w-full h-full flex ">
          <div className='mb-[29px] ml-[84px]'>
            <p className="text-white text-[44px]">Selamat Datang!</p>
            <p className='text-white text-[52px]'>Desa Sumber Ngepoh,</p>
            <p className='text-white text-[52px]'>Lawang, Jawa Timur</p>
          </div>
          <>
            <button className='bg-[#E7B10A] ml-[84px] rounded-full px-4 py-1 w-[335px] h-[84px] text-[44px] font-medium text-white'>Mulai</button>
          </>
        </div>

        <div className='flex flex-col bg-slate-400 w-full items-center'>
          <h2 className='items-center'>Tentang Desa</h2>
          <h2 className='items-center'>Sumber Ngepoh</h2>
        </div>
        <div className='flex flex-row bg-slate-600 w-full items-center'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <img src={gambarContent} className='w-[545px] h-[398px]'/>
        </div>
      </div>
    </div>
    

  );
}

export default App;
