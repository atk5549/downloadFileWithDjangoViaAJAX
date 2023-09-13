document.addEventListener("DOMContentLoaded", function(e){
  console.log("Дом-дерево полностью загружено и пропасено!!!")

  // событие наведения мыши //$("#btn-add-file").mouseenter(function(e) {
  $("#btn-add-file").on('click', function(e) {
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


    // функция генерации uuid / начало
    function generateUUID() { // Public Domain/MIT
      var d = new Date().getTime();//Timestamp
      var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16;//random number between 0 and 16
          if(d > 0){//Use timestamp until depleted
              r = (d + r)%16 | 0;
              d = Math.floor(d/16);
          } else {//Use microseconds since page-load if supported
              r = (d2 + r)%16 | 0;
              d2 = Math.floor(d2/16);
          }
          return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
    }
    // функция генерации uuid / конец



    // GET CSRF-TOKEN
    var csrftoken = getCookie('csrftoken');
    // console.log(csrftoken)


    // GET UUID4-FILENAME
    var curentfilenameuuid = generateUUID()


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



    
    var anydata = {
      "firstNames": ['Вася', 'Саня', 'Серега'],
      "MiddleNames": ['Вася', 'Саня', 'Серега'],
      "LastNames": ['Вася', 'Саня', 'Серега'],
    }

    

    var data = JSON.stringify({'somedata': anydata, 'curentfilename': curentfilenameuuid});

    $.ajax({

      url: "/addfile/",
      method: 'POST',
      headers: {'X-CSRFToken': csrftoken},
      data: data,
      contentType: 'application/json',
      success: function(response) {
        console.log(response);
        window.location.href = "http://127.0.0.1:8000/downloadfinalfile/"
        console.log("File downloaded!!!")

        
      }
    });



    

    
    



  });

  // $.ajax({
  //   url: "/deletefinalfile/",
  //   method: 'GET',
  //   success: function(response) {
  //     window.location.href = "http://127.0.0.1:8000/deletefinalfile/"
  //   }
  // });



  
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