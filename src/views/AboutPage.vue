<template>
  <h1>About Page</h1>

  <h1>Bitcoin Price Index</h1>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment,
      please try back later
    </p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>

    <div v-else v-for="currency in info" class="currency">
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span
        >{{ currency.rate_float | currencydecimal }}
      </span>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
  async getCurency() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => {
        this.info = response.data.bpi;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  getUSD() {
    console.log('Start apel');
    axios
      .get(
        'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD'
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('Gata');
      });
  },
  mounted() {
    //getUSD();
  },
  testare() {
    console.log('Inainte de start apel');
  },
  created() {
    testare();
    //getUSD();
    // axios
    //   .get(
    //     'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD'
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     console.log('Gata');
    //   });
    /*
    axios
      .get('https://www.cryptocompare.com/api/data/coinlist/')
      .then((response) => {
        console.log(response.Message);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('Gata');
      });
*/
  },
};
</script>
