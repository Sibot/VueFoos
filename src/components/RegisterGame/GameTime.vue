<template>
  <div>
    <h4 class="md-subheading">Enter time of play</h4>
    <v-date-picker first-day-of-week="1" :allowed-dates="enabledDatesFn"></v-date-picker>
    <v-btn @click="saveFn" :disabled="disabledSaveFn">Save game</v-btn>
  </div>
</template>
<script>
export default {
  name: 'GameTime',
  props: ['selectedDate', 'saveFn', 'disabledSaveFn', 'enabledDatesFn']
}
</script>
