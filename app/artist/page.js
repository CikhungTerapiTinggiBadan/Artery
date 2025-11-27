import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function ArtistProfile() {
  const artistWorks = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: `Seni (Air) Karya ${i + 1}`,
    price: "Rp. 2.000.000.000"
  }));

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        
        <section className="bg-[#fbf8e8] border border-[#dcd6c3] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center md:items-start justify-between rounded-sm shadow-sm relative overflow-hidden">
           
           <div className="z-10 md:w-1/2">
             <h1 className="text-4xl font-bold font-serif mb-4 text-black border-b-4 border-black inline-block pb-1">Fulanil Fulan</h1>
             <ul className="text-sm space-y-1 mb-6 text-gray-700 font-mono">
               <li>Age: ???</li>
               <li>Nationality: Indonesia</li>
               <li>Specialist: Abstract</li>
             </ul>
             <p className="text-xs text-gray-600 max-w-md leading-relaxed">
               Seniman yang lahir tanpa sengaja, berkarya dengan sepenuh jiwa raga 
               walaupun seringkali tidak ada harganya. Karyanya dikenal sebagai 
               masterpiece yang hanya bisa dimengerti oleh orang-orang tertentu saja.
             </p>
           </div>

           <div className="mt-8 md:mt-0 relative z-10">
              <div className="bg-[#463528] p-3 shadow-xl transform rotate-2 hover:rotate-0 transition duration-500">
                <div className="bg-blue-100 w-48 h-36 border-4 border-white relative overflow-hidden">
                   <div className="absolute inset-0 bg-[#bae6fd]">
                      <div className="absolute bottom-0 w-full h-16 bg-[#16a34a]"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#fde047] rounded-full"></div>
                   </div>
                </div>
                <div className="flex justify-center mt-2 space-x-1">
                   <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                   <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                   <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                </div>
              </div>
           </div>
        </section>

        <h2 className="text-xl font-bold font-serif mb-6 border-l-4 border-[#463528] pl-4">Fulan's Gallery</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {artistWorks.map((item) => (
             <div key={item.id} className="flex flex-col group">
                <div className="w-full aspect-square bg-blue-50 mb-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#e0f2fe] group-hover:scale-105 transition duration-700">
                        <div className="absolute bottom-0 w-full h-1/4 bg-[#65a30d]"></div>
                        <div className="absolute top-4 left-1/2 w-8 h-8 bg-white opacity-40 rounded-full blur-sm"></div>
                    </div>
                </div>
                <h3 className="font-bold text-xs">{item.title}</h3>
                <p className="text-[#22c55e] font-bold text-xs mb-2">{item.price}</p>
                <button className="w-full bg-[#463528] text-white text-[10px] py-2 font-bold hover:bg-[#2d221a] rounded-sm">
                  Beli Sekarang
                </button>
             </div>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}