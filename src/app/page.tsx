import Image from "next/image";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex min-h-screen">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/RE-TO.png"
                alt="Logo"
                width={180}
                height={37}
                priority
            />
        </div>
        <div className="flex min-h-screen">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/Classy-Chassis-Circle-Logo.png"
                alt="Logo"
                width={180}
                height={37}
                priority
            />
        </div>
      </main>
  );
}
