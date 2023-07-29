import logoMalang from "../assets/logo malang.png";

function Navbar(){
    return(
        <nav>
        <div className={'container w-screen mx-auto bg-[url(http://localhost:3000/background-hijau.png)] bg-cover bg-center flex flex-row justify-around py-[12px]'}>
          {/* Logo */}
          <div className="sm:flex justify-around">
            <a href="" className="flex flex-row  items-center gap-[12px]">
              <img src={logoMalang} className="h-[40px]"/>
              <p className="text-start font-normal font-poppins text-cream text-[14px]">Desa Sumber Ngepoh</p>
            </a>
          </div>

          {/* Menu Item */}
          <ul className="flex gap-[30px] text-cream font-poppins sm:self-center text-xl border-t sm:border-none">
            <li className="sm:inline-block">
              <a href="" className="p-3 hover:underline">Beranda</a>
            </li>
            <li className="sm:inline-block">
              <a href="" className="p-3 hover:underline">Sekilas</a>
            </li>
            <li className="sm:inline-block">
              <a href="" className="p-3 hover:underline">Visi Misi</a>
            </li>
            <li className="sm:inline-block">
              <a href="" className="p-3 hover:underline">Informasi</a>
            </li>
            <li className="sm:inline-block">
              <a href="" className="p-3 hover:underline">UMKM</a>
            </li>
            <li className="sm:inline-block">
              <a href="" className="p-3 hover:underline">Wisata</a>
            </li>
            <li className="sm:inline-block">
              <a href="" className="p-3 hover:underline">Masuk</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;