<script>
import db from "../firebase/firebaseInit";

export default {
  name: "Modal",
  data() {
    return {
      notes: {
        message: "",
      },
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("notes")
        .add(this.notes)
        .then(() => {
          this.notes.message = "";
          this.$emit("close");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div
          class="profile-header"
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div style="display: flex; align-items: center; gap: 8px">
            <div
              style="
                width: 32px;
                height: 32px;
                background-color: #ffba02;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                color: white;
              "
            >
              32
            </div>
            <span style="color: #373737; font-weight: bold">Sam Patigas</span>
          </div>

          <div
            @click="close"
            style="
              width: 32px;
              height: 32px;
              background-color: #ffba02;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 8px;
              color: white;
            "
          >
            X
          </div>
        </div>

        <form @submit.prevent="onFormSubmit">
          <div class="form-group">
            <textarea
              placeholder="Add notes here"
              type="text"
              class="form-control"
              cols="40"
              rows="5"
              v-model="notes.message"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block">Add notes</button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 220, 128, 0.2);
  backdrop-filter: blur(14px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background: rgba(255, 220, 128, 0.8);
  box-shadow: -8px -4px 32px rgba(100, 100, 100, 0.1);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  border-radius: 32px;
  color: rgb(187, 155, 69);
  width: 75vh;
}
textarea[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  color: rgb(187, 155, 69);
  background: none;
  resize: none;
  height: 50vh;

  &::placeholder {
    color: rgb(187, 155, 69, 0.5);
  }

  &:focus {
    background: rgb(187, 155, 69, 0.2);
    border: none;
    outline: none;
    border-radius: 18px;
  }
  textarea::-webkit-scrollbar {
    width: 1em;
    background: red;
  }

  textarea::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  textarea::-webkit-scrollbar-thumb {
    background-color: rgb(187, 155, 69, 0.5);
  }
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>
