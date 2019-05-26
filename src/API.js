import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3030");

/**
 *  Suscribes to room-connection-data and excecutes the callback function
 * @param {function} callback
 */
function suscribeToRoomConnectionData(callback) {
  socket.on("room-connection-data", connectionData => callback(connectionData));
}

/**
 * Sends videocall creator connection data to be stored on server memory
 * @param {Object} data Connection data of the videocall creator
 */
function createRoom(data) {
  socket.emit("create-room-data", data);
}
/**
 *  Gets the connection data of a videocall by ID
 * @param {String} roomId
 */
function connectToRoom(roomId) {
  socket.emit("connect-to-room", roomId);
}

function getSocketId() {
  return socket.id;
}

export default {
  suscribeToRoomConnectionData,
  createRoom,
  connectToRoom,
  getSocketId
};
