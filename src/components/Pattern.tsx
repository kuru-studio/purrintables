export default function Pattern({ children }: any) {
  return (
    <div className="relative">
      <div className="flex absolute inset-0 w-full h-full z-[-1]">
        <div className="bg-white flex-1"></div>
        <div className="diagonal-slash w-40"></div>
        <div className="bg-[#f8efe6] flex-1"></div>
      </div>
      <div>
        <div className="min-h-screen">{ children }</div>
      </div>
    </div>
  )
}
