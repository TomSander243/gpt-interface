<script lang="ts">
	import { onMount } from 'svelte';
	import Chatmessage from '../../components/Chatmessage.svelte';
	import Chatresponse from '../../components/Chatresponse.svelte';
	import { changeKeyClick } from './page.logic';
	import { changeKeyDown } from './page.logic';
	import { userSubmit } from './page.logic';
	import { MessageType } from './messageType';

	let messages: any[] = [];

	function handleUserSubmit(e: any) {
		messages = userSubmit(e, messages);
	}

	onMount(() => {
		const apiKey = localStorage.getItem('api-key');
	});
</script>

<main class="main">
	<div class="select-container">
		<select id="mySelect" class="select-box">
			<option value="" disabled selected>Custom Instructions</option>
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<option value="option3">Option 3</option>
		</select>
	</div>
	<div style="grid-column: 2; justify-self: center;">
		<div class="chat-container">
			<div class="chat-box">
				<Chatmessage content="Hello Gpt!" />
				<Chatresponse content="Hello User!" />
				{#each messages as message}
					{#if message.type === MessageType.USER}
						<Chatmessage content={message.content} />
					{:else}
						<Chatresponse content={message.content} />
					{/if}
				{/each}
			</div>
			<div class="chat-input-container">
				<input type="text" class="chat-input" on:keydown={handleUserSubmit} />
			</div>
		</div>
	</div>
	<div class="button-container" on:click={changeKeyClick} on:keydown={changeKeyDown}>
		<button class="button">Change API Key</button>
	</div>
</main>

<style>
	.chat-container {
		width: 100%;
		max-width: 1000px;
		min-width: 1000px;
		height: 90vh;
		margin: auto;
		display: flex;
		flex-direction: column;
		margin-top: 2vw;
	}

	.chat-box {
		display: flex;
		flex: 1;
		flex-direction: column;
		max-height: 100%;
		overflow-y: auto;
		padding: 2vw;
		font-family: 'IBM Plex Mono', monospace;
	}

	.chat-input-container {
		border-top: 1px solid #555;
		padding: 1vw;
	}

	.chat-input {
		width: 100%;
		padding: 1vw;
		box-sizing: border-box;
		box-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2),
			0 0 40px rgba(255, 255, 255, 0.1);
		font-family: 'IBM Plex Mono', monospace;
	}

	.select-box {
		font-family: 'IBM Plex Mono', monospace;
		background-color: black;
		color: white;
		border: none;
		padding: 10px;
		font-size: 2vw;
		cursor: pointer;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		height: 5vw;
	}

	select:focus {
		outline: none;
	}

	.main {
		position: relative;
		display: flex;
		justify-content: center;
	}

	.select-container {
		position: absolute;
		left: 0;
	}

	.button-container {
		position: absolute;
		right: 0;
	}

	.button {
		font-family: 'IBM Plex Mono', monospace;
		background-color: black;
		color: white;
		border: none;
		padding: 10px;
		font-size: 1vw;
		cursor: pointer;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		height: 2.5vw;
	}

	@media only screen and (max-width: 768px) {
		.chat-container {
			height: 90vh;
			max-width: 400px;
			min-width: 400px;
		}

		.chat-box {
			padding: 4vw;
		}

		.chat-input-container {
			padding: 2vw;
		}

		.chat-input {
			padding: 2vw;
		}

		.main {
			flex-direction: column;
			align-items: center;
		}

		.select-container {
			position: static;
			height: 10vw;
		}

		.select-box {
			font-size: 5vw;
			height: 10vw;
		}
	}

	@media only screen and (min-width: 2000px) {
		.chat-container {
			height: 90vh;
			max-width: 1200px;
			min-width: 1200px;
		}
	}

	.chat-box::-webkit-scrollbar {
		width: 12px;
	}

	.chat-box::-webkit-scrollbar-track {
		background: #000; /* Track background */
	}

	.chat-box::-webkit-scrollbar-thumb {
		background: #555; /* Scroll handle */
	}

	.chat-box::-webkit-scrollbar-thumb:hover {
		background: #888; /* Scroll handle on hover */
	}

	/* For Firefox */
	.chat-box {
		scrollbar-width: thin;
		scrollbar-color: #555 #000; /* Scroll handle and track background */
	}
</style>
