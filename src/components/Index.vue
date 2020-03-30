<template>
  <div style="background-image: url('https://www.ecronicon.com/promotions/images/abg3.jpg')">
    <b-container class="index-container">
      <b-form
        @submit="onSubmit"
        @reset="onReset"
        v-if="show"
        class="col-xl-5 col-lg-6 col-md-7 col-10 p-3 mb-1"
        id="login-form"
      >
        <b-form-group
          class="pt-3 pr-3 pl-3 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-1 mx-auto"
          id="input-group-1"
          label="Email:"
          label-cols-sm="3"
          label-align-sm="right"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            class="col-sm-12 col-md-12 col-lg-12 col-xl-12"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="p-3 mb-1 mx-auto"
          id="input-group-2"
          label="Password:"
          label-for="input-2"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input
            type="password"
            id="input-2"
            v-model="form.name"
            required
            placeholder="Enter password "
          ></b-form-input>
        </b-form-group>

        <div class="login-bottom pr-3 pl-3">
          <b-form-group id="input-group-4">
            <b-form-checkbox v-model="form.checked" id="checkboxes-4">Remember me</b-form-checkbox>
          </b-form-group>
          <b-form-group id="input-group-5">
            <b-button
              id="sbmt"
              class="col-xl-5 col-lg-5 col-md-5 col-5"
              type="submit"
              variant="primary"
            >Login</b-button>
          </b-form-group>
        </div>
      </b-form>
    </b-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        checked: false
      },
      show: true
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
    },
    onReset(e) {
      e.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.check = false;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
#input-group-2 {
  display: flex;
  align-items: center;
}
.index-container {
  width: 100%;
  height: -webkit-fill-available;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-bottom {
  display: flex;
  flex-direction: column;
}
#input-group-4 {
  align-self: flex-end;
}

#login-form {
  background: #eeeeee;
  border-radius: 15px;
}

#input-group-1 {
  padding-top: 35px !important;
}
</style>
