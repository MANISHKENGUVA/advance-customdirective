<template>
  <div>
    <h2>Filtered IDs</h2>
    <div v-for="data in someSampleArray" :key="data.id">
      <h1>{{ toSomeFilter(data.id) }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      someSampleArray: [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" }
      ]
    };
  },
  methods: {
    toSomeFilter(value) {
      return value === 1 ? "ID is One ✅" : "Other ID ❌";
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: Arial, sans-serif;
  color: #333;
}
</style>
