import { Icon } from '@iconify/react';

const UpdateWisata = () =>{
    return(
        <section id="Informasi" className={'w-screen bg-[url(http://localhost:3000/background-hijau.png)] bg-cover bg-center flex flex-col p-[32px]'}>
            <p className="font-medium text-[24px] text-yellow font-poppins flex justify-end">Halo Admin!</p>
            <h2 className="font-semibold text-[35px] text-cream font-poppins flex justify-start mb-[40px]">Update Wisata</h2>

            <div className=" flex flex-col justify-start items-start text-start font-poppins font-normal text-[20px] text-cream">
                <form action="" method="">
                    <p className="mb-[12px]">Gambar</p>
                    <div className='flex flex-row gap-[20px]'>
                        <input className="bg-cream py-[18px] pl-[20px] rounded-xl mb-[26px] border border-green text-[20px] text-green mb-[20px]"></input>
                        <Icon icon="ri:image-add-fill" className='h-[70px] w-[70px]' />
                    </div>

                    <p className="mb-[12px]">Nama Wisata</p>
                    <input className="w-full bg-cream py-[18px] pl-[20px] rounded-xl mb-[26px] border border-green text-[20px] text-green mb-[20px]"></input>

                    <p className="mb-[12px]">Alamat</p>
                    <input className="w-full bg-cream py-[18px] pl-[20px] rounded-xl mb-[26px] border border-green text-[20px] text-green mb-[20px]"></input>
                    
                    <p className="mb-[12px]">Contact Person</p>
                    <input type="number" className="bg-cream py-[18px] pl-[20px] rounded-xl mb-[26px] border border-green text-[20px] text-green mb-[20px]"></input>

                    <p className="mb-[12px]">Harga Tiket</p>
                    <input className="bg-cream py-[18px] pl-[20px] rounded-xl mb-[26px] border border-green text-[20px] text-green mb-[20px]"></input>

                    <p className="mb-[12px]">Deskripsi</p>
                    <textarea type="description" rows = "5" cols = "120" name = "description" className=" p-[20px] bg-cream border border-cream rounded-lg text-green mb-[24px]">
                        
                    </textarea>
                </form>
            </div>

        </section>
    );
}

export default UpdateWisata;