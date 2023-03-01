import { useBudget } from "../../hooks/useBudget";
import { currency } from "../../utils/monetary";
import { BudgetItem } from "./BudgetItem";
import { BudgetSubTitle } from "./BudgetSubTitle";

interface BudgetShowListTypeProps {
  title: string;
  totalReference: "in" | "out";
}

export function BudgetShowListType({
  title,
  totalReference,
}: BudgetShowListTypeProps) {
  const { budget, totals, getListByType } = useBudget();

  const returnColorByType = () => {
    if (totalReference === "in") return "text-green-300";
    if (totalReference === "out") return "text-red-300";
  };

  return (
    <div className={`w-full ${returnColorByType()}`}>
      <BudgetSubTitle>
        {title}: {currency(totals[totalReference])}
      </BudgetSubTitle>
      {!!budget.length &&
        getListByType(totalReference).map((item) => (
          <BudgetItem key={item.id} {...item} />
        ))}
    </div>
  );
}
