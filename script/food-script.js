$(document).ready(function () {
    $("#status").fadeOut(10000)
    $("#preloader").delay(1000).fadeOut(1000)
    $("body").delay(500).css({"overflow": "visible"})

    document.getElementById("button-toggle").addEventListener("click", () => {
        document.getElementById("sidebar").classList.toggle("active-sidebar")
        document.getElementById("main-content").classList.toggle("active-main-content")
    })

    $("#button-toggle").click(function () {
        $("#icon").toggleClass("bxs-right-arrow-alt bx-md bxs-left-arrow-alt bx-md")
    })

    $("#switch").click(function () {
        $("#main-content, #sidebar").toggleClass("bg-dark")
        $(".card").toggleClass('bg-card')
        $("#text-mode,.collapse, h5, p, a, i").toggleClass("text-light")
    })
})