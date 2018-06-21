<template>
  <div id="app">
      <bets/>
  </div>
</template>

<script>
import Bets from './components/Bets.vue';

export default {
  name: 'App',
  components: {
    Bets
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(237, 243, 237, 0.3);
}

.table {
  margin-bottom: 0;
  border-top: 0;
}

.table-bordered td,
.table-bordered th {
  border-color: #848484;
}

.table thead th {
  border-bottom-color: #848484;
}

th,
td {
  font-size: 12px;
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
}

td {
  text-align: center;
}

th.sticky-th-top {
  position: sticky;
  top: -1px;
  z-index: 10;
  border-top: none;
}

th.sticky-th-bottom {
  position: sticky;
  bottom: 0;
  z-index: 10;
}

th.sticky-th-left {
  position: sticky;
  left: 0;
  z-index: 9;
  background: white;
}
</style>
