
<template>
    <div class="container">
        <div class="login">
            <form>
                <!-- Email input -->
                <div class="form-outline mb-4">
                    <input type="email" id="form2Example1" class="input form-control mb-1" />
                    <label class="form-label" for="form2Example1">Email address</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="input form-control mb-1" />
                    <label class="form-label" for="form2Example2">Password</label>
                </div>

                <!-- Submit button -->
                <button type="button" class="btn btn-primary btn-block mb-4">
                    Sign in
                </button>

                <!-- Register buttons -->
                <div class="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
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
import Vue from "vue";

export default Vue.extend({
  name: "LoginView",
});
</script>
