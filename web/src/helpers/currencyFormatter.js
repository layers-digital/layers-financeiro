export default function currencyFormatter(value, currency, locale) {
  const integerValue = value / 100;
  if (!currency) {
    currency = 'BRL';
  }
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(integerValue);
}
