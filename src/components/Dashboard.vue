<template>
  <div>
    {{info}}
    <b-container>
      <b-form @submit="onSubmit">
        <b-form-group>
          <div class="form-group-post">
            <div class="form-group-in-post col-xl-6 col-lg-6 col-md-7 col-11">
              <div class="mt-2 form-post">
                <b-form-textarea
                  id="textarea-large"
                  size="md"
                  placeholder="Message"
                  no-resize
                  v-model="form.post"
                  no-auto-shrink
                  rows="4"
                ></b-form-textarea>
              </div>
              <b-button type="submit" class="submit-button mt-3">Button</b-button>
            </div>
          </div>
        </b-form-group>
      </b-form>
      <div v-for="post in posts" :key="post.name">
        <div class="post" @click="onClickModel(post)">
          <div class="bg col-xl-6 col-lg-6 col-md-7 col-11" v-b-modal.modal-center>
            <div class="post-header">
              <b>{{post.username}}</b>
            </div>
            <div class="post-body">{{post.message}}</div>
            <div class="post-footer">{{post.date}}</div>
          </div>
        </div>
      </div>
      <div>
        <b-modal id="modal-center" centered title="Kişisel Bilgileri">
          <p class="my-4">İsim: {{modal.username}}</p>
          <p class="my-4">Tarih: {{modal.date}}</p>
        </b-modal>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      form: { buttonHide: false, post: "" },
      posts: [
        {
          username: "Enis Keskin",
          message:
            "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
          date: new Date().toDateString()
        },
        {
          username: "Mürvet Berber",
          message:
            "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
          date: new Date().toDateString()
        }
      ],
      modal: {
        username: "Enis keskin",
        date: new Date().toDateString()
      },
      info: null
    };
  },
  created: function() {
    this.trial();
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      alert(this.form.post);
    },
    onClickModel(data) {
      this.modal.username = data.username;
      this.modal.date = data.date;
    },
    trial() {
      var myHeaders = new Headers({
        "Content-Type": " application/json"
      });
      fetch("http://localhost:8000/posts", {
        method: "GET",
        headers: myHeaders,
        mode: "no-cors",
        credentials: "include"
      })
        .then(data => {
          console.log("Request succeeded with JSON response", data);
        })
        .catch(function(error) {
          console.log("Request failed", error);
        });
    }
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
.post {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}
.bg {
  border: 1px solid #3333;
  border-radius: 5px;
}
.post-header {
  text-align: start;
  padding: 12px 10px 0px 3px;
}
.post-body {
  text-align: start;
  word-break: break-word;
  padding: 10px;
}
.post-footer {
  text-align: end;
}
</style>