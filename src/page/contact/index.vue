<template>
  <div id="contact">
    <row class="contact-img" :gutter="20">
      <i-col :sm="24" :md="8">
        <img :src="contact[0].src">
        <a href="mailto:">info@domain.com</a>
      </i-col>
      <i-col :sm="24" :md="8">
        <img :src="contact[1].src">
        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
      </i-col>
      <i-col :sm="24" :md="8">
        <img :src="contact[2].src">
        <a href="tel://">+17610606012</a>
      </i-col>
    </row>
    <div class="right-content">
      <h2>Get In Touch</h2>
      <Form ref="formInline" :model="formInline">
        <row :gutter="30">
          <i-col :sm="24" :md="12">
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="Username"/>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.email" placeholder="Password"/>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.phone" placeholder="Password"/>
            </FormItem>
          </i-col>
          <i-col :sm="24" :md="12">
            <FormItem prop="password">
              <Input type="textarea" v-model="formInline.message" placeholder="Password"/>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">Send Message</Button>
            </FormItem>
          </i-col>
        </row>
      </Form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        contact: [
          {
            src: require('../../assets/img/img_bg_1.jpg'),
            text: ''
          },
          {
            src: require('../../assets/img/img_bg_2.jpg'),
            text: ''
          },
          {
            src: require('../../assets/img/img_bg_3.jpg'),
            text: ''
          },
        ],
        formInline: {
          user: '',
          email: '',
          phone: '',
          message: ''
        }
      }
    },
    methods: {
      handleSubmit() {
      },
    }
  }
</script>
