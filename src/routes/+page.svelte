<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const input = document.querySelector('body > div > main > div > input') as HTMLInputElement;

		input!.addEventListener('input', function () {
			const regex = /^(sk-|pk-)[a-zA-Z0-9]{48}$/;

			if (regex.test(input!.value)) {
				localStorage.setItem('api-key', input!.value);
				window.location.href = '/chat';
			}
		});
	});
</script>

<main>
	<div class="container">
		<h1 class="text">Enter your API Key</h1>
		<input type="password" class="input" />
	</div>
</main>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 50vh;
	}

	.input {
		width: 50vw;
		max-width: 300px;
		min-width: 150px;
		height: 5vh;
		font-size: 2vh;
		box-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2),
			0 0 40px rgba(255, 255, 255, 0.1);
	}

	.text {
		font-size: clamp(25px, 3vw, 50px);
	}

	@media only screen and (max-width: 600px) {
		.container {
			height: 70vh;
		}

		.input {
			width: 80vw;
			font-size: 6vh;
		}

		.text {
			font-size: 6vw;
		}
	}

	@media only screen and (min-width: 1080px) {
		.input {
			width: 30vw;
			max-width: 500px;
			font-size: 3vh;
		}
	}
</style>
