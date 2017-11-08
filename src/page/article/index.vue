<template>
  <div id="blog" class="right-content">
    <h3 class="h3-title">BLOG</h3>
    <row :gutter="20">
      <i-col v-for="(list,id) in data" :xs="12" :sm="6" :key="id">
        <cardBox :list="list"></cardBox>
      </i-col>
    </row>
    <Learn></Learn>
  </div>
</template>
<script>
  import cardBox from './../../components/cardBox.vue';
  import Learn from './../../components/Learn.vue';

  export default {
    data() {
      return {
        data: [
          {
            src: require('../../assets/img/img-1.jpg'),
            title: 'INSPIRATIONAL WEBSITE',
            time: 'BY ADMIN / WEB DESIGN / 14',
            content: 'Design must be functional and functionality must be translated into visual aesthetics',
            url: '/'
          },
          {
            src: require('../../assets/img/img-1.jpg'),
            title: 'INSPIRATIONAL WEBSITE',
            time: 'BY ADMIN / WEB DESIGN / 14',
            content: 'Design must be functional and functionality must be translated into visual aesthetics',
            url: '/'
          },
          {
            src: require('../../assets/img/img-1.jpg'),
            title: 'INSPIRATIONAL WEBSITE',
            time: 'BY ADMIN / WEB DESIGN / 14',
            content: 'Design must be functional and functionality must be translated into visual aesthetics',
            url: '/'
          },
          {
            src: require('../../assets/img/img-1.jpg'),
            title: 'INSPIRATIONAL WEBSITE',
            time: 'BY ADMIN / WEB DESIGN / 14',
            content: 'Design must be functional and functionality must be translated into visual aesthetics',
            url: '/'
          },
          {
            src: require('../../assets/img/img-1.jpg'),
            title: 'INSPIRATIONAL WEBSITE',
            time: 'BY ADMIN / WEB DESIGN / 14',
            content: 'Design must be functional and functionality must be translated into visual aesthetics',
            url: '/'
          },
          {
            src: require('../../assets/img/img-1.jpg'),
            title: 'INSPIRATIONAL WEBSITE',
            time: 'BY ADMIN / WEB DESIGN / 14',
            content: 'Design must be functional and functionality must be translated into visual aesthetics',
            url: '/'
          },
        ]
      }
    },
    components: {cardBox, Learn}
  }
</script>
