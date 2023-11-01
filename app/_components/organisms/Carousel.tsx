import { Carousel as AntCarousel } from 'antd';
import Image from 'next/image'
import Carousel1 from '../../_assets/carousel/1.jpg'
import Carousel2 from '../../_assets/carousel/2.jpg'
import Carousel3 from '../../_assets/carousel/3.jpg'

const Carousel = () => {
  return (
    <div className="rounded-[50px] overflow-hidden">
      <AntCarousel autoplay>
        <div className="aspect-[2/1] bg-cover">
          <Image
            className="w-full h-full"
            src={Carousel1}
            alt="Carousel 1"
          />
        </div>
        <div className="aspect-[2/1] bg-cover">
          <Image
            className="w-full h-full"
            src={Carousel2}
            alt="Carousel 2"
          />
        </div>
        <div className="aspect-[2/1] bg-cover">
          <Image
            className="w-full h-full"
            src={Carousel3}
            alt="Carousel 3"
          />
        </div>
      </AntCarousel>
    </div>
  );
};

export default Carousel;
