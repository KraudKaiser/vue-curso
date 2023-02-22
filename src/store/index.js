import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	tareas:[],
	filtro:"",
	cargando: false,
	notificar:null,
	eliminated:0
  },
  getters: {
	getFiltredTareas(state){
		let reg = new RegExp(state.filtro, )
		return state.tareas.filter(tarea => reg.test(tarea))
	}
  },
  mutations: {
	setTareas(state, tareas){
		state.tareas = tareas
	},
	agregarTarea(state, tarea){
		state.tareas.push(tarea)
		state.notificar = "agregar"
	},
	eliminarTarea(state, index){
		state.tareas.splice(index, 1)
		state.notificar = "eliminar"
		state.eliminated++
	},
	editarTarea(state,{index, tarea}){
		Vue.set(state.tareas, index, tarea)
		state.notificar = "editar"
	},
	setFilter(state, value){
		state.filtro = value
	},
	setCargando(state, value){
		state.cargando = value
	}
},
	actions: {
	cargarTareas({commit}){
		commit("setCargando", true)
		setTimeout(()=>{
			commit("setTareas", ["Aprender Vue", "Aprender Vuex", "Aprender Vuetify"])
			commit("setCargando", false)
		}, 1500)
	}
  },
  modules: {
  }
})
