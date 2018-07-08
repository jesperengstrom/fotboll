<template>
  <div id="app">
    <transition name="fade">
      <winner :winner="hasWinner" v-show="hasWinner.set" />
    </transition>
    <div class="app-heading">
      <h1 id="logo" class="text-center">Leogezlen ⚽</h1>
      <i :title="rules" v-tippy class="material-icons">help</i>
    </div>
    <main id="main" class="container-fluid">
      <bets/>
    </main>
  </div>
</template>

<script>
import Bets from './components/Bets.vue';
import Winner from './components/Winner.vue';
import { hasWinner } from '../data/results';

export default {
  name: 'App',
  components: {
    Bets,
    Winner
  },
  data () {
    return {
      rules: `REGLER:<br> Rätt tippat resultat - 1p <br> Rätt tippad gruppvinnare - 2p <br> Rätt tippad medaljör - 2p <br> Rätt tippad skyttekung - 3p`,
      hasWinner: hasWinner
    };
  },
  mounted () {
    if (this.hasWinner.set) {
      setTimeout(() => {
        this.hasWinner.set = '';
      }, 5000);
    }
  }
};
</script>

<style>
.app-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bee5eb;
}

.app-heading i {
  font-size: 36px;
  cursor: pointer;
  position: absolute;
  right: 20px;
}

#logo {
  margin: 0;
  padding-bottom: 10px;
}

.content {
  margin-top: 50px;
}
#main {
  height: 90vh;
  width: 100vw;
  padding: 0;
  overflow: scroll;
  background-color: white;
}

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
