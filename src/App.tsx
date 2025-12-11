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
      <header className="hero">
        <div>
          <p className="eyebrow">Телеграм Mini App</p>
          <h1>Подборка нейросетей</h1>
          <p className="lead">
            Быстрые ссылки на сервисы под разные задачи: текст, код, дизайн,
            голос и поиск.
          </p>
        </div>
        <div className="filters">
          <input
            type="search"
            placeholder="Поиск по названию, тегу, описанию..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </header>

      <main className="grid">
        {filtered.length ? (
          filtered.map((network) => <NetworkCard key={network.id} network={network} />)
        ) : (
          <div className="empty">Ничего не найдено. Попробуйте другой запрос.</div>
        )}
      </main>
    </div>
  );
}

