import type { Network } from "../data/networks";

type Props = {
  network: Network;
};

const openLink = (url: string) => {
  window.open(url, "_blank", "noreferrer");
};

export function NetworkCard({ network }: Props) {
  return (
    <article className="card" onClick={() => openLink(network.link)}>
      <div className="card__top">
        <div className="avatar">
          <img src={network.logo} alt={network.title} loading="lazy" />
        </div>
        <div className="card__meta">
          <div className="card__header">
            <h3>{network.title}</h3>
            <span className="pill">{network.category}</span>
          </div>
          <p className="card__description">{network.description}</p>
        </div>
      </div>

      {network.tags?.length ? (
        <div className="tags">
          {network.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      <div className="card__link">Открыть →</div>
    </article>
  );
}

