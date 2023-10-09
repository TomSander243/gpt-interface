import { MessageType } from './messageType';
import OpenAI from 'openai';

export function changeKeyClick() {
	localStorage.removeItem('api-key');
	window.location.href = '/';
}

export function changeKeyDown(event: KeyboardEvent) {
	if (event.key === 'Enter') {
		localStorage.removeItem('api-key');
		window.location.href = '/';
	}
}

export function addMessage(message: string, type: MessageType, messages: any[]) {
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

// Implement better way to store API key
const openai = new OpenAI({});

async function fetchGPTResponse(input: string) {
	const chatCompletion = await openai.chat.completions.create({
		messages: [{ role: 'user', content: input }],
		model: 'gpt-3.5-turbo',
		max_tokens: 3
	});
	return chatCompletion.choices[0].message.content;
}
