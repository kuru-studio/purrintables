export default function VideoContainer() {
  return (
    <div className="bg-gray-200 w-[1000px] aspect-video rounded-xl flex shadow-xl overflow-hidden">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/HPf6TU0AXp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}
