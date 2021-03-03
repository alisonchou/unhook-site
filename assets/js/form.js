const formElem = document.getElementById('uninstall-form');
formElem.addEventListener('submit', () => {
    document.getElementById('form-ctn').classList.add('hidden');
    document.getElementById('after-submit').classList.remove('hidden');
});
