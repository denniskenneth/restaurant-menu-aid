<template>
  <div class="home">
    <Navbar />
    <index />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import index from "../components/index";

export default {
  name: "Home",
  components: {
    Navbar,
    index,
  },
};
</script>
