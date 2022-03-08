<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Update User</h3>
      <form @submit.prevent="onUpdateForm">
        <div class="form-group">
          <label>Note</label>
          <input
            type="text"
            class="form-control"
            v-model="note.message"
            required
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import db from "../firebase/firebaseInit";

export default {
  data() {
    return {
      note: {},
    };
  },
  created() {
    let dbRef = db.collection("notes").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.note = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("notes")
        .doc(this.$route.params.id)
        .update(this.note)
        .then(() => {
          console.log("Note successfully updated!");
          this.$router.push("/list");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>