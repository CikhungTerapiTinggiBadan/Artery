"use client"; 
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = [
    { name: "Seni *(Air)", price: "Rp. 1.000.000.000" },
    { name: "Seni *(Air) Part II", price: "Rp. 10.000.000.000" },
    { name: "Seni *(Air) Part III", price: "Rp. 100.000.000.000" },
    { name: "Seni *(Air) Part IV", price: "Rp. 1.000.000.000.000" },
  ];

  return (
    <nav className="bg-[#463528] text-white py-5 px-8 sticky top-0 z-50 shadow-md relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="w-1/4">
           <Link href="/" className="text-2xl font-serif italic tracking-wider hover:text-gray-200 transition">
             Artsy
           </Link>
        </div>

        <div className="hidden md:flex justify-center w-2/4 space-x-8 text-[10px] font-bold uppercase tracking-widest text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/paintings" className="hover:text-white transition">Paintings</Link>
          <Link href="/sculptures" className="hover:text-white transition">Sculptures</Link>
          <Link href="/modern-art" className="hover:text-white transition">Modern Art</Link>
        </div>

        <div className="w-1/4 flex justify-end relative">
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)} 
            className="hover:text-gray-300 transition focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

          {isCartOpen && (
            <div className="absolute top-10 right-0 w-96 bg-white shadow-xl rounded-sm text-black z-50 border border-gray-200 p-6 flex flex-col">
               <h2 className="text-2xl font-bold mb-4 font-sans text-left">Keranjang</h2>
               
               <div className="bg-[#fbf8e8] border border-gray-200 p-4 mb-4 rounded-sm">
                  <h3 className="font-bold text-sm mb-4 border-b border-gray-300 pb-2">Detail Pesanan</h3>
                  <div className="space-y-3 text-xs">
                    {cartItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span>{item.name}</span>
                        <span className="font-mono">{item.price}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-gray-500 pt-2">
                        <span>Ongkir</span>
                        <span className="font-mono">Rp. 20.000</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between font-bold text-sm mt-4 pt-3 border-t border-black">
                     <span>Total</span>
                     <span className="font-mono">Rp. 9.999.999.999.999</span>
                  </div>
               </div>

               <Link href="/checkout" className="w-full">
                 <button className="w-full bg-[#463528] text-white py-3 rounded-sm font-bold text-sm hover:bg-[#35261c] transition">
                   Beli Sekarang
                 </button>
               </Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}