import { writable } from 'svelte/store';
export const lightbox = writable({ isOpen: false, src: '', alt: '' });
