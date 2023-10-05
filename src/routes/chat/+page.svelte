<main class="main">
	<div class="select-container">
		<select id="mySelect" class="select-box">
			<option value="" disabled selected>Select an option</option>
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<option value="option3">Option 3</option>
		</select>
	</div>
	<div style="grid-column: 2; justify-self: center;">
		<div class="chat-container">
			<div class="chat-box" />
			<p class="chat-message">testaapo test test test test test test</p>
			<p class="chat-response">test asdfuhjkasd asdkfgasdjhf asdfasasdfasdfasdfsfddfad asdfsf</p>
			<div class="chat-input-container">
				<input type="text" class="chat-input" />
			</div>
		</div>
	</div>
</main>

<style>
	.chat-container {
		width: 100%;
		max-width: 600px;
		height: 90vh;
		border: 1px solid #ccc;
		margin: auto;
		display: flex;
		flex-direction: column;
		margin-top: 2vw;
	}

	.chat-box {
		display: flex;
		justify-content: flex-end;
		flex: 1;
		overflow: auto;
		padding: 2vw;
		font-family: 'IBM Plex Mono', monospace;
	}

	.chat-input-container {
		border-top: 1px solid #ccc;
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

	.chat-message {
		font-size: 1.5vw;
		border: 1px solid #ccc;
		width: fit-content;
		max-width: calc(100% - 4vw);
		padding: 0.3vw;
		margin-left: auto;
		margin-right: 1vw;
		word-wrap: break-word;
		overflow-wrap: break-word;
		word-break: break-word;
	}

	.chat-response {
		font-size: 1.5vw;
		border: 1px solid #ccc;
		width: fit-content;
		max-width: fit-content;
		padding: 0.3vw;
		margin-left: 1vw;
		margin-right: 2vw;
		word-wrap: break-word;
		overflow-wrap: break-word;
		word-break: break-word;
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

	@media only screen and (max-width: 768px) {
		.chat-container {
			height: 70vh;
			max-width: 400px;
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

		.chat-message {
			font-size: 3vw;
		}

		.chat-response {
			font-size: 3vw;
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
			max-width: 800px;
		}
	}
</style>
