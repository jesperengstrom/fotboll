<template>
  <tr>
    <th v-for="(value, key) in bet" v-if="key === 'Tippare'" scope="row" :key="key" v-text="value"/>
    <td v-if="key !== 'Timestamp' && key !== 'Tippare'" v-for="(value, key) in bet" :key="key" :class="addBg(value)" v-text="printTd(value)"/>
  </tr>
</template>

<script>
export default {
  name: 'Betrow',
  props: {
    bet: {
      type: Object
    }
  },
  methods: {
    printTd (val) {
      if (val.hasOwnProperty('bet')) {
        return val.bet;
      } else return val;
    },
    addBg(val) {
      if (val.hasOwnProperty('correct')) {
        return val.correct ? 'table-success' : 'table-danger';
      } else return '';

    }
  },
  computed: {}
};
</script>

<style>
.green {
  background: green;
}

.red {
  background: red;
}
</style>
