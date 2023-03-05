import { BudgetProps } from "../../interfaces/Budget";
import { currency } from "../../utils/monetary";

const ListItem = ({ lineValues }: { lineValues: any[] }) => (
  <div className="p-1 flex justify-between">
    {lineValues.map((value) => (
      <div>{value}</div>
    ))}
  </div>
);

export function BudgetList({ list }: { list: BudgetProps[] }) {
  return (
    <div className="flex justify-between gap-4">
      <div className="w-full stripped">
        {list.map((item) => (
          <ListItem
            key={item.id}
            lineValues={[item.title, currency(item.value)]}
          />
        ))}
      </div>
    </div>
  );
}
