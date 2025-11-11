import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <Image src="/wii-background.png" alt="background" fill/>
      <div className="w-100 h-200 relative mx-auto top-100 bg-white"></div>
    </main>
  );
}
