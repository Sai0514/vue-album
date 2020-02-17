<template>
  <div class="wrapper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(album, index) in banners" :key="index">
        <img width="100%" :src="album" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
    
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      banners: [
        "http://p1.music.126.net/svslDFxAxPPynoa6S8AGWQ==/109951164669628096.jpg?imageView&quality=89",
        "http://p1.music.126.net/CV4sSaamtdGsZh_oXLMj8w==/109951164669991087.jpg?imageView&quality=89",
        "http://p1.music.126.net/NBiuAtMi3KCc9A-CNzCIjw==/109951164669977544.jpg?imageView&quality=89"
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.wrapper {
}
</style>