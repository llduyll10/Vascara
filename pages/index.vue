<template>
  <div>
    <div>
      <fbd-layers full-width class="fa-4x">
        <fbd :icon="fas.faCircle" />
        <fbd-layers-text
          transform="shrink-12"
          value="GALSD"
          class="fa-inverse"
        />
      </fbd-layers>
      <fbd :icon="fas.faAddressBook" />
    </div>
    <!-- <p>{{ content }}</p>
    <i class="fa fa-spinner fa-pulse fa-fw" />
    <div v-for="(item, index) in post" :key="index">
      {{ item.id }}
    </div>
    <button @click="refeshPage">
      Refresh page
    </button>
    <button @click="ABC">
      Refresh ABC
    </button>
    <p v-if="$nuxt.isOffline">
      isOffline
    </p>
    <p v-if="$nuxt.isOnline">
      isOnline
    </p> -->
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
export default {
  async asyncData ({ params, $axios, redirect, env }) {
    const post = await $axios.get(
      'https://5cb686b8a3763800149fca7c.mockapi.io/products'
    );
    console.log('envvvvv', env);
    console.log('params', params);
    return {
      post: post.data,
      content: 'Created at ' + new Date(Date.now())
    };
  },
  computed: {
    fas () {
      return fas;
    }
  },
  mounted () {
    console.log('abc', this.$nuxt);
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 500);
    });
  },
  methods: {
    refeshPage () {
      this.$nuxt.refresh();
    },
    ABC () {
      console.log('ABC');
    }
  }
};
</script>
