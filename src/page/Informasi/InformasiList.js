import textBorder from "../../assets/text border 1.png";
import Footer from "../../components/Footer";

const InformasiList = () => {
    return(
        <div className="flex flex-col">
            {/* Judul */}
            <section id="judul" className={'w-screen h-[330px] bg-[url(http://localhost:3000/background-putih.png)] bg-cover bg-center items-center flex flex-col justify-center'}>
                <h1 className="font-semibold text-[44px] text-green ">I N F O R M A S I</h1>
                <img src={textBorder} className="w-[490px] h-56px"/>
            </section>

            {/* List */}
            <section id="list" className={'w-screen bg-[url(http://localhost:3000/background-hijau.png)] bg-cover bg-center items-center flex flex-col justify-center py-[90px]'}>
                
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
}

export default InformasiList;