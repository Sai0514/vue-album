<template>
  <div class="mine">
    <div v-if="user==null"><a href="#" @click="show=true">请登录</a></div>
    <div v-else>
      恭喜{{user.username}}，登录成功！<button @click="back">退出</button>
      <ul>
        <section>我的收藏</section>
        <li v-for="(o, i) in albums" :key="i">
          <div class="album-info">
            <p>{{o.name}}</p>
            <p>{{o.singers}}</p>
          </div>
          <div class="album-cover" @click="liked(o, i)">
            <van-icon name="like" />
          </div>
        </li>
      </ul>
    </div>
    <div v-show="show">
      <van-form>
        <van-field
          v-model="username"
          ref="name"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          ref="pwd"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" @click="login">
            注册/登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'
import { setRegister, getUser, getAlbums } from '@/service'

export default {
  data: () => ({
    username: '',
    password: '',
    show: false
  }),
  computed: {
    ...Vuex.mapState(['user', 'albums'])
  },
  methods: {
    ...Vuex.mapMutations(['setUser', 'setAlbums']),
    async login() {
      let u = {
        username: this.username,
        password: this.password
      }
      const res = await getUser(u);

      if (res.code !== '0' || res.data == null) {
        this.$message(res.$message)
        this.register(u);
        return;
      } else {
          this.$message('登录成功')
          this.ok = true;
          this.show = false;
          this.setUser(res.data);
          this.getAlbums()
      }
    },
    async register(u) {
      const res = await setRegister(u);

      if (res.code !== '0') return;
      
      this.$message('注册成功')
      this.ok = false;
      this.show = false;
      this.setUser(res.data);
      this.getAlbums()
    },
    async getAlbums() {
      const res = await getAlbums();

      if (res.code !== '0') return;
      this.setAlbums(res.data);
    },
    liked(o) {
      this.$confirm.confirm({
          title: '我的收藏',
          message: '确定取消该收藏吗？'
        }).then(() => {
          this.deleteAlbum(o)
        }).catch(() => {
          return;
        });
     },
    back () {
      this.setUser(null);
      this.setAlbums(null);
    },
    async deleteAlbum(o) {
      fetch(`/album/${o._id}`, {method: 'DELETE'})
        .then(res => res.json())
        .then(() => {
          let album = JSON.parse(JSON.stringify(this.albums))
          let i = this.albums.findIndex(item => item._id === o._id)
          album.splice(i,1)
          this.setAlbums(album)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.mine{
 ul {
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