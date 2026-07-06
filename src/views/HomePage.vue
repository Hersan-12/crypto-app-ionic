<template>
  <ion-page>

    <ion-content>

      <div class="container">

        <h1>💰 Crypto App</h1>

        <ion-button expand="block" @click="ambilData">
          REFRESH
        </ion-button>

        <div
          class="card"
          v-for="item in crypto"
          :key="item.id"
        >

          <div>
            <small>Rank</small>
            <h2>{{ item.rank }}</h2>
          </div>

          <div>
            <small>{{ item.name }}</small>
            <h2>{{ item.symbol }}</h2>
          </div>

          <div>
            <small>USD</small>
            <h2>${{ item.price_usd }}</h2>
          </div>

        </div>

      </div>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonButton
} from '@ionic/vue'

import axios from 'axios'

export default {

  components: {
    IonPage,
    IonContent,
    IonButton
  },

  data() {
    return {
      crypto: [] as any[]
    }
  },

  mounted() {
    this.ambilData()
  },

  methods: {

    async ambilData() {

      try {

        const response = await axios.get<any>(
          'https://api.coinlore.net/api/tickers/'
        )

        this.crypto = response.data.data

      } catch (error) {
        console.log(error)
      }

    }

  }

}
</script>

<style scoped>

ion-content{
  --background:
  linear-gradient(
    to bottom,
    #0f172a,
    #1e293b
  );
}

.container{
  max-width:900px;
  margin:auto;
  padding:20px;
}

h1{
  text-align:center;
  color:white;
  margin-bottom:20px;
}

.card{

  display:flex;

  justify-content:space-between;

  align-items:center;

  background:#efe3b2;

  margin-top:12px;

  padding:15px;

  border-radius:10px;

}

small{
  color:#555;
}

h2{
  margin:0;
  color:black;
}

</style>