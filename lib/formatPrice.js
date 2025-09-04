export const formatearDinero = (cantidad) => {
  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });
  return formatter.format(cantidad);
};
