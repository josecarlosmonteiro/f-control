export interface MonthBudgetProps {
  totalIncomes: number;
  totalExpenses: number;
  incomesList: BudgetRegisterProps[];
  expensesList: BudgetRegisterProps[];
}

export interface BudgetRegisterProps {
  title: string;
  value: number;
}

export interface BudgetListProps {
  list: BudgetRegisterProps[];
  isIncome?: boolean;
}
