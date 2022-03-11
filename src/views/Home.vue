<template>
  <div
    class="home"
    style="
      padding-inline: 54px;
      padding-block: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    "
  >
    <div
      v-show="!this.login"
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
      "
    >
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets1.lottiefiles.com/private_files/lf30_29hssath.json"
        style="width: 320px"
      >
      </lottie-player>

      <span
        style="font-weight: bold; color: rgb(200, 204, 221; font-size: 32px"
      >
        Hi Daryl here, still working on it
      </span>
      <span style=" color: rgb(200, 204, 221; text-align: center">
        Still working on the looks of it so for now viewing this on mobile or on
        tablet might break the layout and if you do register <br />
        you might experience some bugs; and if do; do let me know. Thanks 🥳
      </span>
    </div>
    <div
      v-show="this.login && !this.data"
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
      "
    >
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets7.lottiefiles.com/packages/lf20_YMim6w.json"
        style="width: 320px"
      >
      </lottie-player>

      <span
        style="font-weight: bold; color: rgb(200, 204, 221; font-size: 32px"
      >
        If you experience any bugs do let me know.
      </span>
      <span style=" color: rgb(200, 204, 221; text-align: center">
        Still working on the looks of it so for now viewing this on mobile or on
        tablet might break the layout and if you do register <br />
        you might experience some bugs; and if do; do let me know. Thanks 🥳
      </span>
    </div>
    <div v-if="this.login && this.data" class="container">
      <AddModal v-show="isModalVisible" @close="closeModal" />
      <div
        class="greetings profile"
        style="
          display: flex;
          gap: 32px;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <div style="display: flex; flex-direction: column; gap: 8px">
          <h1 style="font-size: 54px; color: #373737; line-height: 0.8">
            {{ this.time }}
          </h1>
          <div style="display: flex; gap: 32px; flex-direction: column">
            <p style="line-height: 1.6">
              <strong style="font-size: 32px; color: #373737">
                Hey, Doc {{ this.$store.state.profileFirstName }}.
              </strong>
              <br />
              <span style="font-size: 16px; color: #373737">
                Currently you're viewing
                <span style="color: #ffba02">Sam's status </span>
              </span>
            </p>
            <router-link
              class="note"
              style="
                cursor: pointer;
                text-decoration: none;
                color: #4087f3;
                background: rgba(64, 135, 243, 0.2);
                border-radius: 8px;
                padding-inline: 16px;
                padding-block: 8px;
                width: fit-content;
              "
              :to="{ name: 'Blogs' }"
              >See all patients
            </router-link>
          </div>
        </div>

        <div
          class="patient-profile"
          style="
            background: #fff;
            height: 320px;
            box-shadow: -8px -4px 32px rgba(100, 100, 100, 0.1);
            border-radius: 32px;
            padding: 32px;
            display: flex;
            flex-direction: column;
            gap: 24px;
          "
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
            <div class="status-pill">
              <p
                style="
                  font-size: 10px;
                  padding-block: 4px;
                  padding-inline: 8px;
                  background-color: #7dbb02;
                  color: white;
                  width: fit-content;
                  border-radius: 8px;
                "
              >
                Paired with D1
              </p>
            </div>
          </div>
          <span style="font-size: 12px; color: red">
            Note: Still working on this one as well
          </span>
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
              H
            </div>
            <span style="color: #373737; font-weight: bold">Height: </span>
            <span style="color: #373737; font-weight: bold">163cm</span>
          </div>
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
              W
            </div>
            <span style="color: #373737; font-weight: bold">Weight: </span>
            <span style="color: #373737; font-weight: bold">65Kg</span>
          </div>
          <div>
            <span style="font-size: 14px; line-height: 1.2">
              Contact info
            </span>
            <div style="display: flex; gap: 8px">
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
                W
              </div>
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
                W
              </div>
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
                W
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Card -->
      <div class="status" style="100%">
        <div class="card-container" style="display: flex; gap: 32px">
          <div
            class="card"
            style="
          padding: 32px;
          border-radius: 32px;
          background-color: white;
          width: 240px;
          height: fit-content
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: -8px -4px 32px rgba(100, 100, 100, 0.1);
        "
          >
            <div style="display: flex; gap: 16px">
              <div
                style="
                  width: 32px;
                  height: 32px;
                  background-color: rgb(255 186 2 / 50%);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 8px;
                  color: white;
                "
              >
                <lottie-player
                  autoplay
                  loop
                  mode="normal"
                  src="https://assets2.lottiefiles.com/packages/lf20_nv2zsatn.json"
                  style="width: 24px"
                >
                </lottie-player>
              </div>
              <h3 style="color: #ffba02">Heart Rate</h3>
            </div>
            <span style="font-size: 10px; color: #b8b8b8"
              >Updated: {{ this.data.updated_at }}</span
            >
            <div style="display: flex; gap: 32px">
              <span>
                <strong style="font-size: 56px; color: #ffba02">
                  {{ " " + this.data.heart_rate }}
                </strong>
                <strong style="font-size: 24px; color: #b8b8b8"> bpm </strong>
              </span>
            </div>
            <div class="status-pill">
              <p
                style="
                  font-size: 10px;
                  padding-block: 4px;
                  padding-inline: 8px;
                  background-color: #7dbb02;
                  color: white;
                  width: fit-content;
                  border-radius: 8px;
                "
              >
                Normal
              </p>
            </div>
          </div>

          <!-- // SpO2 -->
          <div
            class="card"
            style="
          padding: 32px;
          border-radius: 32px;
          background-color: white;
          width: 240px;
          height: fit-content
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: -8px -4px 32px rgba(100, 100, 100, 0.1);
        "
          >
            <div style="display: flex; gap: 16px">
              <div
                style="
                  width: 32px;
                  height: 32px;
                  background-color: rgb(64 135 243 / 50%);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 8px;
                  color: white;
                "
              >
                <lottie-player
                  autoplay
                  loop
                  mode="normal"
                  src="https://assets9.lottiefiles.com/packages/lf20_ytole9dw.json"
                  style="width: 24px"
                >
                </lottie-player>
              </div>
              <h3 style="color: #4087f3">SpO2</h3>
            </div>
            <span style="font-size: 10px; color: #b8b8b8"
              >Updated: {{ this.data.updated_at }}</span
            >
            <div style="display: flex; gap: 32px">
              <span>
                <strong style="font-size: 56px; color: #4087f3">
                  {{ " " + this.data.spo2 }}
                </strong>
                <strong style="font-size: 24px; color: #b8b8b8"> % </strong>
              </span>
            </div>
            <div class="status-pill">
              <p
                style="
                  font-size: 10px;
                  padding-block: 4px;
                  padding-inline: 8px;
                  background-color: #7dbb02;
                  color: white;
                  width: fit-content;
                  border-radius: 8px;
                "
              >
                Normal
              </p>
            </div>
          </div>
        </div>
        <div
          style="
            height: 340px;
            background-color: #fff;
            box-shadow: -8px -4px 32px rgba(100, 100, 100, 0.1);
            border-radius: 32px;
            padding: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 32px;
          "
        >
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets8.lottiefiles.com/packages/lf20_tcboat57.json"
            style="width: 220px"
          >
          </lottie-player>
          <span style=" color: rgb(200, 204, 221; font-size: 12px">
            Digrams which means math. So still working on it.
          </span>
        </div>
      </div>

      <div
        class="notes"
        style="display: flex; gap: 16px; flex-direction: column; width; 100%; height: 100%; background: white; border-radius: 32px; padding-block: 32px; padding-inline: 16px; box-shadow: -8px -4px 32px rgba(100, 100, 100, 0.1);"
      >
        <div style="display: flex; width: 100%; justify-content: space-between">
          <p style="font-weight: bold; font-size: 24px; color: #ffba02">
            My notes
          </p>
          <div
            @click="showModal"
            class="add-button note"
            style="
              width: 32px;
              height: 32px;
              background-color: #ffba02;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 8px;
              color: white;
              cursor: pointer;
            "
          >
            +
          </div>
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap">
          <div
            v-for="note in Notes"
            :key="note.key"
            class="note"
            style="
              background: rgba(255, 220, 128, 0.8);
              width: 50%;
              height: fit-content;
              border-radius: 16px;
              padding-inline: 8px;
              padding-block: 16px;
              color: #bb9b45;
              font-size: 12px;
              width: calc(100% * (1 / 2) - 10px - 1px);
              flex-grow: 1;
              display: inline-block;
            "
          >
            {{ note.message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogPost from "@/components/BlogPost.vue";
import BlogCard from "@/components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
import axios from "axios";
import db from "../firebase/firebaseInit";
import AddModal from "@/components/ModalAdd.vue";
import "@lottiefiles/lottie-player";

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Arrow,
    AddModal,
  },
  data() {
    return {
      data: null,
      currentDate: "",
      interval: null,
      time: null,
      Notes: [],
      login: false,
      isModalVisible: false,
    };
  },
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval);
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format();
    }, 1000);

    db.collection("notes").onSnapshot((snapshotChange) => {
      this.Notes = [];
      this.login = true;
      snapshotChange.forEach((doc) => {
        this.Notes.push({
          key: doc.id,
          message: doc.data().message,
        });
      });
    });
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
  },

  async mounted() {
    this.loaded = false;
    setInterval(() => {
      axios;
      await axios
        .post("https://admin.ph-sendsms.online/api/getLatestData", {
          devId: 101,
        })
        .then((response) => {
          console.log(this.state);
          console.log((this.data = response.data.reading));
          console.log((this.currentDate = this.data.updated_at));
        });
      await axios
        .get("https://admin.ph-sendsms.online/api/getAllOximeter", {
          devId: 101,
        })
        .then((response) => {
          console.log(response.data);
        });
    }, 1000);
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
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px 32px;
  height: 100%;
}
.profile {
  grid-area: 1 / 1 / 2 / 2;
}
.status {
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;
}
.notes {
  grid-area: 1 / 3 / 2 / 4;
}
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
