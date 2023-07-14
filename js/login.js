function login() {
    var id = document.getElementById("ID");
    var password = document.getElementById("password");

    if (id.value == "") {
        alert("아이디를 입력해주세요.");
        return false;
    }
    if (password.value == "") {
        alert("비밀번호를 입력해주세요.");
        return false;
    }

    // 로그인 처리 이후
    window.location.href = "./mainpage.html";
    return false;
}
