<template>
  <tr>
    <th class="sticky-th-left" v-for="(value, key) in bet" v-if="key === 'Tippare' || key === 'points'" scope="row" :key="key" v-text="value"/>
    <td v-if="key !== 'Timestamp' && key !== 'Tippare' && key !== 'points'" v-for="(value, key) in bet" :key="key" :class="addBg(value)" v-text="printTd(value)"/>
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
    addBg (val) {
      if (val.hasOwnProperty('correct')) {
        return val.correct ? 'table-success' : 'table-danger';
      } else return 'table-white';
    }
  },
  computed: {}
};
</script>

<style>
.table-white {
  background-color: white;
}
.table-hover tbody tr:hover {
  opacity: 0.8;
}
.table-hover .table-danger:hover {
  background-color: #f5c6cb;
}
.table-hover .table-success:hover {
  background-color: #c3e6cb;
}
</style>
