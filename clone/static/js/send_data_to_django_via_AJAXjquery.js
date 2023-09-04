// SENDING DATA TO SERVER ON DJANGO VIA $ajax(JQUERY)

$('form#comment-form').submit(function async (event) {
  event.preventDefault();  // отменяем стандартную отправку формы и страница становится без перезагрузки

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

  var datatobeckend = {name: "Roman"} // Готовим данные на отправку

  $.ajax({
    // обязательный параметр url, его значение должно совпадать с 1м параметром 
    // Django: "path('download/', views.download, name="downloadfile")" и перед ним должен быть слэш
    url: '/download/', 
    method: 'POST',
    data: datatobeckend,
    dataType: 'json',  // ожидаем JSON в ответе
    headers: {
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRFToken': getCookie('csrftoken')
    }
  });
});