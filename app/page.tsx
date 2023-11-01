"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import Organism from "@organism";

export default function Home() {
  return (
    <div>
      <Organism.Header />
      <div className="md:flex flex-col md:flex-row justify-center my-5 md:my-16"><Organism.Navigation /></div>
      <section className="container mx-auto">
        <div className="flex items-center my-40">
          <div className="flex-1">
            <div className="text-[#e898a3] font-bold text-[60px] uppercase">Coming Soon</div>
            <div className="text-[#939393] my-8 mr-20 text-[20px]">
              <div>Our website is still under construction.</div>
              <div>For more updates, follow us on our social media platforms.</div>
            </div>
            <div className="flex space-x-4 text-[#a6a6a6]">
              <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
              <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
            </div>
          </div>
          <div className="bg-gray-200 w-[1000px] aspect-video rounded-xl flex shadow-xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/HPf6TU0AXp8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </section>
      <Organism.Footer />
    </div>
  )
}
