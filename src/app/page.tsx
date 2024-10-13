import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 h-screen w-screen justify-center">
      <Image
        className="relative z-10 -mb-20"
        src="/logo.png"
        alt="Next.js logo"
        width={500}
        height={500}
        priority
      />
      <Image
        className="relative z-10"
        src="/telefono.png"
        alt="Next.js logo"
        width={500}
        height={500}
        priority
      />
      <h1 className="relative z-10 md:text-4xl text-2xl font-bold max-w-[800px] md:px-10 px-4">
        Estamos trabajando para traerles noticias increíbles:
      </h1>
      <h1 className="relative z-10 md:text-4xl text-2xl font-bold max-w-[800px] md:px-10 px-4">
        Proximamente este espacio estará lleno de información, actualizaciones y todo sobre nuestros productos. ¡Manténganse al tanto!
      </h1>
      <Image
        unoptimized
        className="h-screen w-screen absolute top-0 left-0 z-0 object-cover"
        src="/bg.png"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <div className="h-screen w-screen absolute top-0 left-0 z-0 bg-black bg-opacity-30"></div>
    </main>
  );
}