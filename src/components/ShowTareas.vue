<template>
	<v-container class="grey lighten -3">
		<h2>Gestion de tareas</h2>
		<span>Vigentes: {{ getCurrentTareas }}</span> <span>Eliminadas: {{ getEliminatedTareas }}</span> <span>Totales: {{ getTotalTareas }} </span>
		<new-tarea />
		<br>
		<tareas-filter></tareas-filter>

		<div v-if="cargando" class="cargando"><br><br>Cargando...</div>
		<tareas-list v-else />
		<tareas-notification :notificar="notificar" />
	</v-container>
</template>

<script>
import {mapActions, mapState} from "vuex"
import NewTarea from './NewTarea.vue';
import TareasList from './TareasList.vue';
import TareasFilter from './TareasFilter.vue';
import TareasNotification from './TareasNotification.vue';
export default {
	components:{NewTarea, TareasList, TareasFilter, TareasNotification},
	mounted(){
		this.cargarTareas()
	},
	computed:{
		...mapState(["cargando", "tareas", "notificar", "eliminated"]),
		getCurrentTareas() {
			return this.tareas.length
		},
		getEliminatedTareas(){
			return this.eliminated
		},
		getTotalTareas(){
			return this.tareas.length + this.eliminated
		}
	},
	methods:{
		...mapActions(["cargarTareas"])

		
	}
}
</script>

<style>

</style>