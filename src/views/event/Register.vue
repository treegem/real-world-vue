<template>
  <p>Register for event here.</p>
  <button @click="register">Register now</button>
</template>

<script>
export default {
  props: ['event'],
  methods: {
    register() {
      this.$router.push({
        name: 'EventDetails',
      })
    },
  },
}
</script>
