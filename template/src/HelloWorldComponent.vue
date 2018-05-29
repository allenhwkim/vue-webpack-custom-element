<template>
  <div class="hello-world">
    <span class="hello">Hello</span>
    <span class="world" v-on:click="setWorld">{{world}}</span>
  </div>
</template>

<script>
let words = ['World', 'Vue', 'Custom Element', 'Web Components'];
let ndx = 0;
export default {
  name: 'hello-world',
  props: {
    message: String,
  },
  data () {
    return {
      world: this.message || 'World'
    }
  },
  methods: {
    setWorld: function() {
      let world = words[ndx++ % words.length];
      this.$set(this, 'world', world);
      this.$emit('world-changed', world);
    }
  }
}
</script>

<style scoped>
.hello-world { 
  display: inline-block; 
  font-weight: bold; 
  background-color: blue; 
  padding: 12px 
}
.hello { color: white}
.world { color: yellow; cursor: pointer}
</style>

