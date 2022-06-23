<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav class="fullwidth d-block">
        <b-row>
          <b-col>
            <b-nav-item class="cesieats" to="/">CESIEats</b-nav-item>
          </b-col>
          <b-col cols="8">
            <b-form-input class="search-input w-75" placeholder="Restaurant"></b-form-input>
          </b-col>
          <b-col>
            <b-button pill class="auto-margin" @click="gotoLogin()">Login</b-button>
            <b-button pill @click="gotoRegister()">Register</b-button>
          </b-col>
        </b-row>
      </b-navbar-nav>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<style>
  .auto-margin{
    margin-left: 8px;
    margin-right: 8px;
  }

  .fullwidth{
    width: 100%;
  }

  .cesieats{
    font-size: large;
    margin-right: 50px;
  }

  .search-input{
    width: 45%;
    margin-right: 10px;
  }
</style>

<script lang="ts" >
export default {

  // data: {
  //   user
  // },
  methods:{
    async gotoLogin(this:any){
      this.$router.push('/login'); 
    },
    async gotoRegister(this: any) {
      this.$router.push('/register');
    }
}




}
</script>


