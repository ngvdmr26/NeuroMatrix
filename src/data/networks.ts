export type Network = {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  tags?: string[];
};

export const networks: Network[] = [
  {
    id: "chatgpt",
    title: "ChatGPT",
    description: "Универсальный ассистент для диалогов, правок текста и идей.",
    category: "Общий ассистент",
    link: "https://chat.openai.com",
    tags: ["диалог", "текст", "креатив"]
  },
  {
    id: "claude",
    title: "Claude",
    description: "Сильный помощник для работы с документами и аналитикой.",
    category: "Общий ассистент",
    link: "https://claude.ai",
    tags: ["документы", "аналитика"]
  },
  {
    id: "midjourney",
    title: "Midjourney",
    description: "Генерация изображений по текстовому описанию.",
    category: "Дизайн",
    link: "https://www.midjourney.com",
    tags: ["изображения", "prompt"]
  },
  {
    id: "stable-diffusion",
    title: "Stable Diffusion",
    description: "Локальная и облачная генерация изображений, контроль параметров.",
    category: "Дизайн",
    link: "https://stability.ai/stable-diffusion",
    tags: ["опенсорс", "фото", "генерация"]
  },
  {
    id: "runway",
    title: "Runway Gen-2",
    description: "Видео из текста, изображения в видео, инструменты монтажа.",
    category: "Видео",
    link: "https://runwayml.com",
    tags: ["video", "text-to-video"]
  },
  {
    id: "elevenlabs",
    title: "ElevenLabs",
    description: "Клонирование и синтез голоса с высокой натуральностью.",
    category: "Аудио",
    link: "https://elevenlabs.io",
    tags: ["voice", "tts"]
  },
  {
    id: "whisper",
    title: "OpenAI Whisper",
    description: "Надежное распознавание речи на многих языках.",
    category: "Аудио",
    link: "https://openai.com/research/whisper",
    tags: ["asr", "transcribe"]
  },
  {
    id: "notion-ai",
    title: "Notion AI",
    description: "Помощник для заметок, задач и баз знаний внутри Notion.",
    category: "Продуктивность",
    link: "https://www.notion.so/product/ai",
    tags: ["заметки", "планирование"]
  },
  {
    id: "mixo",
    title: "Mixo",
    description: "Конструктор лендингов с генерацией текста и изображений.",
    category: "Ноут/сайты",
    link: "https://mixo.io",
    tags: ["landing", "стартап"]
  },
  {
    id: "github-copilot",
    title: "GitHub Copilot",
    description: "Автодополнение кода и чат-помощник в IDE.",
    category: "Разработка",
    link: "https://github.com/features/copilot",
    tags: ["код", "IDE"]
  },
  {
    id: "perplexity",
    title: "Perplexity",
    description: "Ответы с ссылками на источники, быстрый веб-ресерч.",
    category: "Поиск",
    link: "https://www.perplexity.ai",
    tags: ["search", "citations"]
  }
];

