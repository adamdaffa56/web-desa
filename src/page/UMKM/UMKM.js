import gambarUMKM from "../../assets/umkm.png"
import Footer from "../../components/Footer";

const UMKM = () => {
    return(
        <div className="flex flex-col">
            {/* Hero */}
            <img src={gambarUMKM} className="w-screen bg-cover bg-center drop-shadow-lg"/>
            
            {/* Konten */}
            <section id="judul" className={'w-screen h-fit bg-[url(http://localhost:3000/background-hijau.png)] bg-cover bg-center flex flex-col py-[90px] px-[60px]'}>
                <div className="mb-[30px]">
                    <h2 className="text-[44px] font-semibold font-poppins text-cream text-left">Nama Usaha</h2>
                    <p className="text-[20px] font-regular font-poppins text-cream text-left">Alamat : Dusun Krajan, RT 01 / RW 01, Desa Sumber Ngepoh, Kecamatan Lawang</p>
                    <p className="text-[20px] font-regular font-poppins text-cream text-left">Contact Us : 0891231231231</p>
                </div>

                <hr className="border-cream mb-[30px]"></hr>

                <p className="text-[22px] font-regular font-poppins text-cream text-justify indent-[60px]">         Lorem ipsum dolor sit amet consectetur. Malesuada at tempor erat fermentum at malesuada. Suspendisse justo a mollis mauris ullamcorper leo morbi aliquam. Adipiscing ullamcorper eu lacus enim in. Euismod arcu congue quam placerat massa in tortor. Morbi molestie porttitor quisque eu. Integer dui montes et nibh amet eget at nunc. Diam placerat convallis tincidunt curabitur vulputate elementum eu nibh tortor. Enim diam non dolor bibendum vitae eget consectetur. Ut massa quis tellus scelerisque. Nulla id suspendisse maecenas vitae. Malesuada sit vel consectetur non pretium fusce sed. Risus praesent fames lacinia imperdiet. Malesuada eros nulla scelerisque a ultricies amet. Vulputate leo pharetra massa arcu sapien mattis. Adipiscing habitant lacus dictumst ac quam turpis proin. Ultricies nibh aenean non arcu felis velit. Ullamcorper iaculis aliquet elit vitae sed aliquam pulvinar. Rhoncus ac duis faucibus molestie lectus consequat placerat ultricies. Tempus sit in vulputate at tristique sed suscipit urna.
                Lorem ipsum dolor sit amet consectetur. Malesuada at tempor erat fermentum at malesuada. Suspendisse justo a mollis mauris ullamcorper leo morbi aliquam. Adipiscing ullamcorper eu lacus enim in. Euismod arcu congue quam placerat massa in tortor. Morbi molestie porttitor quisque eu. Integer dui montes et nibh amet eget at nunc. Diam placerat convallis tincidunt curabitur vulputate elementum eu nibh tortor. Enim diam non dolor bibendum vitae eget consectetur. Ut massa quis tellus scelerisque. Nulla id suspendisse maecenas vitae. Malesuada sit vel consectetur non pretium fusce sed. Risus praesent fames lacinia imperdiet. Malesuada eros nulla scelerisque a ultricies amet. Vulputate leo pharetra massa arcu sapien mattis. Adipiscing habitant lacus dictumst ac quam turpis proin. Ultricies nibh aenean non arcu felis velit. Ullamcorper iaculis aliquet elit vitae sed aliquam pulvinar. Rhoncus ac duis faucibus molestie lectus consequat placerat ultricies. Tempus sit in vulputate at tristique sed suscipit urna.
                </p>

            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
}

export default UMKM;