import { BlogPost, FAQItem, Testimonial } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Como Cuidar da sua Episcia: O Guia Definitivo',
    slug: 'como-cuidar-episcia-guia-definitivo',
    excerpt: 'Aprenda os segredos para germinar e cultivar sua Episcia a partir de sementes selecionadas.',
    date: '2024-03-01',
    category: 'Cuidados',
    image: 'https://i.pinimg.com/736x/ef/b5/74/efb574d15f278edfb04ac5f1688ceaea.jpg',
    content: `
# Como Cuidar da sua Episcia: O Guia Definitivo

As Episcias, também conhecidas como "Tapete de Episcia", são plantas tropicais deslumbrantes. Cultivá-las a partir de sementes é uma experiência gratificante para colecionadores em todo o mundo.

## 1. Germinação de Sementes
As sementes de Episcia precisam de um substrato leve e úmido. Mantenha a temperatura estável (ideal entre 20°C e 30°C) para garantir uma taxa de germinação alta, em estufa caseira ou profissional.

## 2. Iluminação Ideal
Ofereça iluminação natural ou através de lâmpadas para cultivo.
Mantenha longe do sol direto

## 3. Umidade
Mantenha a Umidade sempre alta , deve ficar em torno de 80% .
    `
  },
  {
    id: '2',
    title: 'Iluminação Ideal para Mudas de Episcia',
    slug: 'iluminacao-ideal-mudas-episcia',
    excerpt: 'Descubra quanta luz suas mudas recém-germinadas precisam para crescerem fortes.',
    date: '2024-02-25',
    category: 'Cultivo',
    image: 'https://i.pinimg.com/1200x/46/fc/ee/46fcee6c5a56f88a873e65d573489cf2.jpg',
    content: `
# Iluminação Ideal para Mudas de Episcia

A luz é o combustível para o crescimento das suas mudas. Após a germinação das sementes, o manejo da luz é crucial.

## Luz Indireta: O Segredo
Mudas jovens são extremamente sensíveis. Elas precisam de muita claridade, mas o sol direto pode ser fatal em poucos minutos.

## Sinais de Alerta
- Mudas muito compridas e pálidas: Falta de luz.
- Folhas amareladas ou com manchas marrons: Excesso de sol.
    `
  },
  {
    id: '3',
    title: 'Por que Cultivar Episcias a partir de Sementes?',
    slug: 'por-que-cultivar-episcias-sementes',
    excerpt: 'Descubra as vantagens de iniciar sua coleção de Episcias do zero.',
    date: '2024-02-15',
    category: 'Tendências',
    image: 'https://i.pinimg.com/736x/95/01/70/95017069b6b0c444e860625ce48166ec.jpg',
    content: `
# Por que Cultivar Episcias a partir de Sementes?

Cultivar Episcias por sementes é uma experiência única de descoberta. Cada planta pode surgir com características próprias, trazendo variedade e exclusividade. Além disso, acompanhar todo o desenvolvimento fortalece a conexão com o cultivo, tornando cada broto uma nova surpresa.

## Variabilidade Genética
Cada semente é uma surpresa. Ao contrário das mudas por estaca, as sementes podem revelar padrões e cores ligeiramente diferentes da planta mãe.

## Plantas Mais Fortes
Plantas que crescem desde a semente no seu ambiente tendem a ser mais adaptadas e resilientes às condições da sua casa.
    `
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Como se dá a germinação de sementes?',
    answer: '- Em estufas caseiras\n- Substrato leves e drenável\n- Humidade abundante não encharcado\n- Claridade abundante'
  },
  {
    question: 'Quanto tempo para a germinação?',
    answer: '- Estando em condições satisfatórias e adequadas: 15 a 20 dias'
  },
  {
    question: 'O que devo tomar cuidado durante a germinação?',
    answer: 'Com as regas (leves através de borrifadores) e manter a humidade constante. Caso fique seca você perderá as sementes, elas secam e morrem'
  },
  {
    question: 'Vocês enviam sementes para todos os países?',
    answer: 'Sim enviamos!\nPossuímos autorização fitosanitaia.\nO envio é feito com registro e rastreio.\nJá enviamos para 57 países.'
  },
  {
    question: 'As sementes tem prazo de validade?',
    answer: 'Sim!\nO prazo de validade é de até 2 (dois) anos.\nDesde que acondicionadas e armazenados em condições corretas.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marilene',
    text: 'Pessoal, moro no Paraná, estou realizando mais uma compra de mudas com a Valéria. Chegaram lindas, mudas de qualidade e ela da toda explicação de como cuidar. Estou muito satisfeita. Ela ganhou meu coração. Gratidão.',
    rating: 5,
    flag: '🇧🇷'
  },
  {
    name: 'Liliana',
    text: 'Agradecimentos calorosos, o envelope seu chegou muito rápido, considerando que vem do Brasil!.',
    rating: 5,
    flag: '🇷🇴'
  },
  {
    name: 'Zilda',
    text: 'Eu compro sementes com a Valéria a muito tempo, adoro! Sou muito grata por tudo pelas belas Episcias São Paulo com todos os suportes que ela me deu desde o começo, muito obrigada',
    rating: 5,
    flag: '🇧🇷'
  },
  {
    name: 'João',
    text: 'Também comprei as sementes com a Valéria, e sob suas orientações deu tudo certo. Inclusive postei no grupo os resultados. Super recomendo!',
    rating: 5,
    flag: '🇧🇷'
  }
];

