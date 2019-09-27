<template>
  <div class="flex justify-center items-center h-full lg:-mt-20">
    <form action="" class="form primary w-1/5">
      <div class="form-title">
        <h3 class="text-center">Forgot Password</h3>
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
      <div class="form-actions">
        <nuxt-link class="btn btn-link uppercase" to="/login">Cancel</nuxt-link>
        <button class="btn btn-secondary uppercase" type="button">
          Send Instructions
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      email: undefined
    }
  }
}
</script>

<style></style>
