<template>
  <div>
    <v-app-bar dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>SHOPy</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-container class="py-0 fill-height">
        <v-spacer></v-spacer>

        <v-btn text>
          Home
          <v-icon small left>mdi-home</v-icon>
        </v-btn>
        <v-btn to="/category" text>
          Categories
          <v-icon small left>mdi-basket</v-icon>
        </v-btn>
        <v-btn to="/updateProfile" text>
          update profile
          <v-icon small left>mdi-account</v-icon>
        </v-btn>
        <v-btn text>
          Logout
          <v-icon small left>mdi-logout</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item-title
        class="
          text-h5 text-center
          font-weight-bold
          text-uppercase
          mb-5
          mt-5
          font-size-15
        "
        >Categories
      </v-list-item-title>
    </v-navigation-drawer>
    

    <!--slider  -->
    <template>
      <v-carousel :show-arrows="false">
        <v-carousel-item
          v-for="(carousel, ii) in carousels"
          :key="ii"
          :src="carousel.src"
        ></v-carousel-item>
      </v-carousel>
      <div>
        <productCard
          v-for="product in products"
          :key="product.id"
          product="product"
        />
        <productCard />
      </div>
    </template>
    
    

    <!------------cards------------------>
    <v-container>
      <v-row>
        <template v-for="(item, index) in posts">
          <v-card
            :key="index"
            class="mx-auto mb-4 mt-5"
            style="margin-top:20px margin-bottom:20px display:flex"
            max-width="344"
          >
            <v-card-title>
              {{ item.category }}
            </v-card-title>
            <v-img :src="item.image" height="200px"></v-img>

            <v-card-subtitle>
              {{ item.title }}
            </v-card-subtitle>
            <v-chip class="ma-3" color="blue-grey lighten-1" text-color="white"
              >$ {{ item.price }}
            </v-chip>
            <v-btn
            class="ml-2"
            color="blue-grey lighten-1"
            @click="fatchsingleProductData(data.id)"
            >Add to Cart</v-btn
          >

            <v-card-actions>
              <v-btn color="orange lighten-2" text> See More </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ item.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </template>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
// import footer from "../views/footer";
export default {
  name: "Mainpage",
  // components: { footer },
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
        src: "https://media.istockphoto.com/photos/antique-jewelry-box-picture-id155068624?b=1&k=20&m=155068624&s=170667a&w=0&h=0_n9DprmPTT_4mmaskY7CUc3VbQE1zQOfXVDc-BmjI8=",
      },
      {
        src: "https://media.istockphoto.com/photos/doing-the-laundry-picture-id1322284136?b=1&k=20&m=1322284136&s=170667a&w=0&h=QoGufQqFgb-v9ARRNtWd5w6mIwWwZRJVBKTe6P32MbQ=",
      },
      {
        src: "https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?b=1&k=20&m=1293366109&s=170667a&w=0&h=2z_h2WlM3291IRKFXrdmtObnCt93rNNdNN6mqvnKD1I=",
      },
      {
        src: "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
