import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <header className="bg-gray-100 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <Image src="/logo.png" alt="SI-ITIK Logo" width={100} height={50} />
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link href="#" className="text-gray-800 hover:text-gray-600 font-medium transition duration-300">
            Tentang Kami
          </Link>
          <Link href="#" className="text-gray-800 hover:text-gray-600 font-medium transition duration-300">
            Fitur Utama
          </Link>
          <Link href="#" className="text-gray-800 hover:text-gray-600 font-medium transition duration-300">
            Testimoni
          </Link>
          <Link href="#" className="text-gray-800 hover:text-gray-600 font-medium transition duration-300">
            Cara Kerja
          </Link>
          <Link href="#" className="text-[#D05805] hover:text-orange-600 font-medium transition duration-300">
            Unduh Aplikasi Seluler
          </Link>
        </nav>

        {/* Login Button */}
        <div>
          <Link
            href="#"
            className="border border-[#D05805] text-[#D05805] hover:bg-[#D05805] hover:text-white transition duration-300 px-4 py-2 rounded-lg font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}
