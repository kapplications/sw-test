console.log('inside registration script')

this.addEventListener('install', function(event) {
  console.log('Service worker installed.')
});

this.addEventListener('activate', function (event) {
  console.log('Service worker activated.')
})
