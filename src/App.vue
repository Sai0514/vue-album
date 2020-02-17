<template>
  <div id="app">
    <router-view/>

    <van-tabbar route safe-area-inset-bottom>
      <van-tabbar-item replace to="/find" icon="browsing-history">发现</van-tabbar-item>
      <van-tabbar-item replace to="/" icon="music">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
