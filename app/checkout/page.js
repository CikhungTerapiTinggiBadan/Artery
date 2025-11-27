import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl font-sans">
        <h1 className="text-3xl font-bold font-serif mb-6 text-center md:text-left">Checkout</h1>

        <section className="bg-[#fbf8e8] border border-gray-300 p-6 mb-6 rounded-sm shadow-sm">
          <h2 className="font-bold mb-4 text-sm uppercase tracking-wide">Detail Pengiriman</h2>
          
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-4">
               <div className="flex flex-col">
                 <label className="mb-1 ml-1 text-gray-500">Nama Depan</label>
                 <input type="text" className="bg-[#463528] text-white px-3 py-2 rounded-sm outline-none border-none" />
               </div>
               <div className="flex flex-col">
                 <label className="mb-1 ml-1 text-gray-500">Email</label>
                 <input type="email" className="bg-[#463528] text-white px-3 py-2 rounded-sm outline-none border-none" />
               </div>
            </div>

            <div className="flex flex-col">
               <label className="mb-1 ml-1 text-gray-500">Alamat Lengkap</label>
               <input type="text" className="bg-[#463528] text-white px-3 py-2 rounded-sm outline-none border-none" />
            </div>

            <div className="flex flex-col">
               <label className="mb-1 ml-1 text-gray-500">Detail Alamat (Cont. Depan Masjid)</label>
               <input type="text" className="bg-[#463528] text-white px-3 py-2 rounded-sm outline-none border-none" />
            </div>

            <div className="flex flex-col">
               <label className="mb-1 ml-1 text-gray-500">Nomor Telepon</label>
               <input type="tel" className="bg-[#463528] text-white px-3 py-2 rounded-sm outline-none border-none" />
            </div>
          </div>
        </section>

        <section className="bg-[#fbf8e8] border border-gray-300 p-6 mb-6 rounded-sm shadow-sm">
           <h2 className="font-bold mb-4 text-sm uppercase tracking-wide">Detail Pembayaran</h2>
           
           <div className="space-y-3">
              {['Qris', 'Mobile Banking', 'COD'].map((method) => (
                <label key={method} className="flex items-center cursor-pointer group">
                  <input type="radio" name="payment" className="mr-3 accent-[#463528] h-4 w-4" />
                  <div className="flex-grow border border-gray-400 px-4 py-3 rounded-sm bg-[#ece8d5] group-hover:bg-[#e0dbc5] transition font-bold text-sm">
                    {method}
                  </div>
                </label>
              ))}
           </div>
        </section>

        <section className="bg-[#fbf8e8] border border-gray-300 p-6 mb-8 rounded-sm shadow-sm text-xs">
           <h2 className="font-bold mb-4 text-sm uppercase tracking-wide">Detail Pesanan</h2>
           
           <div className="space-y-2 border-b border-gray-300 pb-4 mb-4">
              <div className="flex justify-between">
                <span>Seni *(Air)</span>
                <span>Rp. 1.000.000.000</span>
              </div>
              <div className="flex justify-between">
                <span>Seni *(Air) Part II</span>
                <span>Rp. 10.000.000.000</span>
              </div>
              <div className="flex justify-between">
                <span>Seni *(Air) Part III</span>
                <span>Rp. 100.000.000.000</span>
              </div>
              <div className="flex justify-between">
                <span>Ongkir</span>
                <span>Rp. 20.000</span>
              </div>
           </div>

           <div className="flex justify-between font-bold text-sm">
              <span>Total</span>
              <span>Rp. 999.999.999.999</span>
           </div>
        </section>

        <div className="flex justify-center">
            <button className="bg-[#463528] text-white px-8 py-3 rounded-sm font-bold shadow-lg hover:bg-[#35261c] transition">
                Beli Sekarang
            </button>
        </div>

      </main>
      <Footer />
    </div>
  );
}