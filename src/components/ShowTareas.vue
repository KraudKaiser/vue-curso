<template>
	<div>
		<h2>Gestion de tareas</h2>
		<new-tarea @addTarea="addTarea" />
		<tareas-list :tareas="tareas" @deleteTarea="deleteTarea" @editedTarea="editTarea"/>
  </div>
</template>

<script>
import NewTarea from './NewTarea.vue';
import TareasList from './TareasList.vue';
export default {
	components:{NewTarea, TareasList},
	data(){
		return{
			tareas:["Aprender Vue", "Aprender Vuex", "Aprender Vuetify"]
		}
	},
	methods:{
		addTarea(tarea){
			this.tareas.push(tarea)
		},
		deleteTarea(index){
			this.tareas.splice(index, 1)
		},
		editTarea(index, texto){
			this.$set(this.tareas,index,texto)
		}
	}
}
</script>

<style>

</style>