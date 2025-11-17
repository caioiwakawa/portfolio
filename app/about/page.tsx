import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <Image src="/wii-background.png" alt="background" fill/>
      <div className="w-400 h-180 relative mx-auto top-10">
      </div>
    </main>
  );
}