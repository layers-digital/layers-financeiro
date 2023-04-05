import Toast from './toast';

export default function copyToClipboard(value) {
  const el = document.createElement('textarea');

  el.value = value;

  document.body.appendChild(el);

  el.select();
  el.setSelectionRange(0, 99999); /* For mobile devices */

  navigator.clipboard.writeText(el.value);

  document.body.removeChild(el);

  Toast.open({ message: 'Código copiado com sucesso!' });
}
