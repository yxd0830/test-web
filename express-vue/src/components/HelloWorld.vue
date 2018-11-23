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
      msg2: ''
    }
  },
  mounted () {
    this.getinfo()
  },
  methods: {
  	getinfo(){
        this.$axios.get('/users/cool').then((res) => {
        	console.log(res.data)
          this.msg2 = res.data.user.emali
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
