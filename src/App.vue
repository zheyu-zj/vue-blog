<template>
  <div id="app">
    <div class="layout" :class="{'layout-hide-text': spanLeft < 7}">
      <Row type="flex">
        <i-col :xs="0" :sm="spanLeft" class="layout-menu-left">
          <div class="layout-logo-left layout-text">zheyu_ZJ</div>
          <div class="menu-contnet">
            <Menu active-name="home" width="100%">
              <Button type="text" @click="toggleClick">
                <Icon type="navicon" size="32"></Icon>
              </Button>
              <MenuItem name="home">
                <router-link to="/">
                  <p>
                    <Icon type="home"></Icon>
                    <span class="layout-text">主页</span>
                  </p>
                </router-link>
              </MenuItem>
              <MenuItem name="article">
                <router-link to="/article">
                  <p>
                    <Icon type="clipboard"></Icon>
                    <span class="layout-text">文章</span>
                  </p>
                </router-link>
              </MenuItem>

              <MenuItem name="photo">
                <router-link to="/photo">
                  <p>
                    <Icon type="images"></Icon>
                    <span class="layout-text">照片</span>
                  </p>
                </router-link>
              </MenuItem>

              <MenuItem name="about">
                <router-link to="/about">
                  <p>
                    <Icon type="person"></Icon>
                    <span class="layout-text">关于</span>
                  </p>
                </router-link>
              </MenuItem>

              <MenuItem name="contact">
                <router-link to="/contact">
                  <p>
                    <Icon type="ios-telephone"></Icon>
                    <span class="layout-text">联系</span>
                  </p>
                </router-link>
              </MenuItem>
            </Menu>
          </div>
          <div class="menu-footer">
            2011-2016 &copy; TalkingData
          </div>
        </i-col>
        <i-col :xs="24" :sm="spanRight">
          <router-view/>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<style lang="scss">
  @import "assets/scss/index";
</style>

<script>
  export default {
    name: 'app',
    data() {
      return {
        spanLeft: 7,
        spanRight: 17
      }
    },
    computed: {
      iconSize() {
        return this.spanLeft === 7 ? 14 : 24;
      }
    },
    methods: {
      toggleClick() {
        if (this.spanLeft === 7) {
          this.spanLeft = 2;
          this.spanRight = 22;
        } else {
          this.spanLeft = 7;
          this.spanRight = 17;
        }
      }
    }
  }
</script>
