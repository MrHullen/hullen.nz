import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Check if the user previously enabled Clean Read mode
const initialValue = browser ? window.localStorage.getItem('cleanRead') === 'true' : false;

export const cleanRead = writable(initialValue);

// Subscribe to changes and save them to local storage
cleanRead.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('cleanRead', String(value));
  }
});
