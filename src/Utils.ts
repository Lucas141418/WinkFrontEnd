export const formaterCurrency = (numberToChange?: number) => {
  return numberToChange
    ? new Intl.NumberFormat("es-CR", {
        style: "currency",
        currency: "CRC",
      }).format(numberToChange)
    : "₡0";
};
