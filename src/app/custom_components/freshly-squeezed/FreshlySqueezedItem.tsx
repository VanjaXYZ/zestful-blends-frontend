const FreshlySqueezedItem = ({
  productName,
  icon,
}: {
  productName: string;
  icon: JSX.Element;
}) => {
  return (
    <div className="flex flex-col items-center w-full border-r-2 border-dashed gap-4 last:border-none">
      {icon}
      <p className="text-center font-semibold text-white">{productName}</p>
    </div>
  );
};

export default FreshlySqueezedItem;
