document.addEventListener("DOMContentLoaded", function(e){
  console.log("Дом-дерево полностью загружено и пропасено!!!")

  $("#btn-add-file").mouseenter(function(e) {
    e.preventDefault();
    console.log("Навели курсор на кнопку")
    // функция загрузки куков / начало
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
    };
    // функция загрузки куков / конец

    // GET CSRF-TOKEN
    var csrftoken = getCookie('csrftoken');
    // console.log(csrftoken)


    // // ADD DATA
    // const formData = new FormData();
    // formData.append('datatobackend', '{"fname": "some file name", "fdatas": "вмямвямв"}')

    // // TAKE URL FROM ACTION
    // var url = "/download/";
    // console.log(url);


    // // ADD CORS
    // var options = {
    //   method: 'get',
    //   headers: {'X-CSRFToken': csrftoken},
    //   mode: 'same-origin',
    //   body: "formData"
    // };

    // // ADD FETCH
    // fetch(url, options).then((response) => {
    //   return response.text();
    // }).then((text) => {
    //   console.log(text);
    // });

    var data = JSON.stringify({name: 'John', age: 25});

    $.ajax({

      url: "/addfile/",
      method: 'POST',
      headers: {'X-CSRFToken': csrftoken},
      data: data,
      contentType: 'application/json',
      success: function(response) {
        console.log(response);
      }
    });
  });




  
  // $(".btn").mouseleave(function() {
  //   console.log("Убрали курсор на кнопку")
  //   const crewListUrl = "http://127.0.0.1:8000/static/transit-files/CrewList.xml"
  //   async function get_file_url(url) {
  //       var link_url = document.createElement("a");
  //       link_url.download = url.substring((url.lastIndexOf("/") + 1), url.length);
  //       link_url.href = url;
  //       document.body.appendChild(link_url);
  //       link_url.click();
  //       document.body.removeChild(link_url);
  //       // delete strict(link_url);
  //   };
  //   get_file_url(crewListUrl);
  // })

});


// var mySubmit = document.getElementById('comment-form');

// mySubmit.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("работает")
// });



// SENDING DATA TO SERVER ON DJANGO VIA $ajax(JQUERY)

// $('form#comment-form').submit(function async (event) {
//   event.preventDefault();  // отменяем стандартную отправку формы и страница становится без перезагрузки

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

//   var datatobeckend = {name: "Roman"} // Готовим данные на отправку

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
//     },
//     success: function () {
//       window.onload = start("{% url 'downloadfile'|safe %}");
//     },
//   });
// });