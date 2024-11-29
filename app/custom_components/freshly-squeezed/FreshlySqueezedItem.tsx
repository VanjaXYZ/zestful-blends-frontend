const FreshlySqueezedItem = ({
  productName,
  icon,
}: {
  productName: string;
  icon: JSX.Element;
}) => {
  return (
    <div className="flex flex-col items-center md:border-dashed md:border-r-2 md:px-6 md:gap-y-2 last:border-none">
      {icon}
      <span className="font-semibold text-white text-sm">{productName}</span>
    </div>
  );
};

export default FreshlySqueezedItem;
