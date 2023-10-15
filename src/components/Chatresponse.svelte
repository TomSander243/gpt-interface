<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollToBottom } from '../routes/chat/page.logic';

	function onChatresponseMount() {
		scrollToBottom();
	}

	export let content: string;

	onMount(onChatresponseMount);
</script>

<p class="chat-response">
	{content}
</p>

<style>
	.chat-response {
		font-size: 1.5vw;
		border-bottom: 1px solid #ccc;
		width: fit-content;
		max-width: fit-content;
		padding: 0.3vw;
		margin-left: 0vw;
		margin-right: 2vw;
		word-wrap: break-word;
		overflow-wrap: break-word;
		word-break: break-word;
	}

	@media only screen and (max-width: 768px) {
		.chat-response {
			font-size: 3vw;
		}
	}
</style>
