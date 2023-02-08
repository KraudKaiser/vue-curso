<template>
  <div>
	<label for="tareaInput">Nueva Tarea: </label>
	<input type="text" v-model="tarea" name="tareaInput">
	<button @click="agregarTarea">Agregar Tarea</button>
  </div>
</template>

<script>
export default {
	data(){
		return{
			tarea:""
		}
	},
	methods:{
		agregarTarea(){
			if(this.tarea.length > 0){
				this.$emit("addTarea", this.tarea)
			}else{
				alert("La Tarea no puede estar vacia")
			}
		}
	}
}
</script>

<style>

</style>