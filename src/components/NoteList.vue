<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="note in Notes" :key="note.key">
            <td>{{ note.message }}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: note.key } }"
                class="btn btn-primary"
                >Edit
              </router-link>
              <button
                @click.prevent="deleteNote(note.key)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import db from "../firebase/firebaseInit";

export default {
  data() {
    return {
      Notes: [],
    };
  },
  created() {
    db.collection("notes").onSnapshot((snapshotChange) => {
      this.Notes = [];
      snapshotChange.forEach((doc) => {
        this.Notes.push({
          key: doc.id,
          message: doc.data().message,
        });
      });
    });
  },
  methods: {
    deleteNote(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("notes")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>
