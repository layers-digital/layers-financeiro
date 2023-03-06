export default function currencyFormatter(value, currency, locale) {
  const realValue = value / 100;
  if (!currency) {
    currency = 'BRL';
  }
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(realValue);
}
