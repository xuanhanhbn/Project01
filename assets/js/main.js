function send () {
    var elName = document.getElementById('name');
    var elMail = document.getElementById('email');

    if(elName.value.length == 0 && elMail.value.length == 0 ) {
        alert('Vui Lòng Nhập Lại Thông Tin');
    } else {
        alert('Chúc Bạn May Mắn Lần Sau');
    }
}


var moDal = document.querySelector('.modal');
var closeModal = document.getElementById('close');
closeModal.addEventListener('click' , cLoseModal);


function cLoseModal(){
    moDal.classList.add('close-modal');

    location.href = "./index.html";
}