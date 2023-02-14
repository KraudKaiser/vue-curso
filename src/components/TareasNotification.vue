<template>
  <div class="box" :class="notificar">
	{{ message }}
  </div>
</template>

<script>
	let types = ["eliminar, editar, agregar"]
export default {
	data(){
		return{
			
		}
	},
	props:{
		notificar:{
			type:String, validator: value => types.includes(value)
		}
	},
	computed:{
		message(){
			switch(this.notificar){
				case "eliminar":
					return "se elimino la tarea"
				case "editar":
					return "se edito la tarea"
				case "agregar":
					return "se agrego la tarea"
				default:
					return ""
			}
		}
	}
}
</script>

<style scoped>
	.box{
		position: absolute;
		top: 1%;
		left: 45%;
		width: 10%;
		padding: 10px;
	}

	.agregar{
		background-color: green;
		color: white;
	}

	.eliminar{
		background-color: red;
		color: white;
	}

	.editar{
		background-color: blueviolet;
		color: white;
	}
</style>