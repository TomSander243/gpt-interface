<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollToBottom } from '../routes/chat/page.logic';

	function onChatmessageMount() {
		scrollToBottom();
	}

	export let content: string;

	onMount(onChatmessageMount);
</script>

<p class="chat-message">
	{content}
</p>

<style>
	.chat-message {
		font-size: 1.5vw;
		border-bottom: 1px solid #ccc;
		width: fit-content;
		max-width: calc(100% - 4vw);
		padding: 0.3vw;
		margin-left: auto;
		margin-right: 0vw;
		word-wrap: break-word;
		overflow-wrap: break-word;
		word-break: break-word;
	}

	@media only screen and (max-width: 768px) {
		.chat-message {
			font-size: 3vw;
		}
	}
</style>
