<template>
  <div id="app">
    <main id="main" class="container-fluid">
      <h1>Leogezlen ⚽</h1>
      <loading v-if="transformed === false"/>
      <bets v-if="transformed === true" />
    </main>
  </div>
</template>

<script>
import Bets from './components/Bets.vue';
import Loading from './components/Loading.vue';

export default {
  name: 'App',
  components: {
    Bets,
    Loading
  },
  data () {
    return {
      transformed: true
    };
  }
};
</script>

<style>
#main {
  margin-top: 10px;
  height: 95vh;
  width: 95vw;
  overflow: scroll;
}

th,
td {
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
}

th {
  font-size: 12px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
