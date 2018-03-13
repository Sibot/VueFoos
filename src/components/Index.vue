<template>
  <players-list></players-list>
</template>

<script>
import PlayersList from './PlayersList'

export default {
  name: 'Index',
  components: {
    'players-list': PlayersList
  }
}
</script>
