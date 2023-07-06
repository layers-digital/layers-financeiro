export default function currencyFormatter(value, currency, locale) {
  if (!value && value !== 0) {
    return '';
  }

  const realValue = value / 100;
  if (!currency) {
    currency = 'BRL';
  }
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(realValue);
}
