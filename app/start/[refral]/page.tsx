import Image from "next/image"
import Refral from "@/app/refral"
export default function Home(){
  return(
    <>
      <h1 className="text-center text-2xl mt-5">Welcome to SIGMA</h1>
      <h2 className="text-center text-xl">chose your reward</h2>
      <div className="w-full flex flex-col gap-1 mt-5">
        <div id="interactButton" className="mx-auto w-72 h-12 rounded-md bg-gray-800 flex items-center justify-between px-10 transition-all duration-500 hover:w-80">
          <Image src={"/star.png"} alt="star" width={40} height={40}/>
          <h1 className="italic text-lg">Stars</h1>
        </div>
        <div id="interactButton" className="mx-auto w-72 h-12 rounded-md bg-gray-800 flex items-center justify-between px-10 transition-all duration-500 hover:w-80">
          <Image src={"/ton.png"} alt="ton" width={40} height={40}/>
          <h1 className="italic text-lg">TON</h1>
        </div>
      </div>
      <p className="small-font text-xl mx-5 md:mx-[10%] text-center mt-5">This project is a continuation of Giggle and is considered a part of it. It is a temporary airdrop project that will be listed in less than a month, and you will be able to cash out your SIGMA on the Binance exchange. But don’t worry — along the way, we will continuously reward you with TON tokens and even Telegram Stars.</p>
      <div className="hidden md:flex mx-auto mt-20 ml-10">
        <Image className="w-[45%] rounded-2xl -rotate-12 h-auto transition-transform duration-2000 hover:rotate-2" src={"/cj.jpg"} unoptimized alt="cj" height={30} width={0}/>
        <Image className="w-[45%] rounded-2xl rotate-6 h-auto transition-transform duration-700 hover:rotate-0" src={"/giggle_post.png"} unoptimized alt="cj" height={30} width={0}/>
      </div>
      <h1 className="text-2xl text-center mx-5 mt-5">make a account and start game and take reward</h1>
      <div id="interactButton" className="mx-auto w-72 h-12 rounded-md mt-5 bg-gray-800 flex items-center justify-between px-10 transition-all duration-500 hover:w-80">
        <Image src={"/wallet.png"} alt="wallte" width={40} height={40}/>
        <h1 className="text-lg">Connection</h1>
      </div>
      <h2 className="text-center text-xl mt-5">your refral code:<Refral/></h2>
      <br/><br/><br/>
    </>
  )
}