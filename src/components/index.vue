<template>
  <div class="index">
    <Navbar />
    <div class="container">
      <div
        class="card"
        v-for="restaurant in result.restaurants.data"
        :key="restaurant.id"
      >
        <g-image height="30px" :src="restaurant.logo" />
        <div class="card-content">
          <router-link
            :to="{
              name: 'restaurant-details',
              params: { name: restaurant.name, id: restaurant.id },
            }"
          >
            <h2 class="indigo-text">
              {{ restaurant.name }}
            </h2>
          </router-link>

          <div class="hold-em">
            <p class="chip loca">Location: {{ restaurant.city }}</p>
            <!-- <p class="chip desc">Description: {{ restaurant.description }}</p> -->
          </div>
        </div>
        <!-- <router-view></router-view> -->
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
import { useQuery } from "@vue/apollo-composable";
import Navbar from "../components/Navbar";

const getRestuarants = gql`
  query {
    restaurants {
      data {
        name
        id
        description
        city
        logo
      }
    }
  }
`;
export default {
  name: "index",
  setup() {
    const { result, loading, error } = useQuery(getRestuarants);
    return {
      result,
      loading,
      error,
    };
  },
  methods: {},
  props: {
    msg: String,
  },
  components: {
    Navbar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}

.index .card {
  /* margin: 0.5em;
  height: 30em;
  width: 30em; */
}
/*.index .card-content .hold-em {
  display: flex;
  flex-direction: column;
}

.index .card-content i.delete {
  position: absolute;
  top: 4px;
  right: 10px;
  cursor: pointer;
  color: black;
  font-size: 1.4em;
}

.index .card-content h2 {
  text-align: center;
  font-size: 1.8em;
  margin-top: 0;
}
.index .card-content p {
  color: black;
  margin: 0.2em;
  align-self: center;
} */
</style>
