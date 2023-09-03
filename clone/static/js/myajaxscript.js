
// FETCH FETCH FETCH FETCH FETCH FETCH FETCH FETCH FETCH FETCH FETCH FETCH FETCH

let form = document.querySelector("#comment-form")
form.onsubmit = async function (event) {
  console.log("DOWNLOAD FILE WORKING")
  event.preventDefault();


  var datatobeckend = {name: "Roman"} // Готовим данные на отправку

  

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }


  // отправка запроса на сервер
  var response = await fetch('http://127.0.0.1:8000/download/', {
    method: 'POST',
    headers:{'Content-Type': 'application/json', 'X-CSRFToken': getCookie('csrftoken'), 'X-Requested-With': 'XMLHttpRequest'},
    body: JSON.stringify(datatobeckend)
  })
  return await response;

}

//let name_token = "anyfilename"
//name_token = generateUUID()






// // AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX AJAX

// // Желательный шаг отловить событие submit и по его событию запустить функцию 
// $('form#comment-form').submit(function async (event) {
//   event.preventDefault();  // отменяем стандартную отправку формы и страница становится без перезагрузки
  
//   var datatobeckend = {name: "Roman"} // Готовим данные на отправку

//   function getCookie(name) {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
//   }

//   $.ajax({
//     // обязательный параметр url, его значение должно совпадать с 1м параметром 
//     // Django: "path('download/', views.download, name="downloadfile")" и перед ним должен быть слэш
//     url: '/download/', 
//     method: 'POST',
//     data: datatobeckend,
//     dataType: 'json',  // ожидаем JSON в ответе
//     headers: {
//       'Accept': 'application/json',
//       'X-Requested-With': 'XMLHttpRequest',
//       'X-CSRFToken': getCookie('csrftoken')
//     }
//   });
// });







// // Генерирую uuid4 для названия файла
// function generateUUID() { // Public Domain/MIT
//   var d = new Date().getTime();//Timestamp
//   var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//       var r = Math.random() * 16;//random number between 0 and 16
//       if(d > 0){//Use timestamp until depleted
//           r = (d + r)%16 | 0;
//           d = Math.floor(d/16);
//       } else {//Use microseconds since page-load if supported
//           r = (d2 + r)%16 | 0;
//           d2 = Math.floor(d2/16);
//       }
//       return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
//   });
// }