<template>
  <thead>
    <tr class="table-info">
      <th class="sticky-th-top" :key="key" v-if="key !== 'Timestamp'" v-for="(value, key) in heads">
        {{key}}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'Betheads',
  props: {
    heads: {
      type: Object
    }
  }
};
</script>

<style>
</style>
