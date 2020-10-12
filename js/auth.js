function init() {

    var modal = document.getElementById("firstModal");

    document.getElementById("linck-btn").onclick = function () {
        modal.style.display = "block";
    };

    document.querySelector(".close").onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};

init();
