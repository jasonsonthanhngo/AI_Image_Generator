import { surpriseMePrompts } from '../constants';
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt) {
	const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
	const randomPrompt = surpriseMePrompts[randomIndex];
	//Get another random prompt if 2 prompts in a row is the same
	if (randomPrompt === prompt) return getRandomPrompt(prompt);

	return randomPrompt;
}

export async function downloadImage(_id, photo) {
	FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
