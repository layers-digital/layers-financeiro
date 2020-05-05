<template>
  <div class="ls-container p-3 grey-10" style="min-height: 100%; overflow: auto !important;">
    <!-- Data provider label -->
    <div class="ls-row ls-no-gutters ls-align-items-center mb-2">
      <!-- <div> -->
      <img :src="group.icon" height="24" width="24" class="app-icon-radius mr-2"/>
      <!-- </div> -->
      <span class="grey-70--text" style="font-size: 12px;">
        Dados Fornecido pela Totvs há <b>3 dias</b>
      </span>
    </div>
    <!-- Group description -->
    <div class="mb-4" style="font-size: 16px;">
      <!-- IMPROVE TRANSITIONS -->
      <TransitionExpand>
        <div v-if="descriptionExpanded" id="description" v-html="compiledDescriptionMarkdown"></div>
      </TransitionExpand>
      <transition name="slowfade"
        mode="out-in">
        <div v-if="!descriptionExpanded" id="description" v-html="compiledDescriptionMarkdown" class="ellipsis-2"></div>
      </transition>
      <button v-if="showReadMoreButton"
        @click="descriptionExpanded = !descriptionExpanded"
        class="show-more-btn">
        ver mais
      </button>
    </div>
    <!-- Critical payables section -->
    <div v-if="criticalPayablesByGroup.length" class="mb-4">
      <div class="label danger--text mb-2">
        {{criticalPayablesByGroup.length}} cobranças precisam de atenção
      </div>
      <PayableDetailCard
        class="mb-2"
        style="cursor: pointer;"
        v-for="payable in criticalPayablesByGroup"
        :key="payable.id"
        :payable="payable"
        @click.native="goToDetails(payable)"/>
    </div>
    <!-- No critical payables placeholder -->
    <NoCriticalPayablesCard v-else class="mb-4"/>
    <!-- General payables section -->
    <div v-if="payablesByGroup.length" class="label lead-light--text mb-2">
      Demais cobranças
    </div>
    <PayableDetailCard
      class="mb-2"
      v-for="payable in payablesByGroup"
      :key="payable.id"
      :payable="payable"
      @click.native="goToDetails(payable)"/>
  </div>
</template>

<script>
import NoCriticalPayablesCard from '../components/NoCriticalPayablesCard'
import PayableDetailCard from '../components/PayableDetailCard'
import TransitionExpand from '../components/TransitionExpand'
import Marked from 'marked'
import DOMPurify from 'dompurify'

export default {
  name: 'PayablesGroup',
  components: {
    NoCriticalPayablesCard,
    PayableDetailCard,
    TransitionExpand,
  },
  props: {
    groupId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showReadMoreButton: false,
      descriptionExpanded: false,
    }
  },
  mounted () {
    let element = document.getElementById("description")

    if (element.offsetHeight < element.scrollHeight ||
      element.offsetWidth < element.scrollWidth) {
      this.showReadMoreButton = true
    } else {
      this.showReadMoreButton = false
    }
  },
  computed: {
    compiledDescriptionMarkdown() {
      return DOMPurify.sanitize(Marked(this.group.description), {FORBID_TAGS: ['style', 'script', 'h1', 'h2']})
    },

    group() {
      return this.$store.getters['payables/getGroup'](this.groupId)
    },

    payablesByGroup() {
      return this.$store.getters['payables/getPayablesByGroup'](this.groupId)
    },

    criticalPayablesByGroup() {
      return this.$store.getters['payables/getCriticalPayablesByGroup'](this.groupId)
    }
  },
  methods: {
    goToDetails(payable) {
      this.$router.push({name: 'payable.detail', params: {payableId: payable.id, payable: payable}})
    }
  }
}
</script>

<style scoped>
.label {
  font-size: 16px;
  font-weight: 600;
}

.show-more-btn {
  background:none;
  border:none;
  font-size: 16px;
  font-weight: 700;
  color: var(--link);
  padding: 1px 1px;
  cursor: pointer;
}
</style>
