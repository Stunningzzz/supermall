<template>
  <div class="detail-comments" v-if="comments">
    <div class="comments-title">
      <span class="fl">用户评论</span>
      <span class="fr">更多</span>
    </div>
    <div class="comment-cnt">
      <div class="user-info">
        <img :src="user.avatar" class="user-portait" />
        <span class="user-name">
          {{ user.uname }}
        </span>
      </div>
      <div class="content">
        {{ content }}
      </div>
      <div class="created-style">{{ created }} {{ style }}</div>
      <div class="comment-images">
        <div
          class="comment-wrapper"
          v-for="src in images"
          :key="src"
          :style="wrapperStyle(src)"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { DateFormat } from "common/utils";

export default {
  name: "DetailComments",
  props: {
    comments: Object,
  },
  data() {
    return {
      user: null,
      style: null,
      content: null,
      images: null,
    };
  },
  computed: {
    created() {
      return (
        this.comments.list[0] &&
        DateFormat(new Date(this.comments.list[0].created * 1000), "yyyy-MM-dd")
      );
    },
  },
  watch: {
    comments(comments) {
      if (comments.list) {
        this.user = comments.list[0].user;
        this.style = comments.list[0].style;
        this.content = comments.list[0].content;
        this.images = comments.list[0].images;
        this.images && this.images.splice(3);
      }
    },
  },
  methods: {
    wrapperStyle(src) {
      return {
        backgroundImage: `url(${src})`,
      };
    },
  },
};
</script>

<style scoped>
.detail-comments {
  padding: 10px;
  margin-bottom: 5px;
  font-size: 15px;
  overflow: hidden;
  position: relative;
  border-bottom: 5px solid #ededed;
}
.comments-title {
  overflow: hidden;
  padding: 16px 0;
  border-bottom: 1px solid rgba(63, 60, 60, 0.3);
}
.user-portait {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  vertical-align: middle;
}
.user-info {
  font-weight: bold;
  margin: 20px 0 10px;
  line-height: 30px;
}
.content,
.created-style {
  line-height: 25px;
  font-size: 14px;
}
.comment-images {
  display: flex;
}
.comment-wrapper {
  width: 80px;
  height: 80px;
  background-size: cover;
  background-clip: content-box;
  padding: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-right: 5px;
}
</style>