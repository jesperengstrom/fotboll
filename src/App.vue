<template>
  <div id="app">
    <h1 class="text-center">Leogezlen ⚽</h1>
    <main id="main" class="container-fluid">
      <bets/>
    </main>
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
#main {
  margin-top: 10px;
  height: 90vh;
  width: 95vw;
  padding: 0;
  overflow: scroll;
  background-color: white;
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
  background-color: rgba(237, 243, 237, 0.3);
}
</style>
