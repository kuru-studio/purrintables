export default function VideoContainer() {
  return (
    <div className="bg-gray-200 w-[1000px] aspect-video rounded-xl flex shadow-xl overflow-hidden">
      <iframe src="https://www.youtube.com/embed/HPf6TU0AXp8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}
