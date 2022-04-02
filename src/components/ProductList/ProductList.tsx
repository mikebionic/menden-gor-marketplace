import { ProductCard } from 'components/ProductCard';

export const ProductList = ({ data }: any) => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-6 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 xl:gap-x-8 place-items-center">
      {data.map((resource: any, idx: number) => (
        <ProductCard key={idx} data={resource} />
      ))}
    </div>
  );
};
