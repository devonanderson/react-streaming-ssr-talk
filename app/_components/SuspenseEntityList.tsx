/**
 * Fall back component for when the data is not yet available
 * @param gridSize {number} - The number of columns in the grid
 * @param count {number} - The number of items to render
 * @returns 
 */
export default function SuspenseEntityList({ gridSize, count }: { gridSize: number, count: number}) {
  return (
    <ul className={`grid grid-cols-${gridSize} gap-3`}>
      {Array.from({ length: count }).map((_, i) => (<div key={i} className="shimmer h-[96px] rounded-md"></div>))}
    </ul>
  )
}