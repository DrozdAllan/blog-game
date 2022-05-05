<template>
  <div>
	 <h1> {{ article.data.attributes.title }} </h1>
	 Created {{ article.data.attributes.createdAt }}, Edited {{ article.data.attributes.updatedAt }} <img
		:src="`${config.API_URL}${article.data.attributes.image.data.attributes.url}`" />
	 <p>{{ article.data.attributes.content }}</p>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig().public;
const route = useRoute();
const {data: article} = await useFetch('http://localhost:1337/api/articles/' + route.params.id + '?populate=image');
</script>
