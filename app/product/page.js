import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Link from 'next/link';

export default function ProductDetail() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="flex flex-col items-center">
            <div className="bg-[#463528] p-3 w-full shadow-lg">
              <div className="bg-blue-100 w-full aspect-[4/3] relative overflow-hidden border-4 border-white">
                 <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#6b8e23]"></div> 
                 <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#556b2f] rounded-t-[50%] translate-y-4 scale-110"></div>
                 <div className="absolute top-10 left-10 w-16 h-10 bg-white rounded-full opacity-80 blur-sm"></div> 
              </div>
            </div>
            
            <div className="bg-[#463528] mt-4 px-4 py-1 rounded-full flex space-x-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          <div className="bg-[#fbf8e8] border-2 border-[#dcd6c3] p-8 rounded-sm flex flex-col h-fit">
            <h1 className="text-xl font-bold text-black mb-1">Seni (Air)</h1>
            <p className="text-xs text-gray-500 mb-4">Upload by Fulan</p>
            
            <div className="border-b border-black mb-4 w-full"></div>

            <h2 className="text-3xl font-bold text-[#22c55e] mb-6">Rp. 1.000.000.000</h2>

            <div className="text-xs text-gray-700 space-y-4 mb-8 leading-relaxed">
              <h3 className="font-bold uppercase">Detail</h3>
              <p>
                Lukisan ini dibuat dengan sepenuh hati serta jiwa raga
                yang kuat. Tahan air, tahan api, maupun tahan banting.
              </p>
              <p>
                1. Mengapung: <br/>
                Ini tinggal di taro di air ngambang ni soalnya kan dari
                plastik bos. Tahan karat maupun lumut dijamin.
              </p>
              <p>
                2. Memberikan ketenangan: <br/>
                Bener bapak/ibu kalau liat lukisan ini pasti tenang karena
                harganya mahal bener.
              </p>
              <p>
                3. Gelombang: <br/>
                Aduh lupa lagi deskripsinya pokoknya bagus lah
                beli mah beli aja duitnya ada juga.
              </p>
              <p>
                Jual rugi sebenernya karena dulu belinya pake perasaan
                bukan pake duit. Jangan ditawar ya gan soalnya butuh
                duit buat beli seblak depan kantor. Pengen
                kenyang, Terimakasih buat bapak ibu sekalian.
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-xs mb-2 text-black">
                About <Link href="/artist" className="text-orange-400 cursor-pointer hover:underline font-bold">Fulan Al Fulan</Link>
              </p>
              <Link href="/checkout" className="w-full">
                <button className="w-full bg-[#463528] text-white py-3 font-bold text-sm rounded-md hover:bg-[#35261c] transition shadow-lg">
                  Beli Sekarang
                </button>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer text="Kontak Footer" />
    </div>
  );
}