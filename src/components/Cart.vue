<template>
<div>
  <div v-if="totalcartitems.length ==0">
    <h1 style="font-size=10vh">Cart is empty</h1>
  </div>
  <div v-else>
    <Afternav/>
  <div id="app">
    <v-app id="inspire">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>

          <v-flex style="width: 250px" v-for="(item,i) in getAllCartData" :key="i">
            <v-card>
              <v-card-text>
                <v-row align="center" class="mx-0">
                    <div class="itemName">Item Name:</div><br>
                    <div class="black--text ml-2">{{item.name}}</div>
                </v-row><br><br>
                <v-row align="center" class="mx-0">
                    <div class="itemPrice">Item Price:</div><br>
                    <div class="black--text ml-2 mr-16">{{item.price}}</div><br>
                    <!-- <button @click="minus" class="ml-8 mr-2 black--text" :id=i>-</button> -->
                    <v-btn class="mx-2"  @click="minus" :id=i fab dark x-small color="primary"><v-icon dark>mdi-minus</v-icon></v-btn>
                    <h5 class="black--text">{{item.qty}}</h5>
                    <v-btn class="mx-2" @click="plus" :id=i fab dark x-small color="primary"><v-icon dark>mdi-plus</v-icon></v-btn>
                    <!-- <button @click="plus" class="ml-2 black--text" :id=i>+</button> -->
                </v-row><br><br>
                <v-row align="center" class="mx-0">
                    <div class="Quantity">Total Price of items:</div>
                    <div class="black--text ml-2">{{item.tprice}}</div>
                </v-row><br><br>
                </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
        <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on" @click="totalbill"
        >
          Get Bill
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Bill Invoice
        </v-card-title>

        <v-card-text>
          <div class="checkout">
            <h3>Your Cart</h3>
            <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Quantity
          </th>
          <th class="text-left">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) in getAllCartData" :key="i">
          <td>{{ item.name }}</td>
          <td>{{ item.qty }}</td>
          <td>{{ item.price * item.qty }}</td>
        </tr>
        <tr>
          <td></td>
          <td>Total Bill</td>
          <td>{{totalBill[0]}}</td>
        </tr>
        <tr>
          <td></td>
          <td>GST 5%</td>
          <td>{{ gst[0] }}</td>
        </tr>
        <tr>
          <td></td>
          <td>Final Amount</td>
          <td>{{ finalbill[0] }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"><router-link to="/finalpage"> Order</router-link></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    </v-app>
  </div>
  </div>
</div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import Afternav from '../components/Afternav.vue'
export default {
  name: 'Cart',
  data () {
    return {
      add: 0,
      sub: 0,
      dialog: false
    }
  },
  components: {
    Afternav
  },
  computed: {
    ...mapGetters(['getAllCartData']),
    totalcartitems () {
      return this.$store.state.totalcartitems
    },
    totalBill () {
      return this.$store.state.totalBill
    },
    gst () {
      return this.$store.state.gst
    },
    finalbill () {
      return this.$store.state.finalbill
    }
  },
  methods: {
    minus (event) {
      this.sub = event.currentTarget.id
      this.totalcartitems[this.sub].qty--
      var a = parseInt(this.totalcartitems[this.sub].price)
      console.log(a)
      this.totalcartitems[this.sub].tprice = this.totalcartitems[this.sub].qty * a
    },
    plus (event) {
      this.add = event.currentTarget.id
      this.totalcartitems[this.add].qty++
      var a = parseInt(this.totalcartitems[this.add].price)
      console.log(a)
      this.totalcartitems[this.add].tprice = this.totalcartitems[this.add].qty * a
    },
    totalbill () {
      for (var i = 0; i < this.totalcartitems.length; i++) {
        this.totalBill[0] = parseInt(this.totalBill[0]) + parseInt(this.totalcartitems[i].tprice)
      }
      this.gst[0] = parseFloat(this.totalBill[0] * (0.05))
      this.finalbill[0] = this.totalBill[0] + this.gst[0]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
