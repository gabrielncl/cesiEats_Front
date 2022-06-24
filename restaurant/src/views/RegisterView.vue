<template>
    <div class="container">
        <div class="login">
            <form>
                <!-- Register inputs -->
                <div>
                    <div class="form-outline mb-4">
                        <input type="email" class="input form-control mb-1" placeholder="Email"/>
                        <label class="form-label" for="form2Example1">Email address</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="password" class="input form-control mb-1" placeholder="Password"/>
                        <label class="form-label" for="form2Example2">Password</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="password" class="input form-control mb-1" placeholder="Re-enter password"/>
                        <label class="form-label" for="form2Example2">Confirm password</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input id="form2Example2" class="input form-control mb-1" placeholder="Your restaurant name"/>
                        <label class="form-label" for="form2Example2">Restaurant name</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input class="input form-control mb-1" placeholder="Adress"/>
                        <label class="form-label" for="form2Example2">Adress</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="number" class="input form-control mb-1" placeholder="Phone number"/>
                        <label class="form-label" for="form2Example2">Phone number</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input class="input form-control mb-1" placeholder="Code"/>
                        <label class="form-label" for="form2Example2">Do you have a referral code?</label>
                    </div>
                </div>
                
                <!-- Submit button -->
                <button type="button" class="btn btn-primary btn-block mb-4" v-on:click="verifyInfos">
                    Sign in
                </button>

                <!-- login redirection button -->
                <div class="text-center">
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
    .input {
        max-width: 40%;
        margin-left: auto;
        margin-right: auto ;
    }
</style>

<script lang="ts">
const name = 'name';
const email = 'email';
const password = 'password';
const adress = 'adress'; 
const phone = 'phone';
const referral = 'referral';

import Vue from "vue";

export default Vue.extend({
    name: "RegisterView",
    methods: {
    // verifyInfos: function (event) {
    //     alert('sign in')
    // }
  }
});

</script>