<template>
  <div class="home">
    <h1>{{ this.time }}</h1>
    <p>
      Hello Good Morning Doctor
      <strong style="font-size: 32px">
        {{ this.$store.state.profileFirstName }}
        {{ this.$store.state.profileLastName }}
      </strong>
    </p>
    <div>
      <h1>{{ this.time }}</h1>
      <div style="display: flex">
        <h1>Heart Rate:</h1>
        <h1>{{ " " + this.data.heart_rate }}</h1>
        <h1>{{ " " + this.data.created_at }}</h1>
      </div>
      <p>
        Hello Good Morning
        <strong>
          {{ this.$store.state.profileFirstName }}
          {{ this.$store.state.profileLastName }}
          {{ this.$store.state.profileInitials }}
        </strong>
      </p>
    </div>
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      v-for="(post, index) in sampleBlogPost"
      :key="index"
      :post="post"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" to="#">
          Register for FireBlogs
          <Arrow class="arrow arrow-light" />
        </router-link>
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

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Arrow,
  },
  data() {
    return {
      data: null,
      interval: null,
      time: null,
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
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
  },
  mounted() {
    axios
      .post("https://admin.ph-sendsms.online/api/getLatestData", {
        devId: 101,
      })
      .then((response) => {
        console.log(this.state);
        console.log((this.data = response.data.reading));
        console.log(this.data);
      });
  },
};
</script>

<style lang="scss" scoped>
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
