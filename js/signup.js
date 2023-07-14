var totalCheckbox = document.getElementById("total-check");
var firstCheckbox = document.getElementById("first-check");
var secondCheckbox = document.getElementById("second-check");

function toggleCheckboxes() {
    if (totalCheckbox.checked) {
        firstCheckbox.checked = true;
        secondCheckbox.checked = true;
    } else {
        firstCheckbox.checked = false;
        secondCheckbox.checked = false;
    }
}

function toggleTotalCheck() {
    if (firstCheckbox.checked && secondCheckbox.checked) {
        totalCheckbox.checked = true;
    } else {
        totalCheckbox.checked = false;
    }
}

function signup() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var id = document.getElementById("ID");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");

    if (name.value == "") {
        alert("이름을 입력해주세요.");
        name.focus();
        return false;
    }
    if (email.value == "") {
        alert("이메일을 입력해주세요.");
        email.focus();
        return false;
    }
    if (password.value == "") {
        alert("비밀번호를 입력해주세요.");
        password.focus();
        return false;
    }
    if (password.value.length < 10) {
        alert("비밀번호는 10자 이상이어야 합니다.");
        return false;
    }
    if (password2.value == "") {
        alert("비밀번호 확인을 입력해주세요.");
        password.focus();
        return false;
    }
    if (password2.value != password.value) {
        alert("비밀번호가 일치하지 않습니다.");
        password2.focus();
        return false;
    }
    if (totalCheckbox.checked != true) {
        alert("서비스 약관에 동의해주세요.");
        totalCheckbox.focus();
        return false;
    }

    //회원가입 처리 이후
    alert(name.value + "님 환영합니다. 회원가입이 완료되었습니다.");
    window.location.href = "./login.html";
    return false;
}
