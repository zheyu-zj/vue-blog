<template>
  <div id="home">
    <div class="banner" v-for="list in data"
         :style="{width:'100%',height:'100vh',background:`url(${list.src}) center / cover no-repeat`}"
         v-if="list.display">
      <div></div>
      <dl :class="{animation:list.display}">
        <dt>{{list.text}}</dt>
        <dd>
          <router-link to="">
            <Icon type="clipboard"></Icon>
            文章
          </router-link>
          <router-link to="">
            登录 ➤
          </router-link>
        </dd>
      </dl>
      <ol class="banner-dot">
        <li v-for="list in data" :class="{active:list.display}"></li>
      </ol>
    </div>
  </div>
</template>

<script>
  import Row from "../../../node_modules/iview/src/components/grid/row.vue";

  export default {
    data() {
      return {
        data: [
          {
            text: '对于攀登者来说，失掉往昔的足迹并不可惜，迷失了继续前时的方向却很危险。',
            src: require('../../assets/img/img_bg_1.jpg'),
            display: false
          },
          {
            text: '对于攀登者来说，失掉往昔的足迹并不可惜，迷失了继续前时的方向却很危险。',
            src: require('../../assets/img/img_bg_2.jpg'),
            display: false
          },
          {
            text: '对于攀登者来说，失掉往昔的足迹并不可惜，迷失了继续前时的方向却很危险。',
            src: require('../../assets/img/img_bg_3.jpg'),
            display: false
          },
        ],
        index: 3,
      }
    },
    created() {
      this.banner();
      setInterval(this.banner, 3000)
    },
    methods: {
      banner() {
        for (let i = 0; i < this.data.length; i++) {
          this.data[i].display = false;
        }
        if (this.index < 2) {
          this.index++;
        } else {
          this.index = 0;
        }
        this.data[this.index].display = true;
      },
    },
    components: {Row}
  }
</script>
