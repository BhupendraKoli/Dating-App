// Add your JavaScript if necessary for interactivity
document.querySelector('.send-button').addEventListener('click', () => {
    const input = document.querySelector('.chat-input input');
    if (input.value.trim() !== '') {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message', 'sent');
        
        const messageContent = document.createElement('span');
        messageContent.classList.add('message-content');
        messageContent.textContent = input.value;
        
        const messageTime = document.createElement('span');
        messageTime.classList.add('message-time');
        messageTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageContainer.appendChild(messageContent);
        messageContainer.appendChild(messageTime);
        
        document.querySelector('.chat-messages').appendChild(messageContainer);
        
        input.value = '';
    }
});
document.querySelectorAll('.user-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.user-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});