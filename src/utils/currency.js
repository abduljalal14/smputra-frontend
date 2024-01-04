export const formatPrice = (amount) => {
    const locale = "id-ID";
    const currency = "IDR";
  
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  export default formatPrice;
  