<template>
  <div class="home">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(album, index) in banners" :key="index">
        <img width="100%" :src="album">
      </van-swipe-item>
    </van-swipe>
    <ul>
      <section>最新音乐</section>
      <li v-for="(o, i) in albums" :key="i">
        <div class="album-info">
          <p>{{o.album_name}}</p>
          <p>{{o.singer_name}}</p>
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

export default {
  name: 'home',
  data: () => ({
    banners: [
      "http://p1.music.126.net/svslDFxAxPPynoa6S8AGWQ==/109951164669628096.jpg?imageView&quality=89",
      "http://p1.music.126.net/CV4sSaamtdGsZh_oXLMj8w==/109951164669991087.jpg?imageView&quality=89",
      "http://p1.music.126.net/NBiuAtMi3KCc9A-CNzCIjw==/109951164669977544.jpg?imageView&quality=89"
    ],
    albums: [
      {"album_id": "202002022020", "album_name": "十一月的肖邦",  "singer_name": "周杰伦" },
      {"album_id": "202002022021", "album_name": "魔杰座",  "singer_name": "周杰伦" },
      {"album_id": "202002022022", "album_name": "听妈妈的话", "singer_name": "周杰伦" },
      {"album_id": "202002022023", "album_name": "十一月的肖邦",  "singer_name": "周杰伦" },
      {"album_id": "202002022024", "album_name": "魔杰座",  "singer_name": "周杰伦" },
      {"album_id": "202002022025", "album_name": "听妈妈的话", "singer_name": "周杰伦" }
    ]
  }),
  methods: {
    play() {
      console.log('play')
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
      align-items: center;
      font-size: 16px;
      border-bottom: 1px solid #eee; 
      .album-info {
        > p {
          font-size: 15px; line-height: 15px;
          &:nth-child(2) {
            font-size: 13px; line-height: 15px;
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
