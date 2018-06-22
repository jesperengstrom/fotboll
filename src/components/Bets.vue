<template>
  <div>
    <loading v-show="allBets.length === 0" />
    <transition name="fade">
      <table v-show="allBets.length > 0" class="table table-bordered table-hover table-sm">
        <betheads :heads="heads" />
        <tbody>
          <betrow v-for="(bet, index) in allBets" :key="index" :bet="bet" />
        </tbody>
        <tfoot>
          <tr class="table-info" align="justify">
            <th class="sticky-th-bottom" v-for="(result, index) in results" :key="index">{{result.score}}</th>
          </tr>
        </tfoot>
      </table>
    </transition>
  </div>
</template>

<script>
import bets from '../../data/bets';
import results from '../../data/results';

import Betheads from './Betheads.vue';
import Betrow from './Betrow.vue';
import Loading from './Loading.vue';

export default {
  name: 'Bets',
  components: {
    Betheads,
    Betrow,
    Loading
  },
  data () {
    return {
      allBets: [],
      heads: {},
      results: results
    };
  },
  methods: {
    addResult (arr) {
      arr.forEach((el, i) => {
        for (let key in el) {
          if (results.hasOwnProperty(key)) {
            let bet = el[key];
            bets[i][key] = {
              bet: bet,
              correct: bet === results[key].result,
              points: bet === results[key].result ? results[key].points : 0
            };
          }
        }
      });

      return this.addPoints(arr);
    },

    calcPoints (obj) {
      let points = 0;
      for (let key in obj) {
        if (obj[key].hasOwnProperty('points')) {
          points += obj[key].points;
        }
      }
      return points;
    },

    addPoints (arr) {
      let withPoints = arr.map(el => {
        return {
          points: this.calcPoints(el),
          ...el
        };
      });
      return this.sortPlayers(withPoints);
    },

    sortPlayers (arr) {
      let sorted = arr.sort((a, b) => {
        return b.points - a.points;
      });

      return sorted;
    }
  },

  created () {
    let transformedBets = this.addResult(bets);

    // just to see loader + transition :)
    setTimeout(() => {
      this.allBets = transformedBets;
      this.heads = transformedBets[0];
    }, 200);
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
