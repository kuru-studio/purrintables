import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="relative">
        <div className="flex absolute inset-0 w-full h-full z-[-1]">
          <div className="bg-white flex-1"></div>
          <div className="diagonal-slash w-40"></div>
          <div className="bg-[#f8efe6] flex-1"></div>
        </div>
        <div>
          <div className="container mx-auto">this is a test</div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
