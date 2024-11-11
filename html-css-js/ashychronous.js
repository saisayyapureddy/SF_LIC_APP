console.log("Ashychronous using promise");

function checkIsSuccess(data) {
  return new Promise(function (resolve, reject) {
    if (data === "sai") resolve("success");
    else {
      reject("rejected");
    }
  });
}

checkIsSuccess("")
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

//using fetch to call the api

fetch("https://api.github.com/users/karkranikhil")
  .then(function (result) {
    return result.json();
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
