
export function switchTheme() {
    const rootElem = document.documentElement;
    let theme = rootElem.getAttribute('theme');
    let newTheme = (theme === 'light') ? 'dark' : 'light';
    rootElem.setAttribute('theme', newTheme);

    // Save the theme in a cookie
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`; // cookie valid for 1 year
}

export type quality = 'L' | 'M' | 'H';

export function switchQuality() {
    const rootElem = document.documentElement;
    let quality = rootElem.getAttribute('quality');

    let newQuality: quality;
    switch (quality) {
        case 'L':
            newQuality = 'M';
            break;
        case 'M':
            newQuality = 'H';
            break;
        case 'H':
            newQuality = 'L';
            break;
    }
    rootElem.setAttribute('quality', newQuality);
    // Save the theme in a cookie
    document.cookie = `quality=${newQuality}; path=/; max-age=31536000`; // cookie valid for 1 year
}

function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}


export function applySavedSettings() {
    const savedTheme = getCookie('theme');
    const savedQuality = getCookie('quality');
    if (savedTheme) {
        document.documentElement.setAttribute('theme', savedTheme);
    }
    if (savedQuality) {
        document.documentElement.setAttribute('quality', savedQuality);
    }
}
applySavedSettings();
(window as any).switchTheme = switchTheme;
(window as any).switchQuality = switchQuality;
