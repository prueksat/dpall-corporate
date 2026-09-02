import Link from 'next/link';

export default function CorporateHome() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#2c3e50]">DP ALL</div>
          <nav className="space-x-8 hidden md:block">
            <Link href="/" className="text-gray-600 hover:text-[#3498db] transition">หน้าแรก</Link>
            <Link href="#about" className="text-gray-600 hover:text-[#3498db] transition">เกี่ยวกับเรา</Link>
            <Link href="#contact" className="text-gray-600 hover:text-[#3498db] transition">ติดต่อเรา</Link>
          </nav>
          <a 
            href="[https://shop.dpall.co.th](https://shop.dpall.co.th)" 
            className="bg-[#e67e22] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#d35400] transition shadow-md"
          >
            ดูสินค้า / Shop Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            บริษัท ดีพี ออล ดิลิเชียสโปรดักส์ออล จำกัด
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            ผู้เชี่ยวชาญด้านการผลิตและจำหน่ายผลิตภัณฑ์อาหารปรุงสำเร็จ และผลิตภัณฑ์ขนมคุณภาพสูง ที่ตอบโจทย์ทุกความอร่อย
          </p>
          <a 
            href="[https://shop.dpall.co.th](https://shop.dpall.co.th)" 
            className="bg-[#3498db] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#2980b9] transition shadow-lg inline-block"
          >
            เลือกซื้อผลิตภัณฑ์ของเรา
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">ข้อมูลบริษัท</h2>
            <div className="w-24 h-1 bg-[#3498db] mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-600">
              <p><strong>ชื่อภาษาอังกฤษ:</strong> DP ALL DELICIOUSPRODUCTALL CO., LTD.</p>
              <p><strong>เลขทะเบียน:</strong> 0205562023278</p>
              <p><strong>วันที่จดทะเบียน:</strong> 25 มิถุนายน 2562</p>
              <p><strong>ทุนจดทะเบียน:</strong> 1,000,000 บาท</p>
              <p><strong>ประเภทธุรกิจ:</strong> ประกอบกิจการผลิต และจำหน่ายผลิตภัณฑ์อาหารปรุงสำเร็จ ผลิตภัณฑ์อาหารอื่นๆ และผลิตภัณฑ์ขนม</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl shadow-inner">
              <h3 className="text-xl font-bold mb-4 text-[#2c3e50]">วิสัยทัศน์ของเรา</h3>
              <p className="text-gray-600 leading-relaxed">
                เรามุ่งมั่นที่จะเป็นผู้นำด้านผลิตภัณฑ์อาหารที่ได้มาตรฐาน ปลอดภัย และสร้างความประทับใจในทุกคำที่ได้สัมผัส
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-white text-lg font-bold mb-4">ติดต่อเรา</h4>
            <p>602/10 ถนนทางรถไฟตะวันตก</p>
            <p>ตำบลพระปฐมเจดีย์ อำเภอเมืองนครปฐม</p>
            <p>จังหวัดนครปฐม 73000</p>
          </div>
          <div className="md:text-right">
            <h4 className="text-white text-lg font-bold mb-4">DP ALL</h4>
            <p>&copy; 2026 DP ALL DELICIOUSPRODUCTALL CO., LTD.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}