const main = document.getElementById("main")
const modal = document.getElementById("modal")
const titulo = document.getElementById("titulo")
const texto = document.getElementById("texto")
const subtitulo = document.getElementById("sub")
const descricao = document.getElementById("descricao")
const imagemModal = document.getElementById("modal-img")
const btnFechar = document.getElementById("fechar")

main.addEventListener("click", (event) => {
    const divClicada = event.target.closest("div")
    if (divClicada && main.contains(divClicada)) {
        const imagem = divClicada.dataset.imagem;

        if (imagem === "supere") {
            titulo.innerHTML =
              "ATLETISMO LEVA ALUNOS AOS JEEPS EM BUSCA DE SUPERAÇÃO";
            subtitulo.innerHTML =
              "Antes da competição, o trabalho começa no aquecimento.";
            descricao.innerHTML =
              "Em 2024, alunos do Salotti participaram dos JEEPS e de competições entre escolas, passando por seletivas e preparação antes de entrar em disputa.";
            imagemModal.src = "img/atlet/inicial.jpg"
            
            texto.innerHTML =
              "O atletismo fez parte da participação dos alunos do Salotti nos JEEPS e em competições entre escolas. Antes de qualquer prova começar, existe uma etapa que muitas vezes passa despercebida: a preparação. A imagem registra justamente um desses momentos, durante o aquecimento dos alunos. As competições contaram com a participação de estudantes de diferentes anos, com seletivas realizadas para definir quem representaria a escola. Mais do que o resultado de uma prova, o registro mostra o esforço colocado antes dela: a preparação, a concentração e a disposição para representar a escola. Porque, no esporte, o trabalho começa muito antes da largada.";
            modal.classList.add("aparece")
        } else if (imagem === "aprenda") {
            titulo.innerHTML =
              "DO TABULEIRO DA ESCOLA AO OURO: SALOTTI AVANÇA NOS JEEPS";
            subtitulo.innerHTML =
              "Uma primeira competição marcada por concentração, aprendizado e uma conquista que abriu caminho para novos desafios.";
            descricao.innerHTML =
              "Entre partidas decisivas e novas etapas, as damas levaram o Salotti cada vez mais longe.";
            imagemModal.src = "img/dama/inicial.jpg";
            texto.innerHTML =
              "A trajetória das damas do Salotti nos JEEPS começou dentro da própria escola. A primeira fase aconteceu no Salotti e, conforme a equipe avançava na competição, vieram novos desafios: Ibirapuera e Praia Grande. Na categoria Sub-17, oito escolas participaram da disputa, cada uma com cinco atletas e um treinador. Para quem estava vivendo sua primeira competição, cada partida era também uma oportunidade de aprender. Entre as partidas, uma característica se tornava essencial: concentração. No tabuleiro, cada movimento precisava ser pensado com cuidado e qualquer decisão poderia mudar o rumo da partida. A competição também marcou um momento importante para a equipe feminina. Mesmo com uma derrota em sua primeira partida, a experiência serviu como parte do aprendizado ao longo da competição. E a trajetória terminou com uma conquista: a medalha de ouro. O ano ainda não havia terminado. A experiência adquirida no Sub-17 abriu caminho para um novo desafio: no final de 2024, a equipe passou a competir na categoria Sub-18. Para além das partidas e das medalhas, aquele primeiro ano ficou marcado pelo acolhimento. A convivência com a professora e com o treinador Marcos transformou a experiência em algo maior que uma competição. Foi o começo de uma trajetória no tabuleiro — e também de uma história que continuaria muito além dele.";
            modal.classList.add("aparece")
        }else if (imagem === "jogue") {
            titulo.innerHTML = "FUTSAL FEMININO REPRESENTA O SALOTTI NOS JEEPS";
            subtitulo.innerHTML =
              "Dentro e fora das quadras, o esporte também é espaço de participação, união e representação.";
            descricao.innerHTML =
              "Atletas do Salotti entram em quadra para representar a escola em competições entre escolas.";
            imagemModal.src = "img/had fem/inicial.jpg";
            texto.innerHTML = "O futsal feminino também marcou presença na participação do Salotti nos JEEPS. Em partidas realizadas fora da escola, as atletas tiveram a oportunidade de representar o nome do Salotti dentro das quadras e fazer parte de uma competição que reúne diferentes escolas. Mais do que uma partida, cada participação representa o trabalho realizado para colocar uma equipe em quadra: preparação, organização, dedicação e, principalmente, a vontade de representar a escola. O futsal também mostra a força da participação feminina no esporte escolar, criando oportunidades para que novas atletas possam competir, aprender e viver experiências que vão além do resultado. Porque representar uma escola também é fazer parte da história dela."
            modal.classList.add("aparece")
        }else if (imagem === "acredite") {
            titulo.innerHTML =
              "NA HORA DA AÇÃO, O BASQUETE FEMININO ENTRA EM QUADRA";
            subtitulo.innerHTML =
              "Em 2024, atletas do Salotti representaram a escola em uma competição dos JEEPS fora dos muros da escola.";
            descricao.innerHTML =
              "Esforço, concentração e atitude marcaram a participação do basquete feminino.";
            imagemModal.src = "img/basc fem/inicial.jpg";
            texto.innerHTML =
              "É na hora da ação que toda preparação ganha sentido. Em 2024, o basquete feminino do Salotti entrou em quadra para representar a escola nos JEEPS, em uma competição realizada fora da escola. Cada partida é o momento em que o treinamento deixa de ser apenas preparação e se transforma em ação. Dentro da quadra, as atletas precisam tomar decisões, trabalhar juntas e manter a concentração diante de cada jogada. Mesmo sem acompanhar a competição pessoalmente, o registro representa uma parte importante do esporte escolar: o esforço necessário para colocar uma equipe em quadra e representar o nome da escola. A fotografia captura justamente esse momento — atletas em movimento, concentradas na partida e prontas para reagir ao que acontece diante delas. Porque chega uma hora em que todo esforço precisa entrar em ação.";
            modal.classList.add("aparece")
        }else if (imagem === "juntos") {
            titulo.innerHTML =
              "HANDEBOL MASCULINO ENTRA EM QUADRA COM A RAÇA DO SALOTTI NOS JEEPS";
            subtitulo.innerHTML =
              "Antes da competição, o trabalho começa no aquecimento.";
            descricao.innerHTML =
              "Força, estratégia e união definem o time masculino, que leva o nome da escola ao topo da competição estudantil. Atletas do Salotti mostram dedicação em cada lance.";
            imagemModal.src = "img/fut fem/incial.jpg";
            texto.innerHTML =
              "O handebol masculino também marcou presença na participação do Salotti nos JEEPS. Em partidas intensas e disputadas lance a lance fora da escola, os atletas tiveram a oportunidade de representar o orgulho do Salotti dentro das quadras e fazer parte de uma competição tradicional que reúne diferentes colégios. Mais do que buscar a vitória, cada jogo reflete o trabalho em equipe, a preparação tática, a organização e, principalmente, a vontade de honrar a camisa da escola. O handebol mostra o poder da união no esporte escolar, criando laços e oportunidades para que os jovens atletas possam competir, aprender e viver experiências marcantes que vão muito além do placar final. Afinal, vestir as cores do Salotti nos JEEPS é fazer parte viva da história da nossa comunidade.";
            modal.classList.add("aparece")


        }else if (imagem === "quadra") {
            titulo.innerHTML = "A FORÇA DA UNIÃO FEMININA NO JEESP 2024";
            subtitulo.innerHTML =
              "Trabalho em equipe e sincronia definem a campanha do time feminino na fase regional.";
            descricao.innerHTML =
              "Em quadra, as atletas do Ensino Médio mostraram que a comunicação e o apoio mútuo são o segredo para superar qualquer desafio nas interescolares.";
            imagemModal.src = "img/basc fem/inicial3.jpg";
            texto.innerHTML =
              "Na etapa Regional do JEESP 2024, nossas atletas do Ensino Médio deram uma verdadeira aula de sintonia e cooperação. A cada posse de bola, cobertura defensiva e grito de apoio vindo do banco de reservas, o time do Salotti provou que a força coletiva supera qualquer individualidade. Mais do que competir, as jogadoras representaram a garra e a presença marcante das mulheres no esporte escolar, deixando um legado de orgulho e inspiração para toda a comunidade.";
            modal.classList.add("aparece")
        }else if (imagem === "estrategia") {
            titulo.innerHTML = "RACIOCÍNIO TÁTICO E FOCO NA MESA DE DAMA";
            subtitulo.innerHTML =
              "Concentração absoluta garante grandes partidas do Salotti no regional do JEESP.";
            descricao.innerHTML =
              "A mente afiada e o planejamento estratégico foram as principais armas dos nossos enxadristas durante a competição.";
            imagemModal.src = "img/dama/inicial3.jpg";
            texto.innerHTML =
              "O esporte escolar também se joga na mente e na paciência. Na disputa de dama do JEESP 2024 Regional, os alunos do Salotti demonstraram alto nível de concentração e leitura de jogo. Cada movimento de peça foi calculado com precisão diante de adversários fortes da região. Com foco inabalável e frieza nos momentos decisivos, nossos representantes mostraram que o conhecimento, a disciplina e a estratégia são pilares fundamentais da nossa escola dentro e fora dos tabuleiros.";
            modal.classList.add("aparece")
        }else if (imagem === "paixao") {
            titulo.innerHTML = "RAÇA E DETERMINAÇÃO SOB O SOL REGIONAL";
            subtitulo.innerHTML =
              "Garra e entrega total marcam a atuação do time do Salotti nas partidas de campo.";
            descricao.innerHTML =
              "Com muita intensidade e respeito ao adversário, os atletas jogaram com o coração na chuteira do primeiro ao último apito.";
            imagemModal.src = "img/fut fem/inicial3.jpg";
            texto.innerHTML =
              "Enfrentando o calor e jogos altamente disputados fora de casa, a equipe do Salotti levou a paixão pelo futebol ao nível máximo no JEESP 2024. Cada dividida de bola, corrida no ataque e recomposição defensiva mostraram o amor dos estudantes pela camisa da escola. O espírito de luta e a lealdade em campo conquistaram o respeito dos adversários e demonstraram que vestir as cores do Salotti na fase Regional é sinônimo de dedicação total.";
            modal.classList.add("aparece")
        }else if (imagem === "lance") {
            titulo.innerHTML = "EMOÇÃO E RESILIÊNCIA ATÉ O APITO FINAL";
            subtitulo.innerHTML =
              "Disputas acirradas na quadra mostram a força de vontade do Ensino Médio do Salotti.";
            descricao.innerHTML =
              "Momentos decisivos e jogadas eletrizantes marcaram os segundos finais de cada partida na fase regional.";
            imagemModal.src = "img/fut masc/inicial3.jpg";
            texto.innerHTML =
              "No JEESP Regional 2024, nenhuma partida foi dada como perdida antes do fim. Em jogos eletrizantes disputados ponto a ponto, os atletas da Escola Salotti lutaram por cada bola com energia máxima até o último segundo. A resiliência em momentos de pressão e a vontade de buscar o resultado até o final refletem o verdadeiro caráter esportivo dos nossos alunos. Essa postura incansável transformou cada partida em um espetáculo inesquecível para a nossa torcida.";
            modal.classList.add("aparece")
        }else if (imagem === "oloko") {
            titulo.innerHTML = "Cringe"
            subtitulo.innerHTML =
              "Antes da competição, o trabalho começa no aquecimento.";
            descricao.innerHTML =
              "Em 2024, alunos do Salotti participaram dos JEEPS e de competições entre escolas, passando por seletivas e preparação antes de entrar em disputa.";
            imagemModal.src = ""
            texto.innerHTML = "texto MUITO cringe"
            modal.classList.add("aparece")
        }else if (imagem === "MVP") {
            titulo.innerHTML = "MVP1"
            subtitulo.innerHTML =
              "Antes da competição, o trabalho começa no aquecimento.";
            descricao.innerHTML =
              "Em 2024, alunos do Salotti participaram dos JEEPS e de competições entre escolas, passando por seletivas e preparação antes de entrar em disputa.";
            imagemModal.src = ""
            texto.innerHTML = "texto MVP1"
            modal.classList.add("aparece")
        }else if (imagem === "MVP2") {
            titulo.innerHTML = "MVP2"
            subtitulo.innerHTML =
              "Antes da competição, o trabalho começa no aquecimento.";
            descricao.innerHTML =
              "Em 2024, alunos do Salotti participaram dos JEEPS e de competições entre escolas, passando por seletivas e preparação antes de entrar em disputa.";
            imagemModal.src = ""
            texto.innerHTML = "texto MVP2"
            modal.classList.add("aparece")
        }else if (imagem === "MVP3") {
            titulo.innerHTML = "MVP3"
            subtitulo.innerHTML =
              "Antes da competição, o trabalho começa no aquecimento.";
            descricao.innerHTML =
              "Em 2024, alunos do Salotti participaram dos JEEPS e de competições entre escolas, passando por seletivas e preparação antes de entrar em disputa.";
            imagemModal.src = ""
            texto.innerHTML = "texto MVP3"
            modal.classList.add("aparece")
        }else if (imagem === "MVP4") {
            titulo.innerHTML = "MVP4"
            subtitulo.innerHTML =
              "Antes da competição, o trabalho começa no aquecimento.";
            descricao.innerHTML =
              "Em 2024, alunos do Salotti participaram dos JEEPS e de competições entre escolas, passando por seletivas e preparação antes de entrar em disputa.";
            imagemModal.src = ""
            texto.innerHTML = "texto MVP4"
            modal.classList.add("aparece")
        }
    }
})
fechar.addEventListener('click', ()=> {
    modal. classList.remove("aparece")
})