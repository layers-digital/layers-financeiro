import Vue from 'vue';
import Modal from '@/components/Modals/index.vue';

export default function openModal({ component, props }) {
  const ModalComponent = Vue.extend(Modal);

  const instance = new ModalComponent({
    propsData: {
      component,
      props,
      onClose: () => {
        document.body.querySelector('#app').removeChild(instance.$el);
      },
    },
  });

  instance.$mount();

  document.body.querySelector('#app').appendChild(instance.$el);
}
