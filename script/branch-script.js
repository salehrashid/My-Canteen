$(document).ready(function () {
    document.getElementById("button-toggle").addEventListener("click", () => {
        document.getElementById("sidebar").classList.toggle("active-sidebar")
        document.getElementById("main-content").classList.toggle("active-main-content")
    })

    $("#button-toggle").click(function () {
        $("#icon").toggleClass("bxs-right-arrow-alt bx-md bxs-left-arrow-alt bx-md")
    })

    //for API
    let html = ""
    // let source = "http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
    let source = "https://www.emsifa.com/api-wilayah-indonesia/api/regencies/32.json"

    fetch(source).then(res => res.json()).then(data => {
        for (let i = 1; i < source.length; i++) {
            html += "<tr>" +
                "<td>" + i + "</td>" +
                "<td>" + data[i].name + "</td>" +
                "</tr>"
            $("#data-api").html(html)
        }
    })

    $("#switch").click(function () {
        $("#main-content, #sidebar").toggleClass("bg-dark")
        $(".card").toggleClass('bg-card')
        $("#text-mode,.collapse, h5, p, a, i").toggleClass("text-light")
        $(".table, tr, td").toggleClass("text-light")
    })
})