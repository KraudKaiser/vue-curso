<template>
	<div>
		<h2>Gestion de tareas</h2>
		<span>Vigentes: {{ getCurrentTareas }}</span> <span>Eliminadas: {{ getEliminatedTareas }}</span> <span>Totales: {{ getTotalTareas }} </span>
		<new-tarea @addTarea="addTarea" />
		<br>
		<tareas-filter v-model="filtro" ></tareas-filter>

		<div v-if="cargando" class="cargando"><br><br>Cargando...</div>
		<tareas-list v-else :tareas="getFiltredTareas" @deleteTarea="deleteTarea" @editedTarea="editTarea"/>
		<tareas-notification :notificar="notificar" />
  </div>
</template>

<script>
import NewTarea from './NewTarea.vue';
import TareasList from './TareasList.vue';
import TareasFilter from './TareasFilter.vue';
import TareasNotification from './TareasNotification.vue';
export default {
	components:{NewTarea, TareasList, TareasFilter, TareasNotification},
	mounted(){
		this.cargando = true
		setTimeout(()=>{
			this.tareas = ["Aprender Vue", "Aprender Vuex", "Aprender Vuetify"]
			this.cargando = false
		}, 1500)
	},
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
			eliminated: 0,
			notificar: null,
			cargando: false
		}
	},
	methods:{
		setNotification(val){
			this.notificar = val
		},
		addTarea(tarea){
			this.tareas.push(tarea)
			this.setNotification("agregar")
		},
		deleteTarea(index){
			this.tareas.splice(index, 1)
			this.eliminated ++ 
			this.setNotification("eliminar")
		},
		editTarea(index, texto){
			this.$set(this.tareas,index,texto)
			this.setNotification("editar")
		}
	}
}
</script>

<style>

</style>