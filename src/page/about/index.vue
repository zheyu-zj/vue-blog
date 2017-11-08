<template>
  <div id="about" class="right-content">
    <row :gutter="20" class="info-box">
      <i-col :sm="24" :md="12">
        <img class="info-img" :src="info.src" alt="">
      </i-col>
      <i-col :sm="24" :md="12" class="info-text">
        <h3>{{info.title}}</h3>
        <p v-for="list in info.content">{{list}}</p>
      </i-col>
    </row>
    <h2 class="resume">RESUME</h2>
    <row class="resume-box">
      <i-col :sm="24" :md="12" v-for="(list,id) in data" :key="id">
        <img :src="list.src">
        <dl>
          <dt>{{list.title}}</dt>
          <dd>{{list.content}}</dd>
        </dl>
      </i-col>
    </row>
    <Learn></Learn>
  </div>
</template>

<script>
  import Learn from './../../components/Learn.vue'

  export default {
    data() {
      return {
        info: {
          src: require('../../assets/img/img_bg_1.jpg'),
          title: 'ABOUT COMPANY',
          content: [
            'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Quisque sit amet efficitur nih. Interdum et malesuada fames ac ante ipsum primis in faucibus interda et malesuada parturient.',
            'Quisque sit amet efficitur nih. Interdum et malesuada fames ac ante ipsum primis in faucibus interda et malesuada parturient.'
          ]
        },
        data: [
          {
            src: require('../../assets/img/img_bg_1.jpg'),
            title: 'STRATEGY',
            content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
          },
          {
            src: require('../../assets/img/img_bg_2.jpg'),
            title: 'EXPLORE',
            content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
          },
          {
            src: require('../../assets/img/img_bg_3.jpg'),
            title: 'EXPLORE',
            content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
          },
          {
            src: require('../../assets/img/img_bg_1.jpg'),
            title: 'EXPLORE',
            content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
          },
        ]
      }
    },
    components: {Learn}
  }
</script>
