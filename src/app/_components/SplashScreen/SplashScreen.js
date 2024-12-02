import Image from "next/image";

const SplashScreen = () => {
  return (
    <div
      className="h-[100vh] flex justify-center bg-black text-white pt-52"
    >
      <Image
        src="/splash.gif"
        className="h-[100px] object-cover"
        width={300}
        height={100}
        alt="xnjoy"
      />
    </div>
  );
};


export default SplashScreen;
