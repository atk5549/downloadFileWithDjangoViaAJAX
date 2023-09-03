// функция отправки на сервер методом fetch
const sendData = async (url) => {

  // Генерирую uuid4 для названия файла
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
  // получение cstf-токена из Cookie
  const scrftoken = getCookie('csrftoken')

  // настройка заголовков CORS
  var nastroyka_zaprosa = {
    method: 'POST',
    credentials: "same-origin",
    headers:{'Accept': 'application/json; charset=utf-8', 'X-Requested-Width': 'XMLHttpRequest', 'X-CSRFToken': getCookie('csrftoken')},
    body: {
      'datatobeckend': {name: "Roman"},
    },
  }


  // отправка запроса на сервер
  const response = await fetch(url, nastroyka_zaprosa);
  return await console.log(response.text());
}

//let name_token = "anyfilename"
//name_token = generateUUID()

// запуск функции передачи на сервер
sendData('http://127.0.0.1:8000');