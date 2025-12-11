export type Network = {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  logo: string;
  tags?: string[];
};

export const networks: Network[] = [
  {
    id: "chatgpt",
    title: "ChatGPT",
    description: "Универсальный ассистент: тексты, идеи, правки, код.",
    category: "Общий ассистент",
    link: "https://chat.openai.com",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
    tags: ["диалог", "текст", "код"]
  },
  {
    id: "claude",
    title: "Claude",
    description: "Сильный помощник для документов, аналитики и ресерча.",
    category: "Общий ассистент",
    link: "https://claude.ai",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anthropic/anthropic-original.svg",
    tags: ["аналитика", "PDF", "контекст"]
  },
  {
    id: "gemini",
    title: "Gemini",
    description: "Мультимодальный помощник от Google: текст, картинки, код.",
    category: "Общий ассистент",
    link: "https://gemini.google.com",
    logo: "https://www.gstatic.com/ai/branding/gemini/google-gemini-icon.png",
    tags: ["мультимодальность", "google", "код"]
  },
  {
    id: "perplexity",
    title: "Perplexity",
    description: "Ответы со ссылками на источники, быстрый веб-ресерч.",
    category: "Поиск",
    link: "https://www.perplexity.ai",
    logo: "https://avatars.githubusercontent.com/u/133964884?s=200&v=4",
    tags: ["search", "citations"]
  },
  {
    id: "phind",
    title: "Phind",
    description: "Поиск + кодовые ответы для разработчиков.",
    category: "Поиск",
    link: "https://www.phind.com",
    logo: "https://phind.com/static/favicon/android-chrome-192x192.png",
    tags: ["code", "research"]
  },
  {
    id: "midjourney",
    title: "Midjourney",
    description: "Генерация изображений по описанию, фотореализм и арт.",
    category: "Дизайн",
    link: "https://www.midjourney.com",
    logo: "https://cdn.midjourney.com/assets/images/favicon.png",
    tags: ["image", "prompt", "art"]
  },
  {
    id: "stable-diffusion",
    title: "Stable Diffusion",
    description: "Опенсорс генерация изображений, контроль параметров.",
    category: "Дизайн",
    link: "https://stability.ai/stable-diffusion",
    logo: "https://stability.ai/favicon.ico",
    tags: ["opensource", "image", "control"]
  },
  {
    id: "dalle",
    title: "DALL·E 3",
    description: "Генерация картинок с сильным пониманием контекста.",
    category: "Дизайн",
    link: "https://openai.com/index/dall-e-3/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
    tags: ["image", "контекст"]
  },
  {
    id: "canva-magic",
    title: "Canva Magic Studio",
    description: "Инструменты генерации и редактирования контента прямо в Canva.",
    category: "Дизайн",
    link: "https://www.canva.com/magic-studio/",
    logo: "https://static.canva.com/static/images/canva-icon.png",
    tags: ["дизайн", "редактор"]
  },
  {
    id: "runway",
    title: "Runway Gen-2",
    description: "Видео из текста и изображений, инструменты монтажа.",
    category: "Видео",
    link: "https://runwayml.com",
    logo: "https://runwayml.com/apple-touch-icon.png",
    tags: ["video", "text-to-video"]
  },
  {
    id: "pika",
    title: "Pika",
    description: "Генерация коротких видео и анимаций из описания.",
    category: "Видео",
    link: "https://pika.art",
    logo: "https://pika.art/favicon-32x32.png",
    tags: ["video", "animation"]
  },
  {
    id: "heygen",
    title: "HeyGen",
    description: "Видео с аватарами, озвучка и липсинк под текст.",
    category: "Видео",
    link: "https://www.heygen.com",
    logo: "https://assets-global.website-files.com/64a6e9b30d6f7eaec1524f26/64a6e9b30d6f7eaec1524f49_Favicon.png",
    tags: ["avatar", "lip-sync"]
  },
  {
    id: "elevenlabs",
    title: "ElevenLabs",
    description: "Клонирование и синтез голоса с высокой натуральностью.",
    category: "Аудио",
    link: "https://elevenlabs.io",
    logo: "https://elevenlabs.io/favicon-96x96.png",
    tags: ["voice", "tts"]
  },
  {
    id: "whisper",
    title: "OpenAI Whisper",
    description: "Распознавание речи на многих языках, устойчиво к шумам.",
    category: "Аудио",
    link: "https://openai.com/research/whisper",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
    tags: ["asr", "transcribe"]
  },
  {
    id: "suno",
    title: "Suno",
    description: "Генерация музыки и песен в разных жанрах.",
    category: "Аудио",
    link: "https://www.suno.ai",
    logo: "https://www.suno.ai/favicon-32x32.png",
    tags: ["music", "song"]
  },
  {
    id: "notion-ai",
    title: "Notion AI",
    description: "Помощник для заметок, задач и баз знаний внутри Notion.",
    category: "Продуктивность",
    link: "https://www.notion.so/product/ai",
    logo: "https://www.notion.so/front-static/favicon.ico",
    tags: ["заметки", "планирование"]
  },
  {
    id: "mixo",
    title: "Mixo",
    description: "Генерация лендингов с текстом и изображениями.",
    category: "Продуктивность",
    link: "https://mixo.io",
    logo: "https://mixo.io/favicon-32x32.png",
    tags: ["landing", "стартап"]
  },
  {
    id: "zapier-ai",
    title: "Zapier AI",
    description: "Автоматизации с ИИ: подключение сервисов без кода.",
    category: "Продуктивность",
    link: "https://zapier.com/ai",
    logo: "https://cdn.zappy.app/4b5b7ef52025b326dba4d60b18f1c52f.png",
    tags: ["automation", "nocode"]
  },
  {
    id: "github-copilot",
    title: "GitHub Copilot",
    description: "Автодополнение кода и чат-помощник в IDE.",
    category: "Разработка",
    link: "https://github.com/features/copilot",
    logo: "https://github.githubassets.com/favicons/favicon.svg",
    tags: ["код", "IDE"]
  },
  {
    id: "cursor",
    title: "Cursor",
    description: "AI-редактор кода с быстрыми промптами и автодополнением.",
    category: "Разработка",
    link: "https://www.cursor.com",
    logo: "https://www.cursor.com/favicon-32x32.png",
    tags: ["editor", "pair-programming"]
  },
  {
    id: "replit-ghostwriter",
    title: "Replit Ghostwriter",
    description: "Помощник по коду в браузерной IDE Replit.",
    category: "Разработка",
    link: "https://replit.com/site/ghostwriter",
    logo: "https://replit.com/public/icons/favicon-prompt.ico",
    tags: ["code", "browser"]
  },
  {
    id: "tabnine",
    title: "Tabnine",
    description: "Локальные и облачные модели автодополнения кода.",
    category: "Разработка",
    link: "https://www.tabnine.com",
    logo: "https://www.tabnine.com/favicon-32x32.png",
    tags: ["code", "privacy"]
  },
  {
    id: "leonardo",
    title: "Leonardo AI",
    description: "Генерация игровых ассетов, стилизация и апскейл.",
    category: "Дизайн",
    link: "https://leonardo.ai",
    logo: "https://leonardo.ai/favicon-32x32.png",
    tags: ["game", "assets"]
  },
  {
    id: "ideogram",
    title: "Ideogram",
    description: "Генерация изображений с качественным текстом на картинках.",
    category: "Дизайн",
    link: "https://ideogram.ai",
    logo: "https://ideogram.ai/favicon-32x32.png",
    tags: ["text2image", "text-on-image"]
  },
  {
    id: "grok",
    title: "Grok",
    description: "Ассистент с доступом к актуальным данным X/Twitter.",
    category: "Общий ассистент",
    link: "https://x.ai",
    logo: "https://x.ai/favicon.ico",
    tags: ["real-time", "news"]
  },
  {
    id: "mistral",
    title: "Mistral Le Chat",
    description: "Лёгкие и быстрые модели с хорошей точностью.",
    category: "Общий ассистент",
    link: "https://chat.mistral.ai",
    logo: "https://mistral.ai/wp-content/themes/mistral.ai/favicon.ico",
    tags: ["fast", "api"]
  },
  {
    id: "descript",
    title: "Descript",
    description: "Редактор аудио/видео с текстовым монтажом и овердабом.",
    category: "Видео",
    link: "https://www.descript.com",
    logo: "https://www.descript.com/favicon-32x32.png",
    tags: ["podcast", "editing"]
  },
  {
    id: "tome",
    title: "Tome",
    description: "Генерация презентаций, визуальные сторителлинг-слайды.",
    category: "Продуктивность",
    link: "https://tome.app",
    logo: "https://tome.app/favicon-32x32.png",
    tags: ["slides", "story"]
  },
  {
    id: "durable",
    title: "Durable",
    description: "Создание сайтов и текстов для малого бизнеса за минуты.",
    category: "Продуктивность",
    link: "https://durable.co",
    logo: "https://durable.co/favicon-32x32.png",
    tags: ["website", "smb"]
  },
  {
    id: "bling",
    title: "Bling",
    description: "Генерация идей и быстрые подсказки для старта проекта.",
    category: "Идеи",
    link: "https://www.bling.ai",
    logo: "https://www.bling.ai/favicon.ico",
    tags: ["idea", "brainstorm"]
  },
  {
    id: "10web",
    title: "10web",
    description: "AI-конструктор сайтов и оптимизация перформанса.",
    category: "Веб-сайты",
    link: "https://10web.io",
    logo: "https://10web.io/wp-content/uploads/2020/05/cropped-10web-fav-32x32.png",
    tags: ["website", "builder"]
  },
  {
    id: "framer",
    title: "Framer AI",
    description: "Создание лендингов и прототипов за минуты.",
    category: "Веб-сайты",
    link: "https://www.framer.com/ai",
    logo: "https://framerusercontent.com/modules/assets/favicons/apple-touch-icon.png",
    tags: ["website", "prototype"]
  },
  {
    id: "rytr",
    title: "Rytr",
    description: "Генерация текстов и постов с готовыми шаблонами.",
    category: "Текст",
    link: "https://rytr.me",
    logo: "https://app.rytr.me/apple-touch-icon.png",
    tags: ["copy", "shortform"]
  },
  {
    id: "jasper",
    title: "Jasper",
    description: "Маркетинговые тексты, блоги и автофреймворки.",
    category: "Текст",
    link: "https://www.jasper.ai",
    logo: "https://www.jasper.ai/favicon-32x32.png",
    tags: ["marketing", "copy"]
  },
  {
    id: "writesonic",
    title: "Writesonic",
    description: "Тексты, посты, SEO и соцсети на автопилоте.",
    category: "Текст",
    link: "https://writesonic.com",
    logo: "https://writesonic.com/favicon-32x32.png",
    tags: ["seo", "copy"]
  },
  {
    id: "chatbase",
    title: "Chatbase",
    description: "Создание чат-ботов на основе ваших документов.",
    category: "Чат-боты",
    link: "https://www.chatbase.co",
    logo: "https://www.chatbase.co/favicon-32x32.png",
    tags: ["bot", "docs"]
  },
  {
    id: "sitegpt",
    title: "SiteGPT",
    description: "Бот с ответами по контенту вашего сайта.",
    category: "Чат-боты",
    link: "https://www.sitegpt.ai",
    logo: "https://www.sitegpt.ai/favicon-32x32.png",
    tags: ["bot", "site"]
  },
  {
    id: "chatsonic",
    title: "ChatSonic",
    description: "Чат-бот с поиском и генерацией изображений.",
    category: "Чат-боты",
    link: "https://writesonic.com/chat",
    logo: "https://writesonic.com/favicon-32x32.png",
    tags: ["bot", "search"]
  },
  {
    id: "make",
    title: "Make",
    description: "Низкокодовые автоматизации с триггерами и действиями.",
    category: "Автоматизация",
    link: "https://www.make.com",
    logo: "https://www.make.com/favicon-32x32.png",
    tags: ["automation", "nocode"]
  },
  {
    id: "zapier",
    title: "Zapier",
    description: "Связи между сервисами без кода, библиотека коннекторов.",
    category: "Автоматизация",
    link: "https://zapier.com",
    logo: "https://zapier.com/favicon.ico",
    tags: ["automation", "integrations"]
  },
  {
    id: "bardeen",
    title: "Bardeen",
    description: "Автоматизация рутины в браузере с ИИ.",
    category: "Автоматизация",
    link: "https://www.bardeen.ai",
    logo: "https://www.bardeen.ai/favicon-32x32.png",
    tags: ["automation", "browser"]
  },
  {
    id: "synthesia",
    title: "Synthesia",
    description: "Генерация видео с аватарами по тексту.",
    category: "Видео",
    link: "https://www.synthesia.io",
    logo: "https://www.synthesia.io/favicon-32x32.png",
    tags: ["avatar", "video"]
  },
  {
    id: "flair",
    title: "Flair AI",
    description: "Генерация рекламных креативов и продуктовых кадров.",
    category: "Дизайн",
    link: "https://flair.ai",
    logo: "https://flair.ai/favicon-32x32.png",
    tags: ["design", "ads"]
  },
  {
    id: "booth",
    title: "Booth AI",
    description: "AI-фотосессии и визуалы товаров.",
    category: "Дизайн",
    link: "https://booth.ai",
    logo: "https://booth.ai/favicon-32x32.png",
    tags: ["product", "photo"]
  },
  {
    id: "canva-ai",
    title: "Canva AI",
    description: "Генерация дизайна, текста и изображений внутри Canva.",
    category: "Дизайн",
    link: "https://www.canva.com/ai-image-generator/",
    logo: "https://static.canva.com/static/images/canva-icon.png",
    tags: ["design", "editor"]
  },
  {
    id: "boomy",
    title: "Boomy",
    description: "Создание музыки за минуты с экспортом в стриминги.",
    category: "Музыка",
    link: "https://boomy.com",
    logo: "https://boomy.com/assets/favicons/favicon-32x32.png",
    tags: ["music", "stream"]
  },
  {
    id: "amper",
    title: "Amper Music",
    description: "Генерация треков под настроение и длительность.",
    category: "Музыка",
    link: "https://www.shutterstock.com/music/ai",
    logo: "https://www.shutterstock.com/apple-touch-icon.png",
    tags: ["music", "stock"]
  },
  {
    id: "jukedeck",
    title: "Jukedeck",
    description: "AI-музыка для видео и контента.",
    category: "Музыка",
    link: "https://www.jukedeck.com",
    logo: "https://www.jukedeck.com/favicon.ico",
    tags: ["music", "video"]
  },
  {
    id: "adcreative",
    title: "AdCreative",
    description: "Креативы и баннеры для рекламы с помощью ИИ.",
    category: "Маркетинг",
    link: "https://www.adcreative.ai",
    logo: "https://www.adcreative.ai/favicon-32x32.png",
    tags: ["ads", "banners"]
  },
  {
    id: "simplified",
    title: "Simplified",
    description: "Дизайн, копирайт и соцсети в одном инструменте.",
    category: "Маркетинг",
    link: "https://simplified.com",
    logo: "https://cdn.simplified.com/favicon-32x32.png",
    tags: ["marketing", "design"]
  },
  {
    id: "pencil",
    title: "Pencil",
    description: "Генерация рекламных видео и статичных креативов.",
    category: "Маркетинг",
    link: "https://www.trypencil.com",
    logo: "https://assets.trypencil.com/app/favicon-32x32.png",
    tags: ["ads", "video"]
  }
];

