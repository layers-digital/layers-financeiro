<template>
  <div class="view-content">
    <img src="@/assets/user-has-no-student.svg" alt="img" />
    <h3 class="view-title">{{ title }}</h3>
    <span class="view-message">
      {{ message }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'ViewErrorMessage',
  props: {
    img: {
      type: String,
      default: 'user-has-no-student.svg',
    },
    title: {
      type: String,
      default: 'Não há informações disponíveis :(',
    },
    message: {
      type: String,
      default: 'Você não tem vínculo com nenhum aluno. Entre em contato com sua instituição de ensino.',
    },
  },
};
</script>
<style scoped>
.view-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
}
.view-title {
  font-size: 18px;
  color: #232b34;
  font-weight: 700;
  margin: 25px 0px 0px 0px;
}
.view-message {
  text-align: center;
  margin: 6px 2px;
  font-size: 16px;
  color: #666;
  width: 300px;
}
</style>
