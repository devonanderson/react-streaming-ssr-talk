import EntityCard from './EntityCard';

export default async function EntityList({ dataPromise }: { dataPromise: Promise<Array<any>> }): Promise<JSX.Element> {
  const entities = await dataPromise;
  return (
    <ul className="grid grid-cols-3 gap-3">
      {entities.map((entity: any) => <EntityCard key={entity.id} entity={entity} />)}
    </ul>
  )
}