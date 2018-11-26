<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{msg2}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'sss',
      msg2: 'aaa'
    }
  },
  mounted () {
    this.getinfo()
    this.test()
  },
  methods: {
  	getinfo(){
        this.$axios.get('/api/getUser').then((res) => {
          this.msg2 = res.data.user.emali
        })
     },
     test(){
        this.$axios.get('/api/test').then((res) => {
          this.msg = res.data.a
        })
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
