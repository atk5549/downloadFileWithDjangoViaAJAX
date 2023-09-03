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
console.log(scrftoken)




$.ajax({
    method: "POST",
    cache: false,
    url: this.action,
    data: {
      'datatobeckend': data_stringfy},
    dataType: 'json',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRFToken': getCookie('csrftoken')}
})