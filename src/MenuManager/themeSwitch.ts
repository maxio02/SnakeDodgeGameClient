
export function switchTheme() {
    const rootElem = document.documentElement;
    let theme = rootElem.getAttribute('theme');
    let newTheme = (theme === 'light') ? 'dark' : 'light';
    rootElem.setAttribute('theme', newTheme);

     // Save the theme in a cookie
     document.cookie = `theme=${newTheme}; path=/; max-age=31536000`; // cookie valid for 1 year
}

function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

export function applySavedTheme() {
    const savedTheme = getCookie('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('theme', savedTheme);
    }
}
applySavedTheme();
(window as any).switchTheme = switchTheme;
