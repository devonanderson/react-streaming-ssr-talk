export default function SuspenseEntityList({ gridSize, count }: { gridSize: number, count: number}) {
  return (
    <ul className={`grid grid-cols-${gridSize} gap-3`}>
      {Array.from({ length: count }).map((_, i) => (<div key={i} className="shimmer h-[96px] rounded-md"></div>))}
    </ul>
  )
}