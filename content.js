// Listen for messages from the webpage
document.addEventListener('SFConqueror', function(e) {
    const data = e.detail;
    
    if (data.action === 'type') {
        simulateTyping(data.text);
    } else if (data.action === 'tab') {
        simulateTab();
    } else if (data.action === 'enter') {
        simulateEnter();
    }
});

function simulateTyping(text) {
    const element = document.activeElement;
    if (element) {
        element.value = text;
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
    }
}

function simulateTab() {
    document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Tab',
        code: 'Tab',
        keyCode: 9,
        which: 9,
        bubbles: true
    }));
}

function simulateEnter() {
    document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        which: 13,
        bubbles: true
    }));
}
