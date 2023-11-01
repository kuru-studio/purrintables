"use client";

import Organism from "@organism";

export default function Home() {
  return (
    <div>
      <Organism.Header />
      <div className="md:flex flex-col md:flex-row justify-center my-5 md:my-16"><Organism.Navigation /></div>
      <div className="container px-5 mx-auto mb-16"><Organism.Carousel /></div>
      <section>
        <Organism.Jumbotron title="Welcome to Purrintables!">
          <div className="space-y-3">
            <p className="leading-10">Purrintables is a small business based in the Philippines. Here you can support all sorts of our products ranging from <span className="font-bold text-[#df56c0]">prints</span> and <span className="font-bold text-[#df56c0]">stickers</span> to <span className="font-bold text-[#df56c0]">T-shirts</span> and <span className="font-bold text-[#df56c0]">Merch sets</span>.</p>
            <p className="leading-10">Please read our <span className="font-bold text-[#df56c0]">FAQ</span> pages before making a purchase!</p>
          </div>
        </Organism.Jumbotron>
        <div>products section</div>
      </section>
      <Organism.Footer />
    </div>
  )
}
