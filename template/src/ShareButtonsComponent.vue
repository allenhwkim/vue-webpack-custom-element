<template>
  <div id="share-buttons">
    <a href="#" @click.prevent="share" v-if="facebook">Facebook</a>
  </div>
</template>

<script>
export default {
  props: {
    facebook: { type: Boolean, default: true },
  },
  methods: {
    share ($event) {
      window.alert('Share on ' + $event.target.innerHTML);
    }
  }
}
</script>

<style scoped>
  #share-buttons {
    display: inline-block;
  }
  #share-buttons a {
    background-color: blue;
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
  }
  #share-buttons a:hover {
    color: yellow;
  }
</style>
