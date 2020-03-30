<template>
  <div>
    <b-container>
      <b-form @submit="onSubmit">
        <b-form-group>
          <div class="form-group-post">
            <div
              class="form-group-in-post col-xl-6 col-lg-1 col-md-2 col-sm-12 col-4"
              
            >
              <b-row class="mt-2 form-post">
                <b-form-textarea
                  id="textarea-large"
                  size="md"
                  placeholder="Message"
                  no-resize
                  no-auto-shrink
                  rows="4"
                  v-on:click="form.buttonHide = true"
                ></b-form-textarea>
                <!-- v-on:blur="form.buttonHide = false" -->
              </b-row>
              <b-button
                v-show="form.buttonHide"
                type="submit"
                class="col-xl-3 col-lg-1 col-md-2 col-sm-12 col-4 submit-button mt-3"
              >Button</b-button>
            </div>
          </div>
        </b-form-group>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      form: { buttonHide: false }
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      alert("a");
    },
  }
};
</script>

<style scoped>
.form-group-post {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-group-in-post {
  padding: 0;
  display: flex;
  flex-direction: column;
}
.submit-button {
  align-self: flex-end;
}
</style>