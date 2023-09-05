const myForm = document.getElementById('comment-form');

myForm.addEventListener('click', () => {

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
  var csrftoken = getCookie('csrftoken');



  $.ajax({
    method: "POST",
    headers: {'X-CSRFToken': csrftoken},
    url: this.action,
    data: 'Mytext',
    dataType: "text",
    cache: false,
    success: function() {
      console.log('WORK WORK @@@')
    }
  })
})
