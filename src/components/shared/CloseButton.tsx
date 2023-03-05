import { AiOutlineCloseCircle } from "react-icons/ai";

export function CloseButton({ clickFn = () => {} }: any) {
  return (
    <button
      className="text-red-400 text-2xl hover:text-red-600 rounded-full duration-200"
      onClick={clickFn}
    >
      <AiOutlineCloseCircle />
    </button>
  );
}
