
const getFullMonth = (dt) => {
    const locale = navigator.languages !== undefined ? navigator.languages[0] : navigator.language;
    const fullMonth = dt.toLocaleDateString(locale, { month: 'long' });
    return fullMonth
}

export { getFullMonth };