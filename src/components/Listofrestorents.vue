<template>
  <div id="app">
    <v-app id="inspire">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex style="width: 500px">
            <v-card>
              <v-card-text>Fourth Card</v-card-text>
            </v-card>
          </v-flex>
          <v-flex style="width: 500px">
            <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      McDonald's
    </v-card-title>

    <v-card-subtitle>
      Fast Food
    </v-card-subtitle>
    <v-rating
      v-model="rating"
      background-color="red lighten-3"
      color="red"
    ></v-rating>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>
<script>
export default {
  name: 'Listofrestorents',
  data: () => ({
    show: false,
    rating: 4,
    restaurants: [
      { name: 'McDonald', type: 'Fast Food', rating: 4 },
      { name: 'Pizzahut', type: 'Fast Food', rating: 4 },
      { name: 'Haldiram', type: 'Fast Food Snax ', rating: 3 }
    ]
  })
}
</script>
