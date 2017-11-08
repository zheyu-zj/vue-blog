<template>
  <Card dis-hover id="card-box">
    <p slot="title">
      <router-link :to="list.url" class="img-box">
        <img :src="list.src" :class="{hover:mouse}" v-on:mouseover="fn" v-on:mouseout="out">
      </router-link>
    </p>
    <p class="title">{{list.title}}</p>
    <p class="time">{{list.time}}</p>
    <p class="content">{{list.content}}</p>
    <router-link :to="list.url">
      READ MORE
      <Icon type="arrow-right-c"></Icon>
    </router-link>
  </Card>
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
