const fs = require('fs');
const path = require('path');

const srcDir = path.join('f:', 'AlpsDigital', 'Viviane', 'Leonardo', 'referencia');
const destDir = path.join('f:', 'AlpsDigital', 'Viviane', 'Leonardo');
const stylesPath = path.join(srcDir, 'styles.css');

if (!fs.existsSync(stylesPath)) {
    console.error('styles.css not found!');
    process.exit(1);
}

const styles = fs.readFileSync(stylesPath, 'utf8');

// 1. Process Obrigado Page
const srcObrigado = path.join(srcDir, 'obrigado.html');
const destObrigadoDir = path.join(destDir, 'obrigado');
if (!fs.existsSync(destObrigadoDir)) {
    fs.mkdirSync(destObrigadoDir);
}
const destObrigado = path.join(destObrigadoDir, 'index.html');

let obrigadoHtml = fs.readFileSync(srcObrigado, 'utf8');
obrigadoHtml = obrigadoHtml.replace('<link rel="stylesheet" href="styles.css">', `<style>\n${styles}\n</style>`);
obrigadoHtml = obrigadoHtml.replaceAll('Éderson Porto', 'Leonardo Rosa');
obrigadoHtml = obrigadoHtml.replaceAll('Clube do Advogado Tributarista', 'Mentoria para Profissionais de Compras');
obrigadoHtml = obrigadoHtml.replace(/href="https:\/\/chat\.whatsapp\.com\/[^"]+"/g, 'href="https://chat.whatsapp.com/J4vmXxsDTKZ8QxnBttWWmC?s=sh&p=a&ilr=4"');

fs.writeFileSync(destObrigado, obrigadoHtml, 'utf8');
console.log('Created obrigado/index.html');

// 2. Process Index Page
// For the index page, we'll try to do some specific string replacements.
// Since the copy changes entirely, I will just output the CSS to index.html and build the HTML content using the classes from the reference.
// The easiest way to ensure accuracy without a complex DOM parser is to output a new HTML using template literals that mimic the original structure but with the new copy.

const checkoutUrl = 'https://payfast.greenn.com.br/7j39p2y/offer/6rVLyJ';
const placeholderImg = 'https://placehold.co/600x400';
const placeholderImgSquare = 'https://placehold.co/800x800';

