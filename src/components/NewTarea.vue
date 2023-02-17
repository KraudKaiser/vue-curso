<template>
  <div>
	<label for="tareaInput">Nueva Tarea: </label>
	<input type="text" v-model="tarea" name="tareaInput" @keyup.enter="newTarea">
	<button @click="newTarea">Agregar Tarea</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	data(){
		return{
			tarea:""
		}
	},
	methods:{
		...mapMutations(["agregarTarea"]),
		newTarea(){
			if(this.tarea.length > 0){
				this.agregarTarea(this.tarea)
				this.tarea = ""
			}else{
				alert("La Tarea no puede estar vacia")
			}
		}
	}
}
</script>

<style>

</style>