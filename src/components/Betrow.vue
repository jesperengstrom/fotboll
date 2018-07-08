<template>
  <tr>
    <th v-for="(value, key) in bet"
        v-if="key === 'Tippare' || key === 'points'"
        :class="`sticky-th-left ${winner && key === 'Tippare' ? hasMedal(value) : ''}`"
        scope="row" :key="key"
        v-text="value"/>
    <td v-for="(value, key) in bet"
        v-if="key !== 'Timestamp' && key !== 'Tippare' && key !== 'points'"
        :key="key"
        :class="addBg(value)"
        v-text="printTd(value)"/>
  </tr>
</template>

<script>
import { hasWinner as winner } from '../../data/results';

export default {
  name: 'Betrow',
  props: {
    bet: {
      type: Object
    }
  },
  data () {
    return {
      winner: winner
    };
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
    },
    hasMedal (player) {
      if (player === this.winner.gold) {
        return 'isGold';
      }
      if (player === this.winner.silver) {
        return 'isSilver';
      }
      if (player === this.winner.bronze) {
        return 'isBronze';
      }
      return false;
    }
  }
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

.isGold,
.isSilver,
.isBronze {
  padding-left: 20px !important;
}
.isGold {
  color: #ccac00;
}
.isSilver {
  color: #808080;
}
.isBronze {
  color: #d48500;
}

.isGold::before,
.isSilver::before,
.isBronze::before {
  position: absolute;
  left: 0;
}
.isGold::before {
  content: "🏅";
}
.isSilver::before {
  content: "🥈";
}
.isBronze::before {
  content: "🥉";
}
</style>
