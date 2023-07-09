import Logo from '../assets/logo.png'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <nav className="text-white">
        <div className="container mx-auto flex p-2 items-center">
          <div className="mr-auto">
            <Image src={Logo} width={150} alt='Purrintables'/>
          </div>
          <div>right side</div>
        </div>
      </nav>
    </header>
  )
}
