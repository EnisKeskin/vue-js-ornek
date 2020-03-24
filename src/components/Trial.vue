<template>
 <div>
   <p>asdasdas</p>
  <p>{{ this.$route.params.id }}</p>
 </div>
</template>

<script>
export default {
  name: "Trial",
  props: {
    msg: String
  }
};
</script>