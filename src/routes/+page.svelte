<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const input = document.querySelector('body > div > main > div > input') as HTMLInputElement;

		input!.addEventListener('input', function () {
			const regex = /^(sk-|pk-)[a-zA-Z0-9]{48}$/;

			if (regex.test(input!.value)) {
				window.location.href = '/test';
			}
		});
	});
</script>

<main>
	<div class="main">
		<h1 class="text">Enter your API Key</h1>
		<input type="password" class="input" />
	</div>
</main>

<style>
	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 350px;
	}

	.input {
		width: 22%;
		height: 15%;
		font-size: 25px;
		box-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2),
			0 0 40px rgba(255, 255, 255, 0.1);
	}

	.text {
		font-size: clamp(25px, 3vw, 50px);
	}
</style>
