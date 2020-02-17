<template>
  <div class="home" v-nodata="!albums.length">
    <Slider />
    <ul>
      <section>最新音乐</section>
      <li v-for="(o, i) in albums" :key="i">
        <div class="album-info">
          <p>{{o.name}}</p>
          <p>{{o.singers}}</p>
        </div>
        <div class="album-cover" @click="play">
          <img src="../assets/play.png" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/xh-swiper'
import { getAlbums } from '@/service'

export default {
  name: 'home',
  components: {
    Slider
  },
  data: () => ({
    albums: []
  }),
  mounted() {
    this.request()
  },
  methods: {
    async request() {
      const res = await getAlbums();

      if (res.code !== '0') return;
      this.albums = res.data;
    },
    play() {
      alert('版权限制，无法播放~')
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
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
      .album-info {
        > p {
          font-size: 16px; line-height: 18px;
          &:nth-child(2) {
            font-size: 14px; line-height: 14px;
          }
        }
      }
      .album-cover {
        > img {
          width: 30px;
          height: 30px;
          margin: auto;
        }
      }
    }
  }
}
</style>
