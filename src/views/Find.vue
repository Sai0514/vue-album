<template>
  <div class="find">
    <Slider />
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <ul>
      <section>国风</section>
      <li></li>
    </ul>
    <ul>
      <section>欧美</section>
       <li></li>
    </ul>
    <ul>
      <section>日韩</section>
       <li></li>
    </ul>
  </div>
</template>

<script>
import Slider from '@/components/xh-swiper'

export default {
  components: {
    Slider
  },
  data() {
    return {
      value: ''
    };
  },
  methods: {
    onSearch(val) {
      this.$message(val);
    },
    onCancel() {
      this.$message('取消');
    }
  }
}
</script>
<style lang="scss" scoped>
.find{
  > ul {
    position: relative; padding: 0 10px;
    text-align: left;
    > section {
      font-size: 18px;
      line-height: 30px;
      font-weight: 500;
      &::before {
        content: ""; margin-top: 2px;
        position: absolute; left: 0; right: 0;
        width: 2px; height: 26px; background: red;
      }
    }
    > li {
      display: flex;
      justify-content: space-between;
      align-items: center; padding: 10px;
      font-size: 16px; line-height: 30px;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
