import Header from '../components/Header';
import Pattern from '../components/Pattern';
import VideoContainer from '../components/VideoContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <Pattern>
      <Header />
      <section className="container mx-auto">
        <div className="flex items-center my-40">
          <div className="flex-1">
            <div className="text-[#e898a3]">Coming Soon</div>
            <div className="text-[#939393]">Our website is still under construction. For more updates, follow us on our social media platforms.</div>
            <div className="flex space-x-4 text-[#a6a6a6]">
              <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
              <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
            </div>
          </div>
          <VideoContainer />
        </div>
      </section>
    </Pattern>
  )
}
