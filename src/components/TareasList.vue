<template>
  <ul>
	<li v-for="(tarea, index) in tareas" :key="index">
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
export default {
	data(){
		return{
			editando:null,
			texto:""
		}
	},
	methods:{
		deleteTarea(index){
			this.$emit("deleteTarea", index)
		},
		editTarea(index, tarea){
			this.editando = index
			this.texto = tarea
		},
		emitTarea(){
			this.$emit("editedTarea", this.editando, this.texto)
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