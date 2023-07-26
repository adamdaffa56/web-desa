import textBorder from "../../assets/text border 1.png";
import Footer from "../../components/Footer";

import gambarContent from "../../assets/Rectangle 3.png"

const WisataList = () =>{

    const CardStyle = () =>{
        return(
          <div class="p-4 m-8 w-80 bg-cream shadow-md rounded-xl w-[441px] h-[418px]">
                  <picture class="rounded-lg block overflow-hidden">
                    <img
                      class="hover:scale-125"
                      src={gambarContent}
                    />
                  </picture>
    
                  <h1 class="mt-4 mb-2 text-xl font-bold font-poppins text-green">Judul Card di sini</h1>
                  <p class="text-sm text-gray-600 font-poppins text-green line-clamp-3">
                    Keterangan pendek tentang card di sini. Biasanya panjangnya dua sampai tiga baris, biar terlihat rapi.
                  </p>
          </div>
        );
    }

    return(
        <div className="flex flex-col">
            {/* Judul */}
            <section id="judul" className={'w-screen h-[330px] bg-[url(http://localhost:3000/background-putih.png)] bg-cover bg-center items-center flex flex-col justify-center'}>
                <h1 className="font-semibold text-[44px] text-green font-poppins">W I S A T A</h1>
                <img src={textBorder} className="w-[490px] h-56px"/>
            </section>

            {/* List */}
            <section id="list" className={'w-screen bg-[url(http://localhost:3000/background-hijau.png)] bg-cover bg-center items-center flex flex-col justify-center py-[90px]'}>
                <CardStyle/>
                <CardStyle/>
                <CardStyle/>
                <CardStyle/>
                <CardStyle/>
                <CardStyle/>
                <CardStyle/>
                <CardStyle/>
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
}

export default WisataList;