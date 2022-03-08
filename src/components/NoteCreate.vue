<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Add notes</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>message</label>
          <input
            type="text"
            class="form-control"
            v-model="notes.message"
            required
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">Add notes</button>
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
      notes: {
        message: "",
      },
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("notes")
        .add(this.notes)
        .then(() => {
          alert("notes successfully created!");
          this.notes.message = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>