(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Piadinhas nos botões
    const piadasBotoes = [
        "Clique aqui antes que vire pauta no stand-up",
        "Confirme, ou o Tio do Pavê faz a piada por você",
        "Um clique por dia mantém o mal-humor longe",
        "Aperte e desbloqueie +1 em Improviso",
        "Esse botão foi testado em frangos de borracha",
        "Só clique se aguentar piada ruim",
        "Quem não clica, tira 1 no dado da vida",
        "Botão mais confiável que promessa de político",
        "Pressione e receba uma torta imaginária",
        "Não é pavê, é pra clicar",
        "Clique e ganhe vantagem contra Lobos da Faria Lima",
        "Mais fácil que rir de meme antigo",
        "Você já está rindo sem ter clicado",
        "O humor começa aqui",
        "Clique ou sofra desvantagem eterna",
        "Recompensa: uma gargalhada crítica",
        "Se não clicar, o palhaço chora",
        "Botão certificado pelo Ministério do Riso",
        "Clique e desbloqueie o PoDeP secreto",
        "Esse clique vale mais que café grátis",
        "Botão com 0% lactose e 100% humor",
        "Pressione e ganhe XP em Carisma",
        "O botão que até os NPCs respeitam",
        "Clique aqui e fuja do tiozão do churrasco",
        "Se rir, já valeu o clique",
        "Esse botão tem iniciativa +5",
        "Para liberar a próxima piada, clique",
        "O pavê aprova esse clique",
        "Mais seguro que banco de dados em cloud",
        "Clique e desbloqueie humor limitado",
        "Só os verdadeiros Humoristas clicam",
        "Se clicar duas vezes, não vira bug",
        "Testado por mestres de RPG e palhaços",
        "Clique para transformar crítica em piada",
        "Você não clicaria em qualquer botão... certo?",
        "Esse botão sabe contar piada melhor que você",
        "Aperte com moderação, o riso é forte",
        "Mais engraçado que tutorial no YouTube",
        "Clique e evite ser alvo de torta",
        "Funciona melhor que chá de boldo",
        "Botão premiado pelo sindicato dos Humoristas",
        "Clicar aqui não dá XP, mas quase",
        "Esse botão tem mais graça que novela mexicana",
        "Clique e vire lenda na mesa",
        "Mais improvável que rolar 20 natural",
        "Clique para ativar modo palhaçada",
        "Se não clicar, é desvantagem automática",
        "Botão mais honesto que recibo de RPG",
        "Clique e receba uma piada bônus",
        "Quem clica ganha vantagem em Carisma",
        "Esse botão foi feito com amor e sarcasmo",
        "Aperte e ative a risada contagiosa",
        "Mais épico que final de campanha",
        "Clique para evitar trocadilho ruim (mentira)",
        "O botão oficial dos piadistas profissionais",
        "Quem clica ganha resistência a cara feia",
        "Clique e desbloqueie easter eggs invisíveis",
        "Mais fácil que rir de piada de pavê",
        "Esse clique é canônico no universo FDS",
        "Clique ou perca o bônus de improviso",
        "Testado por 10 em cada 9 palhaços",
        "Esse botão já contou piada em open mic",
        "Clique e faça parte da resistência",
        "Aperte e libere a habilidade “Timing”",
        "Esse botão é crítico de humor",
        "Quem não clica perde o timing da piada",
        "Clique para ganhar uma vantagem dramática",
        "Mais rápido que piada ruim no grupo da família",
        "Botão aprovado pela Federação da Diversão",
        "Clique e vire protagonista do show",
        "Esse botão é praticamente um setup de piada",
        "Aperte e aguarde a punchline",
        "Clique e resista à seriedade do sistema",
        "Esse botão não falha em teste de humor",
        "Só clique se tiver coragem de rir de si mesmo",
        "Clique e descubra se valeu a pena",
        "O botão mais engraçado do seu navegador",
        "Clique e ganhe +1 contra caretas",
        "Esse clique ativa o modo “stand up improvisado”",
        "Mais confiável que regra caseira de RPG",
        "Clique para salvar o humor do mundo",
        "Esse botão é a última esperança da zoeira",
        "Aperte e receba piada automática",
        "Clique para libertar o meme interior",
        "Esse botão já fez sucesso no churrasco",
        "Clique e evite ser alvo do palhaço",
        "Mais divertido que tutorial mal dublado",
        "Clique e receba inspiração cômica",
        "Esse botão dá vantagem contra o tédio",
        "Só Humoristas de verdade clicam aqui",
        "Clique para ouvir o som do silêncio engraçado",
        "Mais fácil que rir de trocadilho ruim",
        "Clique e ganhe pontos em improviso",
        "Esse botão já foi alvo de piada interna",
        "Clique e vire parte da lenda do pavê",
        "Esse botão falhou em teste de seriedade",
        "Clique e desbloqueie piada lendária",
        "Mais engraçado que plot twist de novela",
        "Clique para não virar NPC sem graça",
        "Esse botão foi testado pela Dani...",
        "Esse botão tem +10 em risada involuntária"
    ];

    document.querySelectorAll(".btn").forEach(function (btn) {
      const textoOriginal = btn.textContent;
      btn.addEventListener("mouseenter", function () {
        if (!piadasBotoes.length) return;
        btn.textContent = piadasBotoes[Math.floor(Math.random() * piadasBotoes.length)];
      });
      btn.addEventListener("mouseleave", function () {
        btn.textContent = textoOriginal;
      });
    });

    // Fecha popup
    const closeBtn = document.getElementById("popup-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        const popup = document.getElementById("popup-whatsapp");
        if (popup) popup.classList.add("hidden");
      });
    }
  });
})();
