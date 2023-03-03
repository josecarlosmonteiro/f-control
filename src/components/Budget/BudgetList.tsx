import { BudgetProps } from "../../interfaces/Budget";
import { filterByType } from "../../utils/lists";
import { BudgetListItem } from "./BudgetListItem";

export function BudgetList({ list }: { list: BudgetProps[] }) {
  return (
    <div className="flex justify-between gap-4">
      <div className="w-full text-green-600">
        {!!list.length &&
          filterByType(list, "in").map((item) => (
            <BudgetListItem key={item.id} {...item} />
          ))}
      </div>
      <div className="w-full text-red-500">
        {!!list.length &&
          filterByType(list, "out").map((item) => (
            <BudgetListItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
}
