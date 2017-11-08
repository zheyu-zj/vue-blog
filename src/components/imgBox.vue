<template>
  <router-link id="img-box" :to="list.url" :style="{background:`url(${list.src}) center / cover no-repeat`}">
    <div :data-name="list.name" :data-content="list.content" :class="{hover:mouse}" v-on:mouseover="fn" v-on:mouseout="out"></div>
  </router-link>
</template>

<script>
  export default {
    data(){
      return{
        mouse:false,
      }
    },
    methods: {
      fn() {
        this.mouse = true;
      },
      out() {
        this.mouse = false;
      }
    },
    props: ['list']
  }
</script>
