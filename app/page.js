import Navbar from './components/navbar';
import Footer from './components/footer';
import Link from 'next/link';

const paintings = [
  { id: 1, title: "Seni (Air)", price: "Rp. 1.000.000.000" },
  { id: 2, title: "Seni (Tanah)", price: "Rp. 1.500.000.000" },
  { id: 3, title: "Seni (Api)", price: "Rp. 1.500.000.000" },
];

const sculptures = [
  { id: 4, title: "Patung Sesar Maulana", price: "Rp. 10.000" },
  { id: 5, title: "Pahatan Bekas Cobek", price: "Rp. 1" },
  { id: 6, title: "100% Scam Jangan Beli", price: "Rp. 10.000.000.000" },
];

const modernArt = [
  { id: 7, title: "Pisang Ditempel Di Lantai", price: "Rp. 1.000.000.000.000" },
  { id: 8, title: "Atraksi Topeng Monyet", price: "Gratis" },
  { id: 9, title: "Atraksi Topeng Kiting", price: "Rp. 1.500.000" },
];

const ProductCard = ({ item }) => (
  <div className="bg-white p-4 shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition duration-300 rounded-2xl">
    <div className="w-full aspect-[4/3] bg-[#e0f2fe] mb-4 relative overflow-hidden border border-gray-100">
      <div className="absolute top-4 left-6 w-8 h-8 bg-white rounded-full opacity-60 blur-[1px]"></div>
      <div className="absolute top-6 right-10 w-12 h-8 bg-white rounded-full opacity-60 blur-[1px]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#a3e635] rounded-t-[100%] transform scale-x-150 translate-y-4 opacity-80"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#65a30d] rounded-t-[50%] transform scale-110 translate-y-2"></div>
    </div>

    <h3 className="font-bold text-sm text-gray-900 mb-0.5">{item.title}</h3>
    <p className="text-[10px] text-gray-400 mb-3 uppercase tracking-wide">Fulan Fulan</p>
    
    <p className="text-[#22c55e] font-bold text-xs mb-4">{item.price}</p>
    
    <div className="w-full mt-auto space-y-2">
        <Link href="/product" className="block text-center text-[10px] font-bold text-gray-500 hover:text-black mb-2">
            Lihat Detail
        </Link>
        <button className="w-full bg-[#463528] text-white py-2 text-[10px] font-bold uppercase tracking-wider hover:bg-[#2d221a] transition rounded-sm">
            Beli Sekarang
        </button>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <section className="bg-[#fff9c4] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{
                 backgroundImage: 'radial-gradient(#463528 1.5px, transparent 1.5px)', 
                 backgroundSize: '24px 24px'
             }}>
        </div>
        
        <div className="container mx-auto flex justify-center items-center relative z-10 rounded-sm h-100">
          <div className="bg-[#463528] text-white px-16 py-10 shadow-2xl transform -rotate-1 rounded-xl">
            <h1 className="text-5xl font-bold tracking-[0.2em] uppercase font-sans">PROMO</h1>
          </div>
        </div>
      </section>

      <section id="paintings" className="py-20 container mx-auto px-4 text-center bg-white text-black">
        <h2 className="text-2xl font-bold mb-2 text-[#463528]">Paintings</h2>
        <p className="text-[10px] md:text-xs text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
          Tampilkan seluruh lukisan yang sangat sangat epik dan free pokoknya <br className="hidden md:block"/>
          gaess ayo diborong yang beli 10 dapet penjualnya
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {paintings.map((item) => <ProductCard key={item.id} item={item} />)}
        </div>
          <div className="pt-10">
            <Link href="/paintings" className="mt-10 text-[10px] font-bold border-b-2 border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition">
              Lihat Selengkapnya
            </Link>
          </div>
      </section>

      <section id="sculptures" className="bg-[#fbf8e8] py-20 text-center border-t border-b border-gray-100 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-[#463528]">Sculptures</h2>
          <p className="text-[10px] md:text-xs text-gray-500 mb-10 leading-relaxed">
            Jual Patung, Jual Berhala, Jual semua pokoke jos josssssss mantepp <br className="hidden md:block"/>
            hahahahahahahahahah
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sculptures.map((item) => <ProductCard key={item.id} item={item} />)}
          </div>
          <div className="pt-10">
            <Link href="/sculptures" className="mt-10 text-[10px] font-bold border-b-2 border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition">
              Lihat Selengkapnya
            </Link>
          </div>
        </div>
      </section>

      <section id="modern-art" className="py-20 container mx-auto px-4 text-center bg-white text-black">
        <h2 className="text-2xl font-bold mb-2 text-[#463528]">Modern Art</h2>
        <p className="text-[10px] md:text-xs text-gray-500 mb-10 leading-relaxed">
          Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br className="hidden md:block"/>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {modernArt.map((item) => <ProductCard key={item.id} item={item} />)}
        </div>
        <div className="pt-10">
          <Link href="/modern-art" className="mt-10 text-[10px] font-bold border-b-2 border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition">
              Lihat Selengkapnya
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}