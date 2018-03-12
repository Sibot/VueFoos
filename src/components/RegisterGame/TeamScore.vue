<template>
  <div>
      <h4>Enter score</h4>
      <div
        v-for="team in teams"
        :key="team.id"
        @click="setWinner(team)"
        v-bind:class="{'winning-team': team.isWinner, 'losing-team': !team.isWinner}">
        <div>
            <h4 class="md-subheading">Team {{team.id}}</h4>
            <!-- <v-radio name="isWinner" :value="true" v-model="team.isWinner"></v-radio> -->
            <div v-for="player in team.players" :key="player.id">
              {{player.name}}
            </div>
            <v-text-field
              name="input-1"
              label="Team score"
              id="teamScore"
              v-model="team.score"
            ></v-text-field>
        </div>
      </div>
      <v-btn color="primary" @click.native="updateStep">Continue</v-btn>
  </div>
</template>
<script>
export default {
  name: 'TeamScore',
  props: ['teams', 'step'],
  methods: {
    updateStep: function () {
      this.$emit('update:step', 4)
    },
    setWinner: function (team) {
      this.teams.forEach(team => {
        team.isWinner = false
      })
      team.isWinner = true
    }
  }
}
</script>
<style scoped>
.winning-team {
  background-color: #b6fa83;
}
.losing-team {
  background-color: #ec9193;
}
</style>

