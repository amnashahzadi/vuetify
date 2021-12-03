<template v-for="(item, index) in posts">
  <v-card :key="index" class="mx-auto mt-5 mb-5" max-width="350px">
    <v-list-item-title
      class="text-h5 text-center font-weight-bold text-uppercase mb-5 mt-5"
      >{{ item.category }}
    </v-list-item-title>

    <v-img :src="item.image" height="300px"></v-img>

    <v-card-title> {{ item.title }} </v-card-title>
    <v-rating
      v-model="rating"
      color="blue-grey darken-3"
      background-color="grey darken-1"
      empty-icon="$ratingFull"
      half-increments
      hover
      small
    ></v-rating>
    <!-- <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->
    <v-chip class="ma-3" color="blue-grey lighten-1" text-color="white"
      >$ {{ item.price }}
    </v-chip>
    <v-btn class="mx-6" fab dark small color="blue-grey lighten-1">
      <v-icon dark> mdi-heart </v-icon>
    </v-btn>
    <v-btn
      class="ml-2"
      color="blue-grey lighten-1"
      @click="fatchsingleProductData(item.id)"
      >Add to Cart</v-btn
    >
    <v-card-actions>
      <v-btn color="blue-grey darken-3" text> See Description </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text> {{ item.description }} </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { mapGetters, mapState } from "vuex";
// import Footer from "../views/Footer";
export default {
  name: "productCard",
  // components: { Footer },
  mounted() {
    this.$store.dispatch("loadPosts");
    this.$store.dispatch("loadCatogary");
    if (localStorage.getItem("currentUser") == "") {
      this.$router.push({ name: "login" });
    }
  },
  computed: {
    ...mapState(["posts"]),
    ...mapState(["Catogary"]),
    ...mapGetters(["getCat"]),
    ...mapGetters(["getSingleProduct"]),
  },
  data: () => ({
    show: false,
    drawer: null,
    rating: 4.5,
    page: 1,
    carousels: [
      {
        src: "https://i0.wp.com/www.3djewelsindia.com/images/new-ecom-images/Banner-1.jpg",
      },
      {
        src: "https://ozeltailor.com/wp-content/uploads/2017/04/home_banner_1-1.jpg",
      },
      {
        src: "http://cdn.shopify.com/s/files/1/0061/1008/5231/files/sale_banner4_1200x630.jpg?v=1596995263",
      },
      {
        src: "https://s3westernwear.online/wp-content/uploads/2021/08/02cfcffac595c832c514d58704cd82ce.jpg",
      },
      {
        src: "https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg",
      },
    ],
  }),
  methods: {
    fetchdata(apiId) {
      // alert(apiId);
      this.$store.dispatch("apiCall", apiId),
        this.$router.push({ name: "Catogary" });
    },
    fatchsingleProductData(apiId) {
      this.$store.dispatch("fatchsingleProductData", apiId);
      this.$router.push({ name: "SingleProduct" });
    },
    // signupbt() {
    //   this.$router.push({ name: "Register" });
    //   localStorage.setItem("currentUser", "");
    // },
  },
};
</script>