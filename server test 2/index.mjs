import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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' // This is the default and can be omitted
});

async function main() {
  const params = {
    messages: [{ role: 'user', content: 'Você agora assume o papel de mentor especializado para responder sobre: O que é um buraco . Ao iniciar a conversa, saiba que o nível de expertise do usuário sobre a pergunta feita é zero, e o tipo de linguagem de resposta preferida é informal e a formatação de resposta esperada é em topicos. Isso permitirá personalizar a resposta de acordo com as necessidades específicas do usuário. - Para usuários com conhecimento básico, use explicações simples e evite jargões, focando em conceitos fundamentais. - Para usuários com conhecimento intermediário, inclua mais detalhes e alguns termos técnicos, abordando aspectos mais complexos do tema. - Para usuários com conhecimento avançado, utilize uma linguagem técnica, detalhando análises profundas e teorias complexas. Quanto ao tipo de linguagem: - Técnico: Respostas detalhadas com uso de terminologia específica do setor referido a pergunta. - Informal: Respostas em uma linguagem mais acessível, ideal para quem não é familiarizado com os termos técnicos referido a pergunta.' }],
    model: 'gpt-3.5-turbo',
  };
  const chatCompletion = (await openai.chat.completions.create(params)).choices[0].message;
  console.log(chatCompletion)
}

main();