import { sendLogEvents } from '@/services/logEvent';
import downloadFile from '@/helpers/downloadFile';

export default async function boletoDownload(url, title = '', type = '') {
  sendLogEvents('Download Files', { description: 'boleto' });

  if (type == 'link') {
    return await LayersPortal('go', url);
  }
  return downloadFile(url, title);
}
