import gambar from "../assets/fiave-italy 1.png";
import gambarContent from "../assets/Rectangle 3.png"

import Footer from "../components/Footer";

function Dashboard(){
    return(
    <div className=''>
      {/* Hero */}
      <section id="home" className={'h-screen bg-[url(http://localhost:3000/hero.png)] bg-cover bg-center flex w-full items-center'}>
        <div className="text-start">
          <div className='mb-[29px] ml-[84px]'>
            <p className="text-white text-[44px]">Selamat Datang!</p>
            <p className='text-white text-[52px]'>Desa Sumber Ngepoh,</p>
            <p className='text-white text-[52px]'>Lawang, Jawa Timur</p>
          </div>
          <>
            <button className='bg-[#E7B10A] ml-[84px] rounded-full px-4 py-1 w-[335px] h-[84px] text-[44px] font-medium text-white'>Mulai</button>
          </>
        </div>
      </section>
    
      {/* Tentang Desa */}
      <div className="px-[60px] py-[120px]">
        <div className='bg-slate-200 w-full items-center'>
          <h2 className='items-center font-semibold text-[44px]'>Tentang Desa</h2>
          <h2 className='items-center font-medium text-[44px]'>Sumber Ngepoh</h2>
        </div>
        <div className='flex flex-row bg-slate-400 w-full items-center justify-between gap-[166px]'>
          <p className="text-justify text-[24px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <img src={gambarContent} className='w-[545px] h-[398px]'/>
        </div>
      </div>

      {/* Visi Misi */}
      <div className="flex flex-row justify-between bg-slate-200">
        <div className="w-[606px] bg-slate-400 ml-[50px] my-[154px]">
          <h2 className="text-[44px] text-start mb-[28px]">Visi dan Misi Desa Sumber Ngepoh</h2>
          <button className="w-full bg-[#E7B10A] rounded-full mb-[54px]">BUTTON TOGGLE</button>

          <p className="text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <img src={gambar} className="w-[543px] h-[696px] object-cover bg-center drop-shadow-xl mr-[60px] my-[143px]"/>
      </div>

      {/* Informasi */}
      <div className="items-center py-[90px] px-[60px]">
        <>
          <h2 className="font-semibold text-[44px] mb-[4px]">
            Informasi
          </h2>
          <p className="text-[24px] mb-[60px]">Dapatkan Informasi update seputar Kegiatan Desa Sumber Ngepoh disini.</p>

          <div className="flex flex-row gap-[35px] items-center justify-center mb-[60px]">
            <div className="w-[441px] h-[418px] rounded-lg bg-slate-400">
              <section id="home" className={'bg-[url(http://localhost:3000/content.png)] bg-cover bg-center h-1/2 w-full'}>

              </section>
              <div class="p-6 bg-slate-400">
                  <h2 class="font-bold mb-2 text-2xl text-purple-800">Card with an image</h2>
                  <p class="text-purple-700 mb-2">This is a little bit better of a card!</p>
                 
              </div>
            </div>

            <div className="w-[441px] h-[418px] rounded-lg bg-slate-400">
              <section id="home" className={'bg-[url(http://localhost:3000/content.png)] bg-cover bg-center h-1/2 w-full'}>

              </section>
              <div class="p-6 bg-slate-400">
                  <h2 class="font-bold mb-2 text-2xl text-purple-800">Card with an image</h2>
                  <p class="text-purple-700 mb-2">This is a little bit better of a card!</p>
                 
              </div>
            </div>

            <div className="w-[441px] h-[418px] rounded-lg bg-slate-400">
              <section id="home" className={'bg-[url(http://localhost:3000/content.png)] bg-cover bg-center h-1/2 w-full'}>

              </section>
              <div class="p-6 bg-slate-400">
                  <h2 class="font-bold mb-2 text-2xl text-purple-800">Card with an image</h2>
                  <p class="text-purple-700 mb-2">This is a little bit better of a card!</p>
                 
              </div>
            </div>
          </div>

          <button className='bg-[#E7B10A] rounded-lg px-[21px] py-[10px] w-[258px] h-[56px] text-[24px] font-medium text-white'>Informasi Lainnya</button>
        </>
      </div>

      {/* UMKM Desa */}
      <div className="items-center mb-[60px]">
        <div className='bg-slate-200 w-full items-center mb-[60px]'>
          <h2 className='text-start font-semibold text-[44px]'>UMKM</h2>
          <h2 className='text-start font-medium text-[44px]'>Desa Sumber Ngepoh</h2>
        </div>

        <div className="flex flex-wrap gap-[35px] items-center justify-center mb-[60px] mx-[62px]">
            <div className="w-[441px] h-[418px] rounded-lg bg-slate-400">
              <section id="home" className={'bg-[url(http://localhost:3000/content.png)] bg-cover bg-center h-1/2 w-full'}>

              </section>
              <div class="p-6 bg-slate-400">
                  <h2 class="font-bold mb-2 text-2xl text-purple-800">Card with an image</h2>
                  <p class="text-purple-700 mb-2">This is a little bit better of a card!</p>
                 
              </div>
            </div>

            <div className="w-[441px] h-[418px] rounded-lg bg-slate-400">
              <section id="home" className={'bg-[url(http://localhost:3000/content.png)] bg-cover bg-center h-1/2 w-full'}>

              </section>
              <div class="p-6 bg-slate-400">
                  <h2 class="font-bold mb-2 text-2xl text-purple-800">Card with an image</h2>
                  <p class="text-purple-700 mb-2">This is a little bit better of a card!</p>
                 
              </div>
            </div>

            <div className="w-[441px] h-[418px] rounded-lg bg-slate-400">
              <section id="home" className={'bg-[url(http://localhost:3000/content.png)] bg-cover bg-center h-1/2 w-full'}>

              </section>
              <div class="p-6 bg-slate-400">
                  <h2 class="font-bold mb-2 text-2xl text-purple-800">Card with an image</h2>
                  <p class="text-purple-700 mb-2">This is a little bit better of a card!</p>
                 
              </div>
            </div>

            <div className="w-[441px] h-[418px] rounded-lg bg-slate-400">
              <section id="home" className={'bg-[url(http://localhost:3000/content.png)] bg-cover bg-center h-1/2 w-full'}>

              </section>
              <div class="p-6 bg-slate-400">
                  <h2 class="font-bold mb-2 text-2xl text-purple-800">Card with an image</h2>
                  <p class="text-purple-700 mb-2">This is a little bit better of a card!</p>
                 
              </div>
            </div>
        </div>

        <button className='bg-[#E7B10A] rounded-lg px-[39px] py-[10px] w-[258px] h-[56px] text-[24px] font-medium text-white'>UMKM Lainnya</button>
      </div>

      {/* Wisata Desa */}
      <div>
        <div className='bg-slate-200 w-full items-center mt-[50px] mb-[60px]'>
          <h2 className='text-start font-semibold text-[44px]'>Wisata</h2>
          <h2 className='text-start font-medium text-[44px]'>Desa Sumber Ngepoh</h2>
        </div>

        <div className="flex justify-center mb-[90px]">
          <img src={gambarContent}/>
        </div>
      </div>
      
      {/* Footer */}
      <Footer/>
      

      
    </div>
    );

}

export default Dashboard;