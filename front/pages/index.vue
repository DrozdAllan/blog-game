<template>
  <div>
	 <h1 class="text-3xl font-bold text-orange-500 text-orange">
		Bloggames </h1>
	 <div class="grid grid-cols-3 gap-0.5 flex justify-items-center">
		<div v-for="article in articles.data">
		  <NuxtLink :to="`/article/${article.id}`">
			 <div class="underline-offset-1 underline decoration-sky-500">
				{{ article.attributes.title }}
			 </div>
		  </NuxtLink>
		  <img :src="`${config.API_URL}${article.attributes.image.data.attributes.formats.small.url}`" />
		</div>
	 </div>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig().public;
const {data: articles} = await useFetch('http://localhost:1337/api/articles?sort=updatedAt:desc&populate=image'
);
</script>
