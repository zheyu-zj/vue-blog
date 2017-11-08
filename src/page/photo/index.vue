<template>
  <div id="photo" class="right-content">
    <h3 class="h3-title">Photo</h3>
    <row :gutter="20">
      <i-col v-for="(list,id) in data" :xs="24" :sm="12" :md="6" :key="id">
        <imgBox :list="list"></imgBox>
      </i-col>
    </row>
    <Learn></Learn>
  </div>
</template>

<script>
  import Learn from './../../components/Learn.vue'
  import imgBox from './../../components/imgBox.vue'

  export default {
    data() {
      return {
        data: [
          {
            url: '/',
            src: require('../../assets/img/img-1.jpg'),
            name: '123',
            content: '3421'
          },
          {
            url: '/',
            src: require('../../assets/img/img-1.jpg'),
            name: '123',
            content: '3421'
          },
          {
            url: '/',
            src: require('../../assets/img/img-1.jpg'),
            name: '123',
            content: '3421'
          },
          {
            url: '/',
            src: require('../../assets/img/img-1.jpg'),
            name: '123',
            content: '3421'
          },
          {
            url: '/',
            src: require('../../assets/img/img-1.jpg'),
            name: '123',
            content: '3421'
          },
          {
            url: '/',
            src: require('../../assets/img/img-1.jpg'),
            name: '123',
            content: '3421'
          },
          {
            url: '/',
            src: require('../../assets/img/img-1.jpg'),
            name: '123',
            content: '3421'
          },
          {
            url: '/',
            src: require('../../assets/img/img-1.jpg'),
            name: '123',
            content: '3421'
          },
          {
            url: '/',
            src: require('../../assets/img/img-1.jpg'),
            name: '123',
            content: '3421'
          },
          {
            url: '/',
            src: require('../../assets/img/img-1.jpg'),
            name: '123',
            content: '3421'
          },
          {
            url: '/',
            src: require('../../assets/img/img-1.jpg'),
            name: '123',
            content: '3421'
          },
        ]
      }
    },
    components: {Learn, imgBox}
  }
</script>
