export function BudgetComparation(props: any) {
  const { amount, revenues } = props;

  return (
    <>
      {!!amount && (
        <div className="h-2 my-3 flex items-center bg-red-700 rounded">
          <div
            style={{
              width: `${Math.round((revenues / amount) * 100)}%`,
            }}
            className="h-full bg-green-600 rounded duration-1000"
          ></div>
        </div>
      )}
    </>
  );
}
