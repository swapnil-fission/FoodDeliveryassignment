<template>
<div>
    <Afternav/>
    <div id="app">
    <v-app id="inspire">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex
            style="width: 500px"
            v-for="(restaurant, i) of restaurants"
            :key="i"
          >
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <v-img height="250" :src="restaurant.img"></v-img>
              <v-card-title>{{ restaurant.name }}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="restaurant.rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                  <div class="grey--text ml-4">
                    {{ restaurant.trating }}
                  </div>
                </v-row>
                <div class="my-4 subtitle-1">
                  {{ restaurant.cuisine }}
                </div>
              </v-card-text>
              <div class="text-right">
                <v-dialog v-model="dialog" width="800">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="lighten-1" dark v-bind="attrs" @click="onClick" v-on="on" :id=restaurants[i].id :value=restaurants[i].id>
                      Check Menu Card
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="headline grey lighten-2">
                      {{ restaurant.name }} Menu Card
                    </v-card-title>

                    <v-card-text>
                      <v-layout justify-start class="ml-6 mt-5"><h2 class="black--text text-decoration">Items List</h2></v-layout>
                      <v-layout justify-center class="mt-n5 ml-7"><h2 class="black--text text-decoration">Price</h2></v-layout><br>
                      <ul v-for="(menu,j) of restaurants[tid].menulist" :key="j"><br>
                          <li class="font-italic font-weight-bold">{{restaurants[tid].menulist[j]}}</li>
                          <v-layout justify-center class="mt-n4 t18 "><h3>{{restaurants[tid].price[j]}}</h3></v-layout>
                          <v-layout justify-end class="mt-n8 t18">
                            <div class="text-center">
                                <v-btn rounded color="info" @click="addtocart(restaurants[tid].menulist[j],restaurants[tid].price[j])" dark :id=restaurants[tid].menulist[j]+restaurants[tid].price[j]>Add to cart</v-btn>
                            </div>
                          </v-layout>
                      </ul>
                      <!-- <tr v-for="(menu,j) of restaurant.menulist" :key="j">
                        <td>
                          {{menu}}
                        </td>
                        <v-layout justify-center class="mt-n4"><h4>{{restaurants[i].price[j]}}</h4></v-layout>
                        <td>
                          {{restaurants[i].price[j]}}
                        </td>
                      </tr> -->
                       </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-card-actions class="justify-end">
                        <v-btn
                          text
                         @click="dialog = false"
                        >Close</v-btn>
                      </v-card-actions>
                      <v-btn rounded color="error" dark @click="goToCart" >Checkout</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import Afternav from '../components/Afternav.vue'
export default Vue.extend({
  name: 'Home',
  data: () => ({
    show: false,
    dialog: false,
    tid: 0,
    sub: 0,
    add: 0,
    items: []
  }),
  components: {
    Afternav
  },
  computed: {
    restaurants () {
      return this.$store.state.restaurants
    },
    totalcartitems () {
      return this.$store.state.totalcartitems
    }
  },
  methods: {
    ...mapActions(['settotalcartitemsAction']),
    onClick (event) {
      this.tid = event.currentTarget.id
    },
    addtocart (a, b) {
      this.items.push([a, b])
      console.log(this.items)
      this.totalcartitems.push({ name: a, price: b, qty: 1, tprice: b })
    },
    goToCart () {
    //   this.totalcartitems.push(this.items)
      this.$router.push('/cart')
    }
  }
})
</script>
