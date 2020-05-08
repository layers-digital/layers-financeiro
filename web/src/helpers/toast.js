
import Vue from 'vue';
import Template from '@/components/Toast';
let queue = [];
let showing = false;
export { Template };
export default {
  open(params) {
    if (!params.message) return console.error('[toast] no message supplied');
    if (!params.type) params.type = 'info';
    let propsData = {
      message: params.message,
      type: params.type,
    };

    let defaultOptions = {
      color: params.type || 'info',
      position: params.position || 'top',
      closeable: true,
      action: params.action,
      timeout: (params.timeout >= 0 ? params.timeout : 3000),
      // autoHeight: true,
      // multiLine: !!params.title || params.text.length > 80,
    };
    params.options = Object.assign(defaultOptions, params.options);
    propsData.options = params.options;

    // push into queue
    queue.push(propsData);
    processQueue();
  },
};
function processQueue() {
  if (queue.length < 1) return;
  if (showing) return;
  let nextInLine = queue[0];
  spawn(nextInLine);
  showing = true;
  queue.shift();
}
function spawn(propsData) {
  const ToastComponent = Vue.extend(Template);
  return new ToastComponent({
    el: document.createElement('div'),
    propsData,
    onClose: function() {
      showing = false;
      processQueue();
    },
  });
}