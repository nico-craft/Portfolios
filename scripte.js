window.onload = () => {
    let nPage = 1;
    const pageLen = document.getElementsByClassName("page").length;
    goPage(nPage);
  
    changeNav(0);

    window.addEventListener("keydown", (event) => {
        if (event.key == "ArrowLeft" && nPage > 1) {
            goPage(nPage -= 1);
        } else if (event.key == "ArrowRight" && nPage < pageLen) {
            goPage(nPage += 1);
        }
    });

    function goPage(n) {
        let i;
        let pages = document.getElementsByClassName("page");

        for (i = 0; i < pages.length; i++) {
            pages[i].style.display = "none";
        }
        if (nPage - 1 == 0) {
            pages[n-1].style.display = "flex";
        } else {
            pages[n-1].style.display = "block";
        }
    }

    let tab1 = document.getElementsByClassName("navButton")[0];
    let tab2 = document.getElementsByClassName("navButton")[1];
    let tab3 = document.getElementsByClassName("navButton")[2];
    let tab4 = document.getElementsByClassName("navButton")[3];

    tab1.addEventListener("click", () => changeNav(0));
    tab2.addEventListener("click", () => changeNav(1));
    tab3.addEventListener("click", () => changeNav(2));
    tab4.addEventListener("click", () => changeNav(3));

    function changeNav(n) {
        let i;
        let content = document.getElementsByClassName("content");
        let navButton = document.getElementsByClassName("navButton");
        
        for (i = 0; i < content.length; i++) {
            content[i].style.display = "none";
        }
        for (i = 0; i < navButton.length; i++) {
            navButton[i].style.backgroundColor = "";
        }
        content[n].style.display = "block";
        document.getElementsByClassName("navButton")[n].style.backgroundColor = "white";
    }

    document.getElementsByClassName("who")[0].addEventListener("click", () => {
        nPage = 3;
        goPage(nPage);
        // document.getElementsByClassName("qui")[0].scrollIntoView();
    });
    document.getElementsByClassName("desc")[0].addEventListener("click", () => {
        nPage = 3;
        goPage(nPage);
        document.getElementsByClassName("description")[0].scrollIntoView();
    });
    document.getElementsByClassName("skill")[0].addEventListener("click", () => {
        nPage = 3;
        goPage(nPage);
        document.getElementsByClassName("competence")[0].scrollIntoView();
    });
    document.getElementsByClassName("hobbie")[0].addEventListener("click", () => {
        nPage = 3;
        goPage(nPage);
        document.getElementsByClassName("passion")[0].scrollIntoView();
    });
    document.getElementsByClassName("loPro")[0].addEventListener("click", () => {
        nPage = 4;
        goPage(nPage);
        document.getElementsByClassName("loPro")[0].scrollIntoView();
    });
    document.getElementsByClassName("shPro")[0].addEventListener("click", () => {
        nPage = 4;
        goPage(nPage);
        document.getElementsByClassName("shPro")[0].scrollIntoView();
    });
    document.getElementsByClassName("otPro")[0].addEventListener("click", () => {
        nPage = 4;
        goPage(nPage);
        document.getElementsByClassName("otPro")[0].scrollIntoView();
    });
    document.getElementsByClassName("wWeb")[0].addEventListener("click", () => {
        nPage = 5;
        goPage(nPage);
        document.getElementsByClassName("wWeb")[0].scrollIntoView();
    });
    document.getElementsByClassName("wOther")[0].addEventListener("click", () => {
        nPage = 5;
        goPage(nPage);
        document.getElementsByClassName("wOther")[0].scrollIntoView();
    });
    document.getElementsByClassName("mail")[0].addEventListener("click", () => {
        nPage = 6;
        goPage(nPage);
        document.getElementsByClassName("email")[0].scrollIntoView();
    });
    document.getElementsByClassName("phone")[0].addEventListener("click", () => {
        nPage = 6;
        goPage(nPage);
        document.getElementsByClassName("call")[0].scrollIntoView();
    });
    document.getElementsByClassName("cv")[0].addEventListener("click", () => {
        nPage = 6;
        goPage(nPage);
        document.getElementsByClassName("cv")[0].scrollIntoView();
    });

    let mailTo = document.getElementsByClassName("mailTo")[0];
    let mailOb = document.getElementsByClassName("mailObject")[0];
    let mailCo = document.getElementsByClassName("mailContent")[0];

    mailTo.value = "nicolas.dong.pro@gmail.com";
    mailOb.value = "";
    mailCo.value = "";

    let to = mailTo.value;
    let ob = "";
    let co = "";
    let linkMail = "";

    mailOb.addEventListener("change", () => {
        ob = mailOb.value;
        build(to, ob, co);
    });
    mailCo.addEventListener("change", () => {
        co = mailCo.value;
        co = co.replace(/\r?\n/g, "%0A");
        build(to, ob, co);
    });

    function build(val1, val2, val3) {
        linkMail = "mailTo:" + val1 + "?subject=" + val2 + "&body=" + val3;
        console.log(linkMail);
        document.getElementsByClassName("send")[0].href = linkMail;
    }

    mailCo.addEventListener("input", () => {
        mailCo.style.height = "5px";
        mailCo.style.height = mailCo.scrollHeight + "px";
    });

    let secret = ["", "", "", "", "", "", "", "", "", ""];
    let code = 1;
    let photo = document.getElementsByClassName("photo")[0];
    window.addEventListener("keydown", (event) => {
        if (event.key == "ArrowUp" && secret[0] == "") {
            secret[0] = "V";
        } else if (event.key == "ArrowUp" && secret[1] == "" && secret[0] == "V") {
            secret[1] = "V";
        } else if (event.key == "ArrowDown" && secret[2] == "" && secret[1] == "V") {
            secret[2] = "V";
        } else if (event.key == "ArrowDown" && secret[3] == "" && secret[2] == "V") {
            secret[3] = "V";
        } else if (event.key == "ArrowLeft" && secret[4] == "" && secret[3] == "V") {
            secret[4] = "V";
        } else if (event.key == "ArrowRight" && secret[5] == "" && secret[4] == "V") {
            secret[5] = "V";
        } else if (event.key == "ArrowLeft" && secret[6] == "" && secret[5] == "V") {
            secret[6] = "V";
        } else if (event.key == "ArrowRight" && secret[7] == "" && secret[6] == "V") {
            secret[7] = "V";
        } else if (event.key == "b" && secret[8] == "" && secret[7] == "V") {
            secret[8] = "V";
        } else if (event.key == "a" && secret[9] == "" && secret[8] == "V") {
            secret[9] = "V";
            if (secret[0] == "V" && secret[1] == "V" && secret[2] == "V" && secret[3] == "V" && secret[4] == "V" && secret[5] == "V" && secret[6] == "V" && secret[7] == "V" && secret[8] == "V" && secret[9] == "V") {
                changeCol();
                secret = ["", "", "", "", "", "", "", "", "", ""];
            }
        } else {
            secret = ["", "", "", "", "", "", "", "", "", ""];
        }
    });

    function changeCol() {
        if (code == 1) {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            photo.src = "image/Avatare.png";
            document.getElementsByClassName("secret")[0].innerHTML = "Maintenant recharge la page, Retour : ↑ ↑ ↓ ↓ ← → ← → B A";
            document.cookie = "secret=black";
            
        } else if (code == -1) {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            photo.src = "image/Photo_profil.jpg";
            document.getElementsByClassName("secret")[0].innerHTML = "Code mémo : ↑ ↑ ↓ ↓ ← → ← → B A";
            document.cookie = "secret=white";
        }
        code *= -1;
    }

    function getCookieByName(name) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + '=')) {
               return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

    let cookie = getCookieByName("secret");
    if (cookie == "white") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        photo.src = "image/Photo_profil.jpg";
        document.getElementsByClassName("secret")[0].innerHTML = "Code mémo : ↑ ↑ ↓ ↓ ← → ← → B A";
    } else if (cookie == "black") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        photo.src = "image/Avatare.png";
        document.getElementsByClassName("secret")[0].innerHTML = "Maintenant recharge la page, Retour : ↑ ↑ ↓ ↓ ← → ← → B A";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        photo.src = "image/Photo_profil.jpg";
        document.getElementsByClassName("secret")[0].innerHTML = "A-tu éssayer : ↑ ↑ ↓ ↓ ← → ← → B A";
    }
}