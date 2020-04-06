// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

window.addEventListener("load", function (event) {
    let el = document.querySelector(".save");
    let elLabel = document.querySelector('.label');
    el.addEventListener('click', () => {
        let elInput = document.querySelector("input.content");
        if (elInput.value === '') {
            alert('Empty field');
            return;
        }
        elLabel.innerText = elInput.value;
        elInput.value = '';
    })

    document.querySelector('.todo-button-delete').addEventListener('click', () => {
        elLabel.innerText = ''
    });
});