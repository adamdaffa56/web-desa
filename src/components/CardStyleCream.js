import gambarContent from "../assets/Rectangle 3.png"
import { Icon } from '@iconify/react';

function CardStyleCream(){
    return (
        <div class="relative p-4 m-8 w-80 bg-cream shadow-md rounded-xl w-[441px] h-[418px]">
            <picture class="rounded-lg block overflow-hidden">
                <img
                    class="hover:scale-125"
                    src={gambarContent}
                />
                <Icon icon="iconamoon:trash-fill" width="24" className="text-cream absolute top-2 left-4 translate-y-3 bg-green rounded-full w-[30px] h-[30px] p-[4px] hover:scale-125"/>

            </picture>

            <h1 class="mt-4 mb-2 text-xl font-bold font-poppins text-green">Judul Card di sini</h1>
            <p class="text-sm text-gray-600 font-poppins text-green line-clamp-3">
            Keterangan pendek tentang card di sini. Biasanya panjangnya dua sampai tiga baris, biar terlihat rapi.
            </p>
        </div>
    );
}

export default CardStyleCream;