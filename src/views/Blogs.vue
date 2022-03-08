<template>
  <div
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
      src="https://assets9.lottiefiles.com/private_files/lf30_kqrbw5zc.json"
      style="width: 320px"
    >
    </lottie-player>

    <span
      style="font-weight: bold; color: rgb(200, 204, 221; font-size: 32px; text-align: center"
    >
      Hi Daryl here again, <br />
      sadly haven't done this part yet
    </span>
    <span style=" color: rgb(200, 204, 221; text-align: center">
      If there's anything that you think that you can contribute on this part
      <br />
      I'd be glad to take all your inputs.
    </span>
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard.vue";

export default {
  name: "blogs",
  components: {
    BlogCard,
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload);
      },
    },
  },
  beforeDestroy() {
    this.$store.commit("toggleEditPost", false);
  },
};
</script>

<style lang="scss" scoped>
.blog-cards {
  position: relative;
  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;
    span {
      margin-right: 16px;
    }
    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
  }
}
</style>