const indexHtml = `<!DOCTYPE html>
<html lang="pt-br" class="js">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mentoria para Profissionais de Compras | Leonardo Rosa</title>
    <meta name="description"
        content="A mentoria mais completa do país para transformar Compradores em profissionais de sucesso.">

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700;800&display=swap');
        
        \${styles}
    </style>
</head>

<body>
    <!-- HERO -->
    <header class="hero">
        <div class="wrap grid-2">
            <div class="hero-content">
                <div class="kicker">Mentoria para Profissionais de Compras</div>
                <h1>A mentoria mais completa do país para transformar Compradores em profissionais de sucesso.</h1>
                <p class="lead">Chega de continuar aprendendo técnica solta, Desevolva na prática tudo o que um Profissional de Compras precisa para sair do operacional, ser reconhecido e crescer de verdade.</p>
                <div style="margin-top: 32px;">
                    <a href="\${checkoutUrl}" class="cta">QUERO ENTRAR NA MENTORIA</a>
                    <p class="note">Mais de 1.000 Compradores já passaram pela mentoria do Leonardo Rosa.</p>
                </div>
            </div>
            <div class="about-photo">
                <img src="\${placeholderImgSquare}" alt="Leonardo Rosa">
            </div>
        </div>
    </header>

    <!-- PROBLEMA -->
    <section class="section dark">
        <div class="wrap">
            <div class="section-title reveal">
                <h2>Você já entendeu que técnica sozinha não te tira do lugar.</h2>
                <p>Talvez você já tenha feito cursos. Já aprendeu sobre Strategic Sourcing, já ouviu falar em Matriz Kraljic, já sabe montar um RFP.</p>
                <p><strong>E ainda assim continua no mesmo cargo, com o mesmo salário, sendo acionado só para resolver urgência.</strong></p>
                <p>Isso não acontece porque você não estudou o suficiente. Acontece porque o Comprador que chega à mesa de decisão não chegou lá só por dominar ferramenta.</p>
            </div>
            <div class="checks reveal" style="--rd: 0.1s;">
                <div class="check"><b>☑️</b> Ele chegou porque combina técnica com postura.</div>
                <div class="check"><b>☑️</b> Com comunicação.</div>
                <div class="check"><b>☑️</b> Com inteligência emocional para navegar dentro da empresa sem perder a cabeça nem a credibilidade.</div>
            </div>
            <div class="story reveal" style="margin-top: 40px; text-align: center;">
                <p>Essas competências, ninguém ensina de forma integrada. A maioria do mercado entrega pedaços soltos, e é por isso que tanta gente competente continua estagnada.</p>
                <div class="quote">A Mentoria para Profissionais de Compras existe para resolver exatamente isso.</div>
            </div>
        </div>
    </section>

    <!-- ECOSSISTEMA -->
    <section class="section sand">
        <div class="wrap">
            <div class="section-title reveal">
                <div class="kicker">O MÉTODO</div>
                <h2>Um ecossistema completo para evoluir a sua carreira.</h2>
                <p>São mais de 100 horas de conteúdo gravado, encontros ao vivo quinzenais comigo, masterclasses com grandes nomes da área e novos treinamentos sendo adicionados o tempo todo. Um ambiente vivo, construído para acompanhar a sua evolução ao longo de toda a jornada.</p>
            </div>
            
            <div class="grid-2 reveal" style="margin-bottom: 40px;">
                <div class="card">
                    <h3>A Metodologia</h3>
                    <p>Une a acessibilidade do digital com a eficiência da mentoria ao vivo, do coaching e da aceleração de carreira.</p>
                </div>
                <div class="card">
                    <h3>Inspiração Global</h3>
                    <p>Inspirada nas escolas de negócio mais modernas do mundo, mas 100% aplicada à realidade de quem trabalha em Compras no Brasil.</p>
                </div>
            </div>

            <div style="text-align: center;" class="reveal">
                <a href="\${checkoutUrl}" class="cta">QUERO FAZER PARTE</a>
            </div>
        </div>
    </section>

    <!-- CONTEUDO -->
    <section class="section dark">
        <div class="wrap">
            <div class="section-title reveal">
                <h2>Tudo o que forma um Profissional de Compras completo, em um só lugar:</h2>
            </div>
            
            <div class="method reveal">
                <div class="method-card">
                    <div class="letter">1</div>
                    <h3>Strategic Sourcing & Técnicas de Compras</h3>
                    <p>O método e as ferramentas que tiram você do improviso e te colocam para operar com estratégia.</p>
                </div>
                <div class="method-card">
                    <div class="letter">2</div>
                    <h3>Negociação para Compradores</h3>
                    <p>Como negociar com fornecedores e internamente, com preparo, técnica e argumento, parando de apenas pedir desconto e passando a trazer valor.</p>
                </div>
                <div class="method-card">
                    <div class="letter">3</div>
                    <h3>Gestão Estratégica de Fornecedores</h3>
                    <p>Onde os Compradores mais avançados se diferenciam, desenvolvendo a base de fornecedores como ativo estratégico da empresa.</p>
                </div>
                <div class="method-card">
                    <div class="letter">4</div>
                    <h3>Gestão de Contratos</h3>
                    <p>Para você deixar de apenas assinar o que o jurídico ou o fornecedor propõe e passar a construir acordos que protegem a empresa e a sua posição.</p>
                </div>
                <div class="method-card">
                    <div class="letter">5</div>
                    <h3>Inteligência Emocional para Compradores</h3>
                    <p>Porque a competência técnica trava quando a emoção entra em jogo, seja numa negociação difícil, numa reunião com a liderança ou num conflito com requisitante.</p>
                </div>
                <div class="method-card">
                    <div class="letter">6</div>
                    <h3>Liderança e Gestão de Pessoas em Compras</h3>
                    <p>Para liderar equipes e influenciar sem ter autoridade formal, com método.</p>
                </div>
                <div class="method-card">
                    <div class="letter">7</div>
                    <h3>Tributação e Reforma Tributária para Compradores</h3>
                    <p>Porque o Comprador que entende o impacto tributário de cada decisão é visto de outra forma pela diretoria.</p>
                </div>
                <div class="method-card">
                    <div class="letter">8</div>
                    <h3>Masterclasses e encontros com grandes nomes</h3>
                    <p>Acesso a quem já está no topo, com conteúdo novo sendo adicionado toda semana.</p>
                </div>
            </div>
            <div style="text-align: center; margin-top: 50px;" class="reveal">
                <a href="\${checkoutUrl}" class="cta">QUERO ACESSO A TUDO ISSO</a>
            </div>
        </div>
    </section>

    <!-- MERCADO E AUTOR -->
    <section class="section sand">
        <div class="wrap">
            <div class="section-title reveal">
                <h2>O mercado de Compras não vai esperar você se decidir.</h2>
                <p>Existem mais de 300 mil Compradores no Brasil. E a cada ano, a régua sobe.</p>
            </div>
            
            <div class="story reveal">
                <p>O que antes era diferencial hoje é requisito. Quem não domina e não desenvolve as competências necessárias vai ficando para trás: no mesmo cargo e no mesmo salário, enquanto vê outros profissionais avançarem.</p>
                <p>A verdade é só uma: quem continua sendo valorizado é o profissional estratégico. Aquele que analisa, decide, negocia, se comunica e gera impacto.</p>
                <div class="quote">A pergunta não é se você vai precisar dar esse salto. É quando.</div>
            </div>

            <div class="about reveal" style="margin-top: 100px;">
                <div class="about-photo">
                    <img src="\${placeholderImgSquare}" alt="Leonardo Rosa">
                </div>
                <div>
                    <div class="kicker">QUEM VAI TE CONDUZIR?</div>
                    <h2>Leonardo Rosa</h2>
                    <p>Leonardo Rosa atua em Compras desde 2011, gerenciando equipes e vivendo na prática os desafios de quem está na linha de frente com fornecedores e requisitantes.</p>
                    <p>É professor de MBAs e cursos na área de Supply Chain, certificado internacionalmente e formado em Coach de Carreira. Estudou de perto como as instituições internacionais ensinam as disciplinas de Compras, e percebeu o que faltava: aplicação real e desenvolvimento do profissional por inteiro, técnico e comportamental.</p>
                    <p>Foi dessa percepção que nasceu a mentoria. Não como mais um curso, mas como o ecossistema que ele gostaria de ter tido quando estava construindo a própria carreira.</p>
                    <p>Desde 2020, desenvolve Compradores em transição. Já foram mais de mil profissionais de setores diferentes, o que deu a ele uma visão rara e ampla sobre o que realmente funciona em Compras.</p>
                    <div class="signature">Leonardo Rosa</div>
                </div>
            </div>
        </div>
    </section>

    <!-- PROVA SOCIAL -->
    <section class="section dark">
        <div class="wrap">
            <div class="section-title reveal">
                <div class="kicker">PROVA SOCIAL</div>
                <h2>Histórias de quem já fez essa transição.</h2>
                <p>Depoimentos de alunos com resultados concretos: promoção, aumento de salário, mudança de empresa, reconhecimento interno, primeiro projeto estratégico entregue.</p>
            </div>
            
            <div class="testimonials-carousel reveal">
                <div class="testimonials-viewport">
                    <div class="testimonials-track" id="track">
                        <!-- Imagens de prova social em carrossel -->
                        <div class="testimonial-slide"><img src="\${placeholderImg}" alt="Depoimento"></div>
                        <div class="testimonial-slide"><img src="\${placeholderImg}" alt="Depoimento"></div>
                        <div class="testimonial-slide"><img src="\${placeholderImg}" alt="Depoimento"></div>
                        <div class="testimonial-slide"><img src="\${placeholderImg}" alt="Depoimento"></div>
                    </div>
                </div>
                <button class="carousel-arrow carousel-prev" aria-label="Anterior">&lsaquo;</button>
                <button class="carousel-arrow carousel-next" aria-label="Próximo">&rsaquo;</button>
                <div class="carousel-dots" id="dots"></div>
            </div>
        </div>
    </section>

    <!-- OFERTA E PREÇO -->
    <section class="section sand">
        <div class="wrap">
            <div class="section-title reveal">
                <h2>O que você recebe na Mentoria para Profissionais de Compras:</h2>
            </div>
            <div class="checks reveal">
                <div class="check"><b>☑️</b> Acesso completo a todos os módulos;</div>
                <div class="check"><b>☑️</b> Mais de 100 horas de conteúdo gravado para assistir no seu ritmo;</div>
                <div class="check"><b>☑️</b> Encontros ao vivo quinzenais com o Leonardo;</div>
                <div class="check"><b>☑️</b> Masterclasses com grandes nomes da área;</div>
                <div class="check"><b>☑️</b> Material didático complementar e novos treinamentos adicionados ao longo do seu acesso;</div>
                <div class="check"><b>☑️</b> 12 meses de acesso ao ecossistema completo.</div>
            </div>

            <div class="price reveal" style="margin-top: 60px;">
                <div class="kicker" style="margin: 0 auto 16px;">CONDIÇÃO ESPECIAL PARA ESTA TURMA</div>
                <div class="de">De: R$ 5.000,00</div>
                <h2>12x de R$ 242,53</h2>
                <div class="parcel">ou R$ 1.297 à vista</div>
                <a href="\${checkoutUrl}" class="cta" style="margin-top: 20px;">QUERO GARANTIR MINHA VAGA COM DESCONTO</a>
                <p class="policy">Vagas com condição especial limitadas. Quando preenchidas, o valor sobe.<br>Compra 100% segura | Encontros ao vivo quinzenais | Direitos reservados a Leonardo Rosa</p>
            </div>
        </div>
    </section>

    <!-- FINAL -->
    <section class="final">
        <div class="wrap reveal">
            <h2>Você pode continuar exatamente como está, ou tomar uma ÚNICA decisão.</h2>
            <p>Continuar fazendo os mesmos cursos soltos, esperando que em algum momento alguém perceba o seu valor. Ou… Pode entrar no único ambiente construído para desenvolver o Profissional de Compras por inteiro, com técnica, comportamento, acompanhamento ao vivo e uma comunidade que puxa você para cima.</p>
            <p>O caminho para sair do operacional e virar referência existe E Ele exige trabalho, planejamento e persistência. Mas você não precisa percorrer sozinho.</p>
            <h3>Vem comigo e vamos voar.</h3>
            <a href="\${checkoutUrl}" class="cta" style="margin-top: 30px;">QUERO ENTRAR NA MENTORIA</a>
        </div>
    </section>

    <!-- SCRIPTS -->
    <script>
        // Reveal Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });

        // Carrossel
        const track = document.getElementById('track');
        if(track) {
            const slides = Array.from(track.children);
            const nextButton = document.querySelector('.carousel-next');
            const prevButton = document.querySelector('.carousel-prev');
            const dotsNav = document.getElementById('dots');
            
            let currentIndex = 0;

            slides.forEach((_, index) => {
                const dot = document.createElement('button');
                if (index === 0) dot.classList.add('is-active');
                dot.dataset.index = index;
                dotsNav.appendChild(dot);
            });

            const dots = Array.from(dotsNav.children);

            const updateCarousel = (index) => {
                track.style.transform = 'translateX(-' + (index * 100) + '%)';
                dots.forEach(d => d.classList.remove('is-active'));
                dots[index].classList.add('is-active');
            };

            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateCarousel(currentIndex);
            });

            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateCarousel(currentIndex);
            });

            dotsNav.addEventListener('click', e => {
                const targetDot = e.target.closest('button');
                if (!targetDot) return;
                currentIndex = parseInt(targetDot.dataset.index);
                updateCarousel(currentIndex);
            });
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(destDir, 'index.html'), indexHtml, 'utf8');
console.log('Created index.html');
