import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants: [
      {
        id: 0,
        img: 'https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521807200.png',
        name: 'Dominos',
        rating: 4.1,
        trating: '4.1 (2589)',
        cuisine: 'Fast Food Restaurants',
        menulist: ['Onion Buddy Combo', 'Capsicum Buddy Combo', 'Paneer Onion Buddy Combo', 'Cheesy Buddy Combo', 'Chicken Sausage Buddy Combo'],
        price: ['99', '121', '123', '141', '143'],
        list: [0, 0, 0, 0, 0]
      },
      {
        id: 1,
        img: 'https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmJxfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Barbecue',
        rating: 4.2,
        trating: '4.2 (1596)',
        cuisine: 'Non-veg Restaurants',
        menulist: ['Butter Chicken', 'Chicken Tikka Masala', 'Dhaba Chicken', 'Chicken Do Pyaza', 'Chicken Malai Tikka Masala'],
        price: ['411', '444', '399', '450', '419'],
        list: [0, 0, 0, 0, 0]
      },
      {
        id: 2,
        img: 'https://b.zmtcdn.com/data/brand_creatives/logos/721f8184f6f441f26f15ffdb89190704_1605100524.png',
        name: 'Haldiram',
        rating: 4.1,
        trating: '4.1 (7859)',
        cuisine: 'Indian Restaurants',
        menulist: ['Haldirams Special Thali', 'Haldirams Special Matka Biryani', 'Tandoori Roti', 'Paneer Butter Masala', 'Mix Vegetable'],
        price: ['265', '259', '28', '319', '299'],
        list: [0, 0, 0, 0, 0]
      },
      {
        id: 3,
        img: 'https://images.unsplash.com/photo-1542488246-1390a9a99a30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'KFC',
        rating: 4.4,
        trating: '4.4 (4587)',
        cuisine: 'Fast Food Restaurants',
        menulist: ['Ultimate Savings Bucket', 'Big 8', 'Buddy Meal', 'Wednesday Bucket', 'Stay Home Bucket'],
        price: ['665', '589', '438', '570', '713'],
        list: [0, 0, 0, 0, 0]
      },
      {
        id: 4,
        img: 'https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604382533.png',
        name: 'McDonalads',
        rating: 4.2,
        trating: '4.2 (5429)',
        cuisine: 'Fast Food Restaurants',
        menulist: ['2 McSpicy Chicken Burger + Coke (L)', '2 (6 Pc Nuggets) + Coke (M)', '2 American Cheese Supreme Veg + Coke (L)', 'McSpicy Chicken Burger + Veg Pizza McPuff', 'McVeggie Burger + Veg Pizza McPuff'],
        price: ['313', '237', '237', '161', '111'],
        list: [0, 0, 0, 0, 0]
      },
      {
        id: 5,
        img: 'https://www.logotaglines.com/wp-content/uploads/2019/07/Pizza-Hut-Logo-Tagline-480x480.jpg',
        name: 'PizzaHut',
        rating: 4,
        trating: '4 (2259)',
        cuisine: 'Fast Food Restaurants',
        menulist: ['Chicken Sausage Pizza', 'Spiced Chicken Meatballs Pizza', 'Chicken N Corn Delight Pizza', 'Chicken Tikka Pizza', 'Italian Chicken Feast Pizza'],
        price: ['229', '269', '299', '349', '369'],
        list: [0, 0, 0, 0, 0]
      }
    ],
    loginData: {
      'swapnil@abc.com': 'qwert12345',
      'swapnil1@xyz.com': 'qwert12345'
    },
    loggedin: false,
    loginid: '',
    totalcartitems: [],
    totalBill: [0],
    gst: [0],
    finalbill: [0]
  },
  mutations: {
    setLoggedin: (state, payload) => {
      state.loggedin = payload
    },
    setLoginId: (state, payload) => {
      state.loginid = payload
    },
    settotalcartitems: (state, payload) => {
      state.totalcartitems = payload
    },
    setLoginData: (state, payload) => {
      state.loginData = payload
    }
  },
  actions: {
    setLoginAction: (state, payload) => {
      state.commit('setLoggedin', payload)
    },
    setIdAction: (state, payload) => {
      state.commit('setLoginId', payload)
    },
    settotalcartitemsAction: (state, payload) => {
      state.commit('settotalcartitems', payload)
    },
    setLoginDataAction: (state, payload) => {
      state.commit('setLoginData', payload)
    }
  },
  modules: {
  },
  getters: {
    getLoginData: (state) => state.loginData,
    getAllCartData: (state) => state.totalcartitems,
    getUsername: (state) => state.loginid
  }
})
