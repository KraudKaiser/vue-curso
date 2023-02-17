<template>
  <div>
	<label for="">Filtrar Tareas: </label>
	<input v-model="filtro" type="text">
  </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
	computed:{
		filtro:{
			get(){
				return this.value
			},
			set(val){
				this.setFilter(val)
			}
		}
	},
	methods:{
		...mapMutations(["setFilter"])
	}
}
</script>

<style>

</style>