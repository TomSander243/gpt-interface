import { MessageType } from './messageType';
import { onMount } from 'svelte';
import OpenAI from 'openai';

export function getCookie(name: string) {
	const cookieArr = document.cookie.split(';');

	for (let i = 0; i < cookieArr.length; i++) {
		let cookiePair = cookieArr[i].split('=');

		cookiePair[0] = cookiePair[0].trim();

		if (cookiePair[0] === name) {
			return decodeURIComponent(cookiePair[1]);
		}
	}

	return null;
}

export let apiKey: string;

export function initAPIKey() {
	onMount(() => {
		apiKey = getCookie('apiKey')!;
	});
}

export function changeKeyClick() {
	document.cookie = 'apiKey=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
	window.location.href = '/';
}

export function changeKeyDown(event: KeyboardEvent) {
	if (event.key === 'Enter') {
		document.cookie = 'apiKey=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		window.location.href = '/';
	}
}

export function addMessage(message: string | null, type: MessageType, messages: any[]) {
	if (message === null) {
		return messages;
	}

	const newMessage = {
		content: message,
		type: type
	};

	return [...messages, newMessage];
}

export function userSubmit(e: any, messages: any[]) {
	if (e.key === 'Enter' && e.target.value !== '') {
		const input = e.target.value;
		return addMessage(input, MessageType.USER, messages);
	} else {
		return messages;
	}
}

export async function gptResponse(e: any, messages: any[]) {
	if (e.key === 'Enter' && e.target.value !== '') {
		const input = e.target.value;
		e.target.value = '';
		const response = await fetchGPTResponse(input);
		return addMessage(response, MessageType.RESPONSE, messages);
	} else {
		return messages;
	}
}

export function setApiKey(callback: (value: string) => void) {
	const apiKey = getCookie('apiKey');
	if (apiKey !== null) {
		callback(apiKey);
	}
}

async function fetchGPTResponse(input: string) {
	const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
	const chatCompletion = await openai.chat.completions.create({
		messages: [{ role: 'user', content: input }],
		model: 'gpt-3.5-turbo',
		max_tokens: 3
	});
	return chatCompletion.choices[0].message.content;
}
