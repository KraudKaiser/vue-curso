<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<v-toolbar-title> Gestion de Tareas</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon target="_blank">
				<v-icon>mdi-link</v-icon>
			</v-btn>
			<v-content>
				<show-tareas />
			</v-content>
		</v-app-bar>
	</v-app>
  </template>
  
  <script>
  import ShowTareas from "./components/ShowTareas.vue"
  
  export default {
	name: 'App',
	components: {
		ShowTareas
	}
  }
  </script>
  
  <style>
  </style>
  