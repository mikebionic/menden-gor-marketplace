export const CategoryList = (props: any) => {
  return (
    <div>
      <div className="pl-3">
        <h1 className="py-2 mb-2 text-base font-semibold text-black border-b border-gray-200 dark:border-darkTextWhiteColor dark:text-darkTextWhiteColor">
          Categories
        </h1>
      </div>
      <div className="pl-1 overflow-auto h-[400px] xl:h-full max-h-[80%] relative">
        {props.children}
      </div>
    </div>
  );
};
