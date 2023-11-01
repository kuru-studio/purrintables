import LogoImage from '../../_assets/logo.png'
import Image from 'next/image'

const Logo = ({ width }: any) => {
  return (
    <Image
      src={LogoImage}
      width={width}
      alt='Purrintables'
    />
  );
}

export default Logo;
