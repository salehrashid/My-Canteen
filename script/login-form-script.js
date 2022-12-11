function onClickPasswd() {
    let click = document.getElementById("password")
    if (click.type === "password") {
        click.type = "text"
    } else {
        click.type = "password"
    }
}

$('.image').tilt({
    glare: true,
    maxGlare: .5
})

$("#submit-registration").click(function () {
    Swal.fire({
        title: 'Successful',
        width: 600,
        icon: 'success',
        padding: '3em',
        color: '#716add',
        background: '#fff url("https://sweetalert2.github.io/images/trees.png")',
        backdrop: `rgba(0,0,123,0.4) url("https://sweetalert2.github.io/images/nyan-cat.gif") left top no-repeat`

    }).then((result) => {
        $('#nav-tab button[data-bs-target="#nav-login"]').tab("show")
        $('#user-login').val($("#reg-username").val())
        $("#user-password").val($("#reg-password").val())
    })
})

function onSubmitLogin() {
    let username = $("#username").val()
    let password = $("#password").val()
    let userLogin = $("#user-login").val()
    let passwdLogin = $("#user-password").val()
    if (userLogin !== username || passwdLogin !== password) {
        let wrongAudio = document.createElement('audio')
        wrongAudio.setAttribute("src", "/audio/minecraft-hit.mp3")
        wrongAudio.addEventListener("ended", function () {
            document.removeChild(this)
        }, false)
        Swal.fire({
            icon: "error",
            title: "Wrong",
            text: "Wrong password or username"
        })
        wrongAudio.play()
    } else {
        Swal.fire({
            icon: "success",
            text: "Successful",
            title: "Thank you for login"
        }).then((result) => {
            window.location = "food-page.html"
        })
    }
}