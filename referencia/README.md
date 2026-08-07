# Projeto: Página de Vendas - Clube do Advogado Tributarista (Éderson Porto)

## Finalidade da Página
Esta é uma landing page (página de vendas) de alta conversão projetada para apresentar e vender a formação do "Clube do Advogado Tributarista". Ela serve como porta de entrada para campanhas de marketing, com foco em detalhar a metodologia do curso (posicionamento, teses, honorários, reforma tributária) e redirecionar o usuário para o checkout através de chamadas de ação (CTAs).

## Créditos
- **Por quem foi feito:** Desenvolvido por [Jotav](https://jotav.me/).
- **Para quem foi feito:** Projeto criado para Éderson Porto.

## Estrutura do Projeto
O projeto é construído com tecnologias web padrão (HTML, CSS e JS nativo), garantindo alta performance e facilidade de manutenção.

- `index.html`: Arquivo principal contendo a estrutura da Página de Vendas e scripts de animação/interatividade.
- `obrigado.html`: Página de agradecimento e boas-vindas para onde o usuário é direcionado após a ação de conversão.
- `styles.css`: Arquivo de folha de estilo que concentra todo o design, identidade visual e regras de responsividade (mobile, tablet, desktop).
- `PÁGINA DE VENDAS.md` / `instructions.md`: Arquivos de documentação base utilizados na construção da copy e da estrutura.

## Dinâmica da Página e Conversão

### 1. Interações e Apresentação
A página foi desenhada com seções reveladas dinamicamente durante a rolagem (usando `IntersectionObserver` em JavaScript nativo), mantendo o usuário engajado durante a leitura da copy. 

### 2. Fluxo de Conversão (Checkout)
Diferente de uma página de captura clássica, o objetivo principal aqui é a venda. Os CTAs (ex: "Quero conhecer o Clube") direcionam o lead qualificado diretamente para a área de checkout e oferta (indicados pelos links de ação ou seções específicas da página).

*(Nota: A coleta de dados do usuário e de UTMs para esta página ocorre normalmente na plataforma de checkout integrada, visto que a página em si atua como intermediária de conversão direta, sem um formulário de Webhook local configurado no momento).*
