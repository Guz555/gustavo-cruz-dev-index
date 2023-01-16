document.getElementById("opt-lang").addEventListener("change", changeLanguage)

function changeLanguage() {
    let selectedLanguage = document.getElementById("opt-lang").value;
    if (selectedLanguage === "pt-br") {
        document.getElementById("menu-about").textContent = "Sobre"
        document.getElementById("menu-exp").textContent = "Experiencia"
        document.getElementById("menu-contact").textContent = "Contato"
        document.getElementById("dbe").textContent = "Desenvolvedor Back-End"
        document.getElementById("about-me").textContent = "Sobre mim"
        document.getElementById("experience").textContent = "Experiencia"
        document.getElementById("sobre-content").textContent = "Olá e bem-vindo ao meu site! Me chamo Gustavo Cruz, tenho 23 anos. Sou brasileiro natural de São Paulo - SP mas moro no litoral sul paulista. Também sou estudante de Análise e Desenvolvimento de Sistemas, e estudo por conta própria atualmente."
        document.getElementById("desc-experience").textContent = `Até o momento apenas trabalhei como estagiário em suporte ao usuário e em manutenção de computadores. Agora estou em busca de uma oportunidade na área de desenvolvimento de software para aprimorar minhas experiências profissionais.`
        document.getElementById("btn-bellow").textContent = `Para saber mais sobre mim, baixe meu curriculo clicando abaixo:`
        document.getElementById("download").textContent = "Baixar Curriculo"
        document.getElementById("skills").textContent = "Habilidades"
        document.getElementById("contact").textContent = "Contato:"
    }
    else if (selectedLanguage === "en") {
        document.getElementById("menu-about").textContent = "About"
        document.getElementById("menu-exp").textContent = "Experience"
        document.getElementById("menu-contact").textContent = "Contact"
        document.getElementById("dbe").textContent = "Back-End Developer"
        document.getElementById("about-me").textContent = "About me"
        document.getElementById("experience").textContent = "experience"
        document.getElementById("sobre-content").textContent = "Hello and welcome to my website! My name is Gustavo Cruz, I'm 23 years old. I'm a brasilian from São Paulo city. I study Analysis Systems Development, but for now by my own."
        document.getElementById("desc-experience").textContent = `So far I've only worked as an intern in user support and computer maintenance. Now I'm looking for an opportunity in the area of software development to improve my professional experiences.`
        document.getElementById("btn-bellow").textContent = `To view more about me, download my resume (in portuguese) by clicking below:`
        document.getElementById("download").textContent = "Download Resume"
        document.getElementById("skills").textContent = "Skills"
        document.getElementById("contact").textContent = "Contact:"
    }
    else if (selectedLanguage === "ru") {
        document.getElementById("menu-about").textContent = "Обо мне"
        document.getElementById("menu-exp").textContent = "Опыт"
        document.getElementById("menu-contact").textContent = "Контакт"
        document.getElementById("dbe").textContent = "Бэкенд-разработчик"
        document.getElementById("about-me").textContent = "Обо мне"
        document.getElementById("experience").textContent = "Опыт"
        document.getElementById("sobre-content").textContent = "Здравствуйте и добро пожаловать на мой сайт! Меня зовут Густаво Круз, мне 23 года. Я бразилец из города Сан-Паулу. Я изучаю разработку аналитических систем, но пока самостоятельно. Я тоже учу русский язык самостоятельно, Пожалуйста, не обращайте внимания на некоторые ошибки в написании"
        document.getElementById("desc-experience").textContent = `До сих пор я работал только стажером в службе поддержки пользователей и обслуживании компьютеров. Теперь я ищу возможность в области разработки программного обеспечения, чтобы улучшить свой профессиональный опыт.`
        document.getElementById("btn-bellow").textContent = `Чтобы узнать больше обо мне, загрузите мое резюме (на португальском языке), нажав ниже:`
        document.getElementById("download").textContent = "Скачать резюме"
        document.getElementById("skills").textContent = "Навыки"
        document.getElementById("contact").textContent = "Контакт:"
    }
}

changeLanguage()