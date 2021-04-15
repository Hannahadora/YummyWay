const fileLab = document.querySelector('.fileLab');
const fileBox = document.querySelector('#fileBox');

fileLab.addEventListener('change', fileUpload)

function fileUpload(e) {
    const fileName = e.target.files[0].name;
    fileLab.innerHTML = fileName;
}