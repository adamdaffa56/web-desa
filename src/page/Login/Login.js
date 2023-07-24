import backgroundputih from "../../assets/BG 1.png";
import backgroundhijau from "../../assets/BG 2.png";
import logo from "../../assets/logo-login.png";

function Login(){
    return(
        <div className="flex flex-row">
            {/* Kiri */}
            <section className={'h-screen w-2/5 bg-[url(http://localhost:3000/background-hijau.png)] bg-cover bg-center items-center flex justify-center'}>
                <img src={logo} className="w-[523px] h-[688px]"/>
            </section>

            {/* Kanan */}
            <section className={'h-screen w-3/5 bg-[url(http://localhost:3000/background-putih.png)] bg-cover bg-center items-center'}>
                <div className="flex flex-col items-center mt-[140px]">
                    <div className="h-[134px] w-[134px] bg-[#4C4B16] rounded-full mb-[27px]"></div>
                    <h2 className="font-bold text-[36px] text-[#4C4B16] mb-[27px]">Sign In</h2>
                    <form className="flex flex-col" action="">
                        <div className="relative">
                            <input className="h-[65px] w-[557px] py-[18px] pl-[43px] rounded-xl mb-[26px]" type="text" name="email" placeholder="Email"/> 

                        </div>

                        <div className="relative">
                            <input className="h-[65px] w-[557px] py-[18px] pl-[43px] rounded-xl mb-[44px]" type="text" name="password" placeholder="Password"/> 

                        </div>

                        <button className='bg-[#E7B10A] rounded-lg px-[21px] py-[10px] w-full h-[65px] text-[20px] font-medium text-white items-center'>Masuk</button>
                    </form>
                </div>
            </section>

        </div>
        
    ); 
}

export default Login;