export const COLLECTION_IMAGES = [
  { url: 'https://i.pinimg.com/736x/5d/37/7d/5d377d1cb16f4ca5207a38591f66d7c9.jpg', alt: 'Episcia Variedade 1' },
  { url: 'https://i.pinimg.com/736x/f5/16/66/f516666f9a1f6aac11f7312b5e6f0088.jpg', alt: 'Episcia Variedade 2' },
  { url: 'https://i.pinimg.com/736x/88/f9/4a/88f94a8c65312377f009dc596dc10f57.jpg', alt: 'Episcia Variedade 3' },
  { url: 'https://i.pinimg.com/736x/f3/97/f9/f397f93ffe7f0af35bb22f0359591649.jpg', alt: 'Episcia Variedade 4' },
  { url: 'https://i.pinimg.com/736x/f0/21/90/f02190c96c846a9ff291d9201bf4e36f.jpg', alt: 'Episcia Variedade 5' },
  { url: 'https://i.pinimg.com/736x/34/f1/90/34f190c92d9ff7e23ece159ca8260445.jpg', alt: 'Episcia Variedade 6' },
  { url: 'https://i.pinimg.com/736x/52/9e/54/529e5421446f355cd1476ec90301dd58.jpg', alt: 'Episcia Variedade 7' },
  { url: 'https://i.pinimg.com/736x/8b/5e/1e/8b5e1e62720e9e236558ea882b470b47.jpg', alt: 'Episcia Variedade 8' },
  { url: 'https://i.pinimg.com/736x/6a/67/13/6a6713431b38c43289c5c402d3613bb0.jpg', alt: 'Episcia Variedade 9' },
];

export const GALLERY_IMAGES = [
  { url: 'https://i.pinimg.com/736x/25/9d/6d/259d6dc868cd89e9c778a1f0af0ce0a8.jpg', alt: 'Episcia Galeria 1' },
  { url: 'https://i.pinimg.com/736x/8e/b7/9b/8eb79b6c5dc90c1b2451289df5558a0b.jpg', alt: 'Episcia Galeria 2' },
  { url: 'https://i.pinimg.com/736x/ef/b5/74/efb574d15f278edfb04ac5f1688ceaea.jpg', alt: 'Episcia Galeria 3' },
  { url: 'https://i.pinimg.com/736x/51/c3/e3/51c3e3f58055f32c2a8f9dbf1fc5113d.jpg', alt: 'Episcia Galeria 4' },
  { url: 'https://i.pinimg.com/736x/5b/3f/16/5b3f16955a79ad5d16e040521cfcb963.jpg', alt: 'Episcia Galeria 5' },
  { url: 'https://i.pinimg.com/736x/7f/2f/d3/7f2fd36f27bc6995e9470bfebbe8e85d.jpg', alt: 'Episcia Galeria 6' },
  { url: 'https://i.pinimg.com/736x/40/3b/f6/403bf63033c1ff6f844b2ed5f6a897e4.jpg', alt: 'Episcia Galeria 9' },
  { url: 'https://i.pinimg.com/736x/d7/50/0d/d7500dbb61f14dbe5beeaf63fa002d1c.jpg', alt: 'Episcia Galeria 10' },
];

export const GERMINATION_IMAGES = [
  { url: 'https://i.pinimg.com/736x/64/bc/77/64bc773a0d38e105674750ee81e7f7ca.jpg', alt: 'Germinação 1' },
  { url: 'https://i.pinimg.com/736x/dd/b1/49/ddb149f797ca7507890f485f10d80238.jpg', alt: 'Germinação 4' },
  { url: 'https://i.pinimg.com/736x/ee/30/bf/ee30bf218f9ae28ee42b20eec92003d2.jpg', alt: 'Germinação 5' },
  { url: 'https://i.pinimg.com/736x/40/3b/f6/403bf63033c1ff6f844b2ed5f6a897e4.jpg', alt: 'Germinação 6' },
  { url: 'https://i.pinimg.com/736x/1f/4a/ef/1f4aef87c6c6c137c2b91544c7289c9a.jpg', alt: 'Germinação 7' },
  { url: 'https://i.pinimg.com/736x/69/c9/56/69c9566e2a7fdceefa16a4652f2ca76d.jpg', alt: 'Germinação 8' },
  { url: 'https://i.pinimg.com/736x/4e/eb/26/4eeb26a1d29878addb9b9d4eafb02d4d.jpg', alt: 'Germinação 9' },
  { url: 'https://i.pinimg.com/736x/31/f4/77/31f47759cbb1acca02054d6c8e7adf7d.jpg', alt: 'Germinação 10' },
  { url: 'https://i.pinimg.com/736x/91/1e/a7/911ea748edbf9dd6d91f773edea95483.jpg', alt: 'Germinação 11' },
  { url: 'https://i.pinimg.com/736x/83/b8/4a/83b84a84c557f39380158aa21da6e22e.jpg', alt: 'Germinação 12' },
  { url: 'https://i.pinimg.com/736x/e7/8f/a6/e78fa670f9ab1a17365ea2073ba4161e.jpg', alt: 'Germinação 13' },
];

export const OTHER_SEEDS_IMAGES = [
  { url: 'https://i.pinimg.com/736x/6b/b6/2e/6bb62e5fbbd26b5864a0462858cc035d.jpg', alt: 'Outras sementes 1' },
  { url: 'https://i.pinimg.com/736x/c0/84/36/c084367b985c46bb7fe49d47ab218b29.jpg', alt: 'Outras sementes 2' },
  { url: 'https://i.pinimg.com/736x/c6/ec/da/c6ecda9a38174c42ce53a541015e74f8.jpg', alt: 'Outras sementes 3' },
  { url: 'https://i.pinimg.com/736x/48/9c/27/489c27712679e9815d633fecbd1cc650.jpg', alt: 'Outras sementes 4' },
];

