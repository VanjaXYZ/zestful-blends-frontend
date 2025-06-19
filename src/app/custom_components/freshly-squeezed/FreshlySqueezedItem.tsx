const FreshlySqueezedItem = ({
  productName,
  icon,
}: {
  productName: string;
  icon: JSX.Element;
}) => {
  return (
    <div className="flex flex-col items-center lg:border-dashed lg:border-r-2 lg:px-6 lg:gap-y-2 last:border-none">
      {icon}
      <span className="font-semibold text-white text-sm">{productName}</span>
    </div>
  );
};

export default FreshlySqueezedItem;
