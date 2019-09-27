<template>
  <div class="flex justify-center items-center h-full lg:-mt-20">
    <form action="" class="form primary w-1/5">
      <div class="form-title">
        <h3 class="text-center">Login to AEP</h3>
      </div>
      <div class="form-group">
        <label for="email" class="form-label uppercase">Email Address</label>
        <input
          id="email"
          v-model="email"
          class="form-control"
          type="email"
          placeholder="Email Address"
        />
      </div>
      <div class="form-group">
        <label for="password" class="form-label uppercase">Password</label>
        <input
          id="password"
          v-model="password"
          class="form-control"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="form-actions">
        <nuxt-link class="btn btn-primary uppercase mr-1" to="dashboard">
          Login
        </nuxt-link>
        <nuxt-link class="btn btn-link uppercase ml-1 pr-0" to="forgot"
          >Forgot Password?</nuxt-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      email: undefined,
      password: undefined
    }
  }
}
</script>

<style></style>
