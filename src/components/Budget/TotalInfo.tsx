import { TotalInfoProps } from "../../interfaces/Budget";
import { currency } from "../../utils/monetary";

const bgColorMap: Record<string, string> = {
  success: "bg-green-700",
  danger: "bg-red-700",
  null: "bg-gray-400",
};

export function TotalInfo({
  bg = "null",
  title,
  value,
  clickFn = () => {},
}: TotalInfoProps) {
  return (
    <div
      className={`w-full flex justify-between p-2 text-white ${bgColorMap[bg]} text-xl rounded cursor-pointer duration-150 hover:shadow-md hover:animate-pulse`}
      onClick={clickFn}
    >
      <div>{title}</div>
      <div>{currency(value)}</div>
    </div>
  );
}
