<template>
  <div>
	 <!--	 NAVBAR-->
	 <header class="sticky z-50 w-full py-2 bg-blue-300">
		<div class="grid grid-cols-4 gap-4 justify-items-center">
		  <div>BlogGame brand</div>
		  <div>
			 <NuxtLink to="/">
				<button class="rounded-lg px-2 bg-indigo-500 hover:bg-cyan-600">
				  HOME
				</button>
			 </NuxtLink>
		  </div>
		  <div>
			 article searchbar ?
		  </div>
		</div>
	 </header>
	 <NuxtPage />
	 <!--	 BOTTOMBAR-->
	 <div class="bottom-0 w-full bg-blue-200">BlogGame bottombar</div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
</script>
<style scoped></style>
