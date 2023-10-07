import { MessageType } from './messageType';

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
		e.target.value = '';
		return addMessage(input, MessageType.USER, messages);
	} else {
		return messages;
	}
}
