import io from 'socket.io-client';

let socket;

export const connectSocket = () => {
  socket = io('http://localhost:2222');
  console.log(`Connecting socket...`);
}

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
}

export const subscribeToChat = (user, callback) => {
  if (!socket) throw new Error("Cannot subscribe to chat - no socket exists");

  if (user.username) {
    socket.on('message_received', msg => {
      console.log(`received message: ${msg}`);
      return callback(msg);
    });
    
    socket.emit('joined_chat', {user: user});
  }
}

export const sendMessageOnChat = (user, message) => {
  if (socket) socket.emit('message_sent', { user: user, message: message });
}

