export function init(state, label) {
    return { ...state, label:label, initialized: true };
}