// export default function ({ $axios, error: nuxtError }) {
//   $axios.onError((error) => {
//     nuxtError({
//       statusCode: error.response.status,
//       message: error.message
//     });
//     return Promise.resolve(false);
//   });
//   // Set baseURL (both client and server)
//   this.$axios.setBaseURL('https://5cb686b8a3763800149fca7c.mockapi.io/');

//   // Change URL only for client
//   if (process.client) {
//     this.$axios.setBaseURL('https://5cb686b8a3763800149fca7c.mockapi.io/');
//   }

//   // Change URL only for server
//   if (process.server) {
//     this.$axios.setBaseURL('https://5cb686b8a3763800149fca7c.mockapi.io/');
//   }
//   // Adds header: `Authorization: 123` to all requests
//   this.$axios.setToken('123');

//   // Overrides `Authorization` header with new value
//   this.$axios.setToken('456');

//   // Adds header: `Authorization: Bearer 123` to all requests
//   this.$axios.setToken('123', 'Bearer');

//   // Adds header: `Authorization: Bearer 123` to only post and delete requests
//   this.$axios.setToken('123', 'Bearer', ['post', 'delete']);

//   // Removes default Authorization header from `common` scope (all requests)
//   this.$axios.setToken(false);
// }
