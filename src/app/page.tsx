import Header from '../components/Header';
import Footer from '../components/Footer';
import Pattern from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="relative">
        <Pattern />
        <div>
          <div className="container mx-auto">this is a test</div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
