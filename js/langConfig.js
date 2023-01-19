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
        document.getElementById("sobre-content").textContent = `Olá, meu nome é Gustavo Cruz e sou um Desenvolvedor Back-End Jr buscando minha
        primeira oportunidade. Sou apaixonado
        por tecnologia e sempre busco me atualizar e aprender coisas novas. Comecei minha jornada na área de
        programação recentemente e desde então, tenho trabalhado em vários projetos pessoais, desenvolvendo
        minhas
        habilidades e adquirindo experiência. Meu objetivo é trabalhar em projetos desafiadores e inovadores, e
        contribuir para o sucesso da equipe. Este site é uma janela para meu trabalho e minhas realizações, e
        espero que gostem de navegar por ele. Se você tiver alguma dúvida ou quiser entrar em contato, não
        hesite em me enviar uma mensagem.`
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
        document.getElementById("sobre-content").textContent = "Hello, my name is Gustavo and I am a Back-End Developer Jr. I am passionate about technology and always strive to stay updated and learn new things. I started my journey in the field of programming recently and since then, I have worked on various projects, honing my skills and gaining experience. My goal is to work on challenging and innovative projects and contribute to the team's success. This website is a window to my work and achievements, and I hope you enjoy browsing through it. If you have any questions or want to get in touch, feel free to send me a message."
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
        document.getElementById("sobre-content").textContent = `Здравствуйте, меня зовут Густаво Круз, я младший бэкенд-разработчик, ищу своего
        первая возможность. я влюблен
        для технологий, и я всегда стремлюсь обновить себя и узнать что-то новое. Я начал свой путь в районе г.
        программированием недавно и с тех пор я работаю над несколькими личными проектами, разрабатывая
        мой
        навыков и приобретения опыта. Моя цель - работать над сложными и инновационными проектами, и
        способствовать успеху команды. Этот сайт - окно в мою работу и достижения, и
        Я надеюсь, вам понравится просматривать его. Если у вас есть какие-либо вопросы или вы хотите связаться, не
        стесняйтесь отправить мне сообщение.`
        document.getElementById("desc-experience").textContent = `До сих пор я работал только стажером в службе поддержки пользователей и обслуживании компьютеров. Теперь я ищу возможность в области разработки программного обеспечения, чтобы улучшить свой профессиональный опыт.`
        document.getElementById("btn-bellow").textContent = `Чтобы узнать больше обо мне, загрузите мое резюме (на португальском языке), нажав ниже:`
        document.getElementById("download").textContent = "Скачать резюме"
        document.getElementById("skills").textContent = "Навыки"
        document.getElementById("contact").textContent = "Контакт:"
    }
}

changeLanguage()