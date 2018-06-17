<template>
<table>
  <betheads :heads="heads" />
  <tbody>
    <betrow v-for="(bet, index) in allBets" :key="index" :bet="bet" />
  </tbody>
</table>
</template>

<script>
import bets from '../../data/bets';

import Betheads from './Betheads.vue';
import Betrow from './Betrow.vue';

export default {
  name: 'Bets',
  components: {
    Betheads,
    Betrow
  },
  data () {
    return {
      allBets: bets,
      heads: bets[0]
    };
  }
};
</script>

<style>
</style>
