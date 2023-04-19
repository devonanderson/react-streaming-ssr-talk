import EntityCard from './EntityCard';

/**
 * A list of Spotify entities
 * @param dataPromise - Promise that resolves to an array of entities 
 * @returns {Promise<JSX.Element>}
 */
export default async function EntityList({ dataPromise }: { dataPromise: Promise<Array<any>> }): Promise<JSX.Element> {
  const entities = await dataPromise;
  return (
    <ul className="grid grid-cols-3 gap-3">
      {entities.map((entity: any) => <EntityCard key={entity.id} entity={entity} />)}
    </ul>
  )
}