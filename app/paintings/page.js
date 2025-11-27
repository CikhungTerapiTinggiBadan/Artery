import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Link from 'next/link';

export default function PaintingsPage() {
  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `Seni (Air) Part ${i + 1}`,
    artist: "Fulan Fulan",
    price: "Rp. 2.000.000.000"
  }));

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <p className="text-[10px] text-gray-500 mb-1">Home &gt; Paintings</p>
          <h1 className="text-2xl font-bold font-serif">All Paintings</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {products.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="bg-blue-100 aspect-square relative mb-2 overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-[#e0f2fe]">
                    <div className="absolute bottom-0 w-full h-1/3 bg-[#84cc16] rounded-t-[100%] scale-150"></div>
                    <div className="absolute top-4 left-4 bg-white w-8 h-8 rounded-full opacity-50"></div>
                    <div className="absolute top-8 right-8 bg-white w-12 h-6 rounded-full opacity-50"></div>
                </div>
              </div>

              <h3 className="font-bold text-xs">{item.title}</h3>
              <p className="text-[10px] text-gray-500 mb-1">{item.artist}</p>
              <p className="text-[#22c55e] font-bold text-xs mb-3">{item.price}</p>
              
              <div className="flex gap-2 mt-auto">
                <Link href="/product" className="flex-1 border border-black justify-center text-center text-[10px] py-1 font-bold hover:bg-gray-100 rounded-sm">Lihat Galeri</Link>
                <Link href="/checkout" className="flex-1 bg-[#463528] text-white text-[10px] justify-center text-center py-1 font-bold hover:bg-[#35261c] rounded-sm">Beli Sekarang</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-4 mb-8">
           <button className="text-2xl text-[#463528]">&larr;</button>
           <button className="w-8 h-8 bg-[#463528] text-white rounded-full flex items-center justify-center text-sm font-bold">1</button>
           <button className="w-8 h-8 text-gray-500 hover:bg-gray-100 rounded-full flex items-center justify-center text-sm">2</button>
           <button className="w-8 h-8 text-gray-500 hover:bg-gray-100 rounded-full flex items-center justify-center text-sm">3</button>
           <button className="text-2xl text-[#463528]">&rarr;</button>
        </div>

      </main>
      <Footer />
    </div>
  );
}