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

    let html = ""
    let source = "https://www.themealdb.com/api/json/v1/1/categories.php"

    fetch(source).then(res => res.json()).then(data => {
        for (let i = 1; i < source.length; i++) {

            let number = data.categories[i].idCategory
            let foodName = data.categories[i].strCategory
            let image = data.categories[i].strCategoryThumb
            let desc = data.categories[i].strCategoryDescription

            html += `<tr>
                <td>${number}</td>
                <td><img src="${image}" alt=""></td>
                <td>${foodName}</td>
                <td>${desc}</td>
                <td>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Detail
                </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${foodName}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr> `
            $("#appetizer").html(html)
        }
    })

    $("#switch").click(function () {
        $("#main-content, #sidebar").toggleClass("bg-dark")
        $(".card").toggleClass('bg-card')
        $("#text-mode,.collapse, h5, p, a, i").toggleClass("text-light")
        $(".table, tr, td").toggleClass("text-light")
    })
})