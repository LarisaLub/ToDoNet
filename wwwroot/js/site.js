window.addEventListener("load", function (event) {
    var el = document.querySelector(".save");
    var elLabel = document.querySelector('.label');
    el.addEventListener('click', function () {
        var elInput = document.querySelector("input.content");
        if (elInput.value === '') {
            alert('Empty field');
            return;
        }
        elLabel.innerText = elInput.value;
        elInput.value = '';
    });

    document.querySelector('.todo-button-delete').addEventListener('click', function () {
        elLabel.innerText = '';
    });
});