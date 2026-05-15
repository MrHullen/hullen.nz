import { writable } from 'svelte/store';
export const activeSection = writable('system'); // Defaults to the top of the page

/**
 * Determines whether a navigation item should be highlighted.
 * @param section - The section id this nav item represents (e.g. 'system', 'code', 'minis', 'logs')
 * @param pathname - The current page pathname from $page.url.pathname
 * @param currentSection - The current active section from the scrollspy store
 */
export function isActive(section: string, pathname: string, currentSection: string): boolean {
  if (section === 'logs') {
    return pathname.startsWith('/blog') || (pathname === '/' && currentSection === 'logs');
  }
  return pathname === '/' && currentSection === section;
}
