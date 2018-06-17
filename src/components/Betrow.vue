<template>
  <tr>
    <td :key="key" v-for="(value, key) in bet">
        {{value}}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'Betrow',
  props: {
    bet: {
      type: Object
    }
  }
};
</script>

<style>
</style>
