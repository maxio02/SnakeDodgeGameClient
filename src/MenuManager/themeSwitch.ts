export function switchTheme() {
    const rootElem = document.documentElement;
    let theme = rootElem.getAttribute('theme');
    let newTheme = (theme === 'light') ? 'dark' : 'light';
    rootElem.setAttribute('theme', newTheme);
}

(window as any).switchTheme = switchTheme;