import { useEffect, useMemo, useState } from "react";
import { NetworkCard } from "./components/NetworkCard";
import { networks } from "./data/networks";

type ThemeParams = {
  bg_color?: string;
  text_color?: string;
  button_color?: string;
  button_text_color?: string;
  secondary_bg_color?: string;
  hint_color?: string;
};

const getTelegramTheme = (): ThemeParams => {
  const tg = (window as any)?.Telegram?.WebApp;
  if (!tg) {
    return {};
  }
  tg.ready?.();
  tg.expand?.();
  return tg.themeParams || {};
};

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Все");
  const [task, setTask] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const theme = getTelegramTheme();
    const root = document.documentElement.style;
    if (theme.bg_color) root.setProperty("--bg", theme.bg_color);
    if (theme.text_color) root.setProperty("--text", theme.text_color);
    if (theme.secondary_bg_color)
      root.setProperty("--card", theme.secondary_bg_color);
    if (theme.button_color) root.setProperty("--accent", theme.button_color);
    if (theme.button_text_color)
      root.setProperty("--accentText", theme.button_text_color);
    if (theme.hint_color) root.setProperty("--muted", theme.hint_color);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(
    () => ["Все", ...Array.from(new Set(networks.map((n) => n.category)))],
    []
  );

  const filtered = useMemo(() => {
    return networks.filter((n) => {
      const byCategory = category === "Все" || n.category === category;
      const term = search.trim().toLowerCase();
      const byText =
        !term ||
        n.title.toLowerCase().includes(term) ||
        n.description.toLowerCase().includes(term) ||
        n.tags?.some((t) => t.toLowerCase().includes(term));
      return byCategory && byText;
    });
  }, [category, search]);

  const recommended = useMemo(() => {
    const term = task.trim().toLowerCase();
    const tokens = term.split(/\s+/).filter(Boolean);

    const scoreNetwork = (n: (typeof networks)[number]) => {
      let score = 0;
      if (!term) return score;
      const haystack = [
        n.title,
        n.description,
        n.category,
        ...(n.tags || [])
      ]
        .join(" ")
        .toLowerCase();

      tokens.forEach((t) => {
        if (!t) return;
        if (haystack.includes(t)) score += 3;
        if (n.category.toLowerCase().includes(t)) score += 2;
        if (n.tags?.some((tag) => tag.toLowerCase() === t)) score += 2;
      });

      // бонус за совпадение категории фильтра
      if (category !== "Все" && n.category === category) {
        score += 1.5;
      }
      return score;
    };

    return networks
      .map((n) => ({ n, score: scoreNetwork(n) }))
      .filter(({ score }) => score > 0 || !term)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(({ n }) => n);
  }, [task, category]);

  return (
    <div className="page">
      {showIntro ? (
        <div className="intro" onClick={() => setShowIntro(false)}>
          <div className="intro__sky">
            <div className="intro__ring intro__ring--a" />
            <div className="intro__ring intro__ring--b" />
            <div className="intro__particles">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="intro__beam" />
          </div>
          <div className="intro__content">
            <p className="eyebrow">NeuroMatrix</p>
            <h2>Лучшие нейросети для любой задачи</h2>
            <p className="lead intro__lead">
              Идеи, тексты, сайты, чат-боты, картинки, видео, музыка,
              автоматизация и маркетинг — собрали всё в одном мини-приложении.
            </p>
            <div className="intro__pills">
              <span>Интерактивный подбор</span>
              <span>40+ сервисов</span>
              <span>Категории как в витрине</span>
            </div>
            <button className="intro__button">Начать</button>
            <div className="intro__hint">Нажмите или подождите, чтобы продолжить</div>
          </div>
        </div>
      ) : null}

      <header className="hero">
        <div className="hero__text">
          <p className="eyebrow">Telegram Mini App</p>
          <h1>NeuroMatrix</h1>
          <p className="lead">
            Большой каталог нейросетей под любые задачи. Фильтруйте, ищите и
            открывайте сервисы в один тап.
          </p>
          <div className="badges">
            <span>Ассистенты</span>
            <span>Дизайн</span>
            <span>Видео</span>
            <span>Голос</span>
            <span>Код</span>
          </div>
        </div>
        <div className="filters">
          <div className="input-wrap">
            <input
              type="search"
              placeholder="Поиск по названию, тегу, описанию..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="input-hint">⌕</div>
          </div>
          <div className="input-wrap">
            <input
              type="text"
              placeholder="Опишите задачу: например, сделать лендинг, сгенерировать музыку, собрать чат-бота..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <div className="input-hint">✨</div>
          </div>
          <div className="chips">
            {categories.map((c) => (
              <button
                key={c}
                className={`chip ${category === c ? "chip--active" : ""}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section__head">
          <p className="eyebrow">Подбор под задачу</p>
          <h3>Мы нашли лучшее</h3>
          <p className="muted">
            Чем подробнее сформулируете задачу, тем точнее подбор. Совместите с
            категорией для ещё лучшего совпадения.
          </p>
        </div>
        <div className="grid grid--recommended">
          {recommended.map((network) => (
            <NetworkCard key={network.id} network={network} />
          ))}
        </div>
      </section>

      <main className="grid">
        {filtered.length ? (
          filtered.map((network) => (
            <NetworkCard key={network.id} network={network} />
          ))
        ) : (
          <div className="empty">
            Ничего не найдено. Попробуйте другой запрос или категорию.
          </div>
        )}
      </main>
    </div>
  );
}

  