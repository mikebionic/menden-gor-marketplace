import { ProductCard } from 'components/ProductCard';

export const ProductList = ({ data }: any) => {
  return (
    <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-x-8">
      {data.map((resource: any, id: number) => (
        <ProductCard key={id} data={resource} />
      ))}
    </div>
  );
};
