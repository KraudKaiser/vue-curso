<template>
  <div>
	<label for="">Filtrar Tareas: </label>
	<input v-model="filtro" type="text">
  </div>
</template>

<script>
export default {
	props:{
		value: String
	},
	computed:{
		filtro:{
			get(){
				return this.value
			},
			set(val){
				this.$emit("input",val)
			}
		}
	}
}
</script>

<style>

</style>