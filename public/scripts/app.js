console.log($)
console.log('working')


const handleSuccess = (data) => {
  data.forEach(album => {
    $(".albums").append(`<h2>${album.title}</h2> by ${album.artist}`);
  })
}
const handleTacoSuccess = (data) => {
  data.forEach(taco => {
    $(".tacos").append(`<p>${taco.name}</p>`);
  })
}

const handleError = (xhr, status, errorThrown) => console.log("uh oh");

$.ajax({
  method: "GET",
  url: "http://localhost:3000/api/albums",
  success: handleSuccess,
  error: handleError
});


$.ajax({
  method: "GET",
  url: "http://localhost:3000/api/taquerias",
  success: handleTacoSuccess,
  error: handleError
});


