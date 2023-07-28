const InformasiDesa = () => {
    return(
        <section id="Informasi" className={'w-screen bg-[url(http://localhost:3000/background-hijau.png)] bg-cover bg-center flex flex-col p-[32px]'}>
            <p className="font-medium text-[24px] text-yellow font-poppins flex justify-end">Halo Admin!</p>
            <h2 className="font-semibold text-[35px] text-cream font-poppins flex justify-start mb-[40px]">Informasi Desa Sumber Ngepoh</h2>

            <div className="flex flex-col justify-start items-start">
                <p className="font-medium text-[20px] text-cream font-poppins mb-[12px]">Tentang Desa</p>
                <form action="" method="">
                    <textarea rows = "5" cols = "190" name = "description" className=" p-[20px] bg-green border border-cream rounded-lg text-cream mb-[24px]">
                        
                    </textarea>
                </form>

                <p className="font-medium text-[20px] text-cream font-poppins mb-[12px]">Visi</p>
                <form action="" method="">
                    <textarea rows = "5" cols = "190" name = "description" className=" p-[20px] bg-green border border-cream rounded-lg text-cream mb-[24px]">
                        
                    </textarea>
                </form>

                <p className="font-medium text-[20px] text-cream font-poppins mb-[12px]">Misi</p>
                <form action="" method="">
                    <textarea rows = "5" cols = "190" name = "description" className=" p-[20px] bg-green border border-cream rounded-lg text-cream mb-[24px]">
                        
                    </textarea>
                </form>


            </div>

            <div className="flex justify-end">
                <button className='bg-yellow rounded-lg px-[21px] py-[10px] w-[258px] h-[56px] text-[24px] font-medium text-white'>Submit</button>
            </div>
        </section>
    );
}

export default InformasiDesa;