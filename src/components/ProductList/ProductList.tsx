import { ProductCard } from 'components/ProductCard';

interface IPropsProductList {
  gridClassName?: string;
  data?: any;
}

export const ProductList: React.FC<IPropsProductList> = ({
  data,
  gridClassName = 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5',
}) => {
  return (
    <div
      className={`grid gap-8 mt-6 gap-x-6 ${gridClassName}  lg:gap-4 xl:gap-x-8 place-items-center`}
    >
      {data.map((resource: any, idx: number) => (
        <ProductCard key={idx} data={resource} />
      ))}
    </div>
  );
};
