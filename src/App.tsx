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

  return (
    <div className="page">
      {showIntro ? (
        <div className="intro" onClick={() => setShowIntro(false)}>
          <div className="intro__glow intro__glow--1" />
          <div className="intro__glow intro__glow--2" />
          <div className="intro__card">
            <p className="eyebrow">NeuroMatrix</p>
            <h2>Подборка ИИ-сервисов</h2>
            <p className="lead">
              Текст, код, дизайн, видео, голос и поиск — всё в одном месте.
              Жмите, чтобы открыть и использовать прямо из Telegram.
            </p>
            <div className="intro__pills">
              <span>40+ сервисов</span>
              <span>Быстрые ссылки</span>
              <span>Теги и категории</span>
            </div>
            <button className="intro__button">Погнали 🚀</button>
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

  