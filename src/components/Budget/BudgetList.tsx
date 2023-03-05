import { BudgetItemProps } from "../../interfaces/Budget";
import { currency } from "../../utils/monetary";

const ListItem = ({ lineValues }: { lineValues: any[] }) => (
  <div className="p-1 flex justify-between">
    {lineValues.map((value) => (
      <div>{value}</div>
    ))}
  </div>
);

export function BudgetList({ list }: { list: BudgetItemProps[] }) {
  console.log("🚀 ~ file: BudgetList.tsx:13 ~ BudgetList ~ list:", list);

  return (
    <div className="flex pb-2 justify-between gap-4">
      <div className="w-full stripped max-h-40 overflow-auto">
        {list.map((item) => (
          <ListItem
            key={item.id + "-key"}
            lineValues={[item.title, currency(item.value)]}
          />
        ))}
      </div>
    </div>
  );
}
