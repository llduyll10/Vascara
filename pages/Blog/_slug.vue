<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt">
    <p>Article last updated: {{ article.updatedAt }}</p>

    <nuxt-content :document="article" />
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </article>
</template>
<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch();
    console.log('article', article);
    return { article };
  },
  data () {
    return {};
  },
  head: {
    titleTemplate: '%s - Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'abc', name: 'acb', content: 'abc' }
    ]
  },
  computed: {
    fullName: {
      // getter
      get () {
        return this.firstName + ' ' + this.lastName;
      },
      // setter
      set (newValue) {
        const names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  mounted () {
    console.log('nuxt', this.$nuxt);
  }
};
</script>
<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
