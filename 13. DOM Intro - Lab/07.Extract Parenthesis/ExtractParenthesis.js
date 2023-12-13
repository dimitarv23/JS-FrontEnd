function extract(elementId) {
    const content = document.getElementById(elementId).textContent;

    const regexPattern = /\(([^)]+)\)/g;
    const matches = [];
    let match;

    while ((match = regexPattern.exec(content)) !== null) {
        matches.push(match[1]);
    }

    return matches.join("; ");
}
