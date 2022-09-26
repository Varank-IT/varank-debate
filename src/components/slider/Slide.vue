<template>
	<div class="slide" :class="{ 'active': isActive }">
		<h3>{{ info.name }}</h3>
	</div>
</template>

<script>
export default {
	name: 'Slide',
	props: {
		info: {
			type: Object,
			required: true
		},
		isActive: Boolean
	},
	computed: {
		backgroundURL() {
			return `url(${this.info.image})`;
		}
	}
}
</script>

<style scoped>
.slide {
	height: 80vh;
	border-radius: 20px;
	margin: 10px;
	cursor: pointer;
	color: #fff;
	flex: 1;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: relative;
	overflow: hidden;
	transition: all 500ms cubic-bezier(0.625, 0.225, 0.100, 0.890);
	background-image: v-bind(backgroundURL);
}

.slide h3 {
	position: absolute;
	font-size: 24px;
	bottom: 50px;
	left: 20px;
	margin: 0;
	opacity: 0;
}

.slide.active {
	flex: 10;
}

.slide.active h3 {
	opacity: 1;
	transition: opacity 0.3s ease-in 0.4s;
}
</style>