<template>
  <div class="no-payables-title mb-2 lead--text text-center">
    <div class="no-payables-image mt-4">
      <img :src="kindError.imageUrl" :alt="kindError.title" width="268" height="208" />
    </div>
    <h2 class="no-payables-title mb-2 lead--text text-center">{{ kindError.title }}</h2>
    <span class="lead-light--text text-center">{{ kindError.description }}</span>
  </div>
</template>
<script>
import EmptyImage from '@/assets/empty-ilustra.svg';
import NoDataFilled from '@/assets/no-data-filled.svg';
import Alone from '@/assets/alone.svg';
import ErpProblem from '@/assets/erp-problem.svg';
import LayersError from '@/assets/layers-error.svg';

export default {
  name: 'ErrorPage',
  components: {
    //
  },
  props: {
    kind: {
      type: String,
      required: true,
    },
  },
  computed: {
    kindError() {
      if (this.kind === 'no-data') {
        return {
          title: 'Não há informações para exibir',
          description:
            'Para que os dados apareçam na Layers, é necessário que sejam cadastrados no seu sistema de gestão',
          imageUrl: NoDataFilled,
        };
      }
      if (this.kind === 'without-classmates') {
        return {
          title: 'Este usuário não possui alunos vinculados :(',
          description: 'Verifique os vínculos em seu sistema de gestão e tente novamente.',
          imageUrl: Alone,
        };
      }
      if (this.kind === 'erp-error') {
        return {
          title: 'O seu sistema de gestão não está retornando informações :(',
          description: 'Entre em contato com ele pelo seu canal de costume.',
          imageUrl: ErpProblem,
        };
      }
      if (this.kind === 'layers-error') {
        return {
          title: 'Parece que a Layers teve um problema :(',
          description: '',
          imageUrl: LayersError,
        };
      }
      return {
        title: 'Não há informações disponíveis :(',
        description: 'Entre em contato com sua instituição de ensino ou atualize a página',
        imageUrl: EmptyImage,
      };
    },
  },
};
</script>
<style scoped>
.no-payables-title {
  font-size: 16px;
  font-weight: 700;
  margin-top: 72px;
}

.no-payables-image {
  background-image: url('../assets/shape.svg');
  width: 100%;
  background-repeat: no-repeat;
  text-align: center;
  background-position: center;
  margin-bottom: -16px;
}
</style>
