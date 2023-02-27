export const currency = (value: string | number) =>
  value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

export const totalFromList = (list: { title: string; value: number }[]) =>
  list.reduce((a, b) => a + b.value, 0);
