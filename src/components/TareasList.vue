<template>
  <ul>
	<li v-for="(tarea, index) in getFiltredTareas" :key="index">
		{{ tarea }}
		
	<template v-if="editando === index">
		<input type="text" v-model="texto"/>
		<button @click="emitTarea">Confirmar</button>
	</template>
	<template v-else>
		<button class="editar" @click="editTarea(index, tarea)">Editar</button>
		<button @click="deleteTarea(index)" class="eliminar">Eliminar</button>
	</template>
	</li>
  </ul>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"
export default {
	computed:{
		...mapGetters(["getFiltredTareas"])
	},
	data(){
		return{
			editando:null,
			texto:""
		}
	},
	methods:{
		...mapMutations(["eliminarTarea", "editarTarea"]),
		deleteTarea(index){
			this.eliminarTarea(index)
		},
		editTarea(index, tarea){
			this.editando = index
			this.texto = tarea
		},
		emitTarea(){
			this.editarTarea({index:this.editando, tarea:this.texto})
			this.editando = null
			this.texto = ""
		}
	},
	props:{
		tareas:{}
	},
}
</script>

<style>
	.editar{
		border: none;
		background-color: none;
		color: violet;
	}
	.eliminar{
		border: none;
		background-color: none;
		color: red;
	}
</style>