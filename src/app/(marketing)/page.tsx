import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="bg-slate-900 min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
        <Image
          src="/react-gear.PNG"
          alt="React Gear"
          width={1000} // desired width of the image
          height={45} // desired height of the image
          className="rounded-2xl"
        />
        <div>
          <h1 className="text-5xl font-semibold my-6 max-w-[500px] text-white"> Escape Tutorial Hell</h1>
          <p className="text-2xl text-white">The gates of tutorial hell will not prevail again you <br />
          Dev drive is your all in one space to learn coding principles, beginning with escaping tutorial hell. 
          
          </p>
          <div></div>
        </div>
      </div >
    </>
  );
}
