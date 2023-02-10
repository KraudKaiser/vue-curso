<template>
	<div>
		<h2>Gestion de tareas</h2>
		<span>Vigentes: {{ getCurrentTareas }}</span> <span>Eliminadas: {{ getEliminatedTareas }}</span> <span>Totales: {{ getTotalTareas }} </span>
		<new-tarea @addTarea="addTarea" />
		<br>
		<tareas-filter v-model="filtro" ></tareas-filter>
		<tareas-list :tareas="getFiltredTareas" @deleteTarea="deleteTarea" @editedTarea="editTarea"/>
  </div>
</template>

<script>
import NewTarea from './NewTarea.vue';
import TareasList from './TareasList.vue';
import TareasFilter from './TareasFilter.vue';
export default {
	components:{NewTarea, TareasList, TareasFilter},
	computed:{
		getFiltredTareas(){
			let reg = new RegExp(this.filtro, )
			return this.tareas.filter(tarea => reg.test(tarea))
		},
		getCurrentTareas(){
			return this.tareas.length
		},
		getEliminatedTareas(){
			return this.eliminated
		},
		getTotalTareas(){
			return this.tareas.length + this.eliminated
		}
	},
	data(){
		return{
			tareas:["Aprender Vue", "Aprender Vuex", "Aprender Vuetify"],
			filtro:"",
			eliminated: 0
		}
	},
	methods:{
		addTarea(tarea){
			this.tareas.push(tarea)
		},
		deleteTarea(index){
			this.tareas.splice(index, 1)
			this.eliminated ++ 
		},
		editTarea(index, texto){
			this.$set(this.tareas,index,texto)
		}
	}
}
</script>

<style>

</style>