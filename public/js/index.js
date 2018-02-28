var socket = io();

socket.on('connect', function() {
  console.log('Connected to Server.');

  socket.emit('createMessage', {
    from: 'Todd',
    text: 'Yup its from me.'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server.')
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
})
