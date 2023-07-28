import CardStyleCream from "../../../components/CardStyleCream";

const InformasiKegiatanAdmin = () =>{
    return(
        <section id="UMKMAdmin" className={'w-screen bg-[url(http://localhost:3000/background-hijau.png)] bg-cover bg-center flex flex-col p-[32px]'}>
            <p className="font-medium text-[24px] text-yellow font-poppins flex justify-end">Halo Admin!</p>
            <h2 className="font-semibold text-[44px] text-cream font-poppins mb-[40px]">Informasi Kegiatan</h2>
            <div className="flex flex-wrap gap-[30px] items-center justify-center">
                <CardStyleCream/>
                <CardStyleCream/>
                <CardStyleCream/>
                <CardStyleCream/>
                <CardStyleCream/>
                <CardStyleCream/>
            </div>
        </section>
    );
}

export default InformasiKegiatanAdmin;