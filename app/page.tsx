"use client";

import { useMemo, useState } from "react";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_ADDRESS ?? "";
const X_ACCOUNT_URL = "https://x.com/selfie_catsol_";

type TimelineVisual = {
  src: string;
  alt: string;
  credit: string;
  href: string;
  position?: string;
};

function TimelineMedia({ visual }: { visual: TimelineVisual }) {
  return (
    <div className="timeline-media">
      <img src={visual.src} alt={visual.alt} loading="lazy" style={{ objectPosition: visual.position ?? "center" }} />
    </div>
  );
}

const timeline = [
  {
    year: "c. 2015",
    title: "The visual gag appears",
    copy: "A gray tabby leans into an ultra-wide action camera. One outstretched paw makes the frame look exactly like a selfie.",
    source: "Original archive",
    href: "https://www.instagram.com/yoremahm/",
    visual: {
      src: "/timeline/01-origin.jpg",
      alt: "The gray tabby in two early Selfie Cat photographs",
      credit: "EARLY CAMERA ROLL · @YOREMAHM",
      href: "https://www.instagram.com/yoremahm/",
    } satisfies TimelineVisual,
  },
  {
    year: "JUL 2015",
    title: "The camera roll begins",
    copy: "Early GoPro experiments land on @yoremahm. The close lens, the outstretched paw, the attitude: the format is born.",
    source: "Refinery29",
    href: "https://www.refinery29.com/en-us/2016/01/101342/cat-selfies-better-than-us",
    visual: {
      src: "/timeline/02-camera-roll.jpg",
      alt: "the original July 6, 2015 GoPro cat post",
      credit: "ORIGINAL POST \u00B7 JUL 6, 2015",
      href: "https://www.instagram.com/p/40N1FtJ5yR/",
    } satisfies TimelineVisual,
  },
  {
    year: "DEC 2015",
    title: "The template locks in",
    copy: "The outstretched paw, fisheye lens and crowded background become an instantly recognizable internet image format.",
    source: "Original archive",
    href: "https://www.instagram.com/p/_Mad0ZJ53V/",
    visual: {
      src: "/timeline/03-squad.jpg",
      alt: "A wide-angle group selfie that helped define the Selfie Cat meme",
      credit: "ORIGINAL POST \u00B7 DEC 12, 2015",
      href: "https://www.instagram.com/p/_Mad0ZJ53V/",
    } satisfies TimelineVisual,
  },
  {
    year: "JAN 2016",
    title: "Worldwide upload complete",
    copy: "Love Meow, ABC News, Refinery29 and others introduce Selfie Cat to a global audience in one wild press cycle.",
    source: "Press archive",
    href: "https://www.refinery29.com/en-us/2016/01/101342/cat-selfies-better-than-us",
    visual: {
      src: "/timeline/04-worldwide.jpg",
      alt: "A viral video thumbnail documenting the Selfie Cat meme",
      credit: "EPIC VIRAL VIDS \u00B7 YOUTUBE",
      href: "https://www.youtube.com/watch?v=_qSPt5pF-u8",
    } satisfies TimelineVisual,
  },
  {
    year: "2019",
    title: "Half a million in the frame",
    copy: "Coverage reports the camera roll passing 500,000 followers as the selfie format keeps reaching new feeds.",
    source: "Camera roll",
    href: "https://www.instagram.com/yoremahm/",
    visual: {
      src: "/timeline/05-half-million.jpg",
      alt: "A later Selfie Cat post from the viral camera roll",
      credit: "LATER CAMERA ROLL \u00B7 @YOREMAHM",
      href: "https://www.instagram.com/p/BqgbhgQn3cl/",
    } satisfies TimelineVisual,
  },
  {
    year: "NOW",
    title: "The legend gets a new roll",
    copy: "A community tribute keeps the flash on—one paw, one frame, one very internet piece of history.",
    source: "You are here",
    href: "#top",
    visual: {
      src: "/selfie-cat-tribute.png",
      alt: "Original tribute artwork celebrating the wide-angle Selfie Cat meme",
      credit: "ORIGINAL TRIBUTE ARTWORK",
      href: "#top",
    } satisfies TimelineVisual,
  },
];

const moments = [
  {
    number: "01",
    tag: "THE ORIGIN SHOT",
    title: "Paw on the shutter",
    copy: "A curious paw near the action camera created the impossible illusion: a cat with perfect selfie technique.",
    href: "https://www.instagram.com/yoremahm/",
    tone: "sun",
    glyph: "↗",
  },
  {
    number: "02",
    tag: "THE WIDE-ANGLE ERA",
    title: "One paw. A whole frame.",
    copy: "Crowded backgrounds and extreme perspective turned a lucky camera angle into a repeatable meme template.",
    href: "https://www.instagram.com/p/_Mad0ZJ53V/",
    tone: "blue",
    glyph: "✦",
  },
  {
    number: "03",
    tag: "THE WINTER ROLL",
    title: "Snow, flash, tongue out",
    copy: "The snowy selfies pushed the fisheye drama even further—and became some of the most shared images in the set.",
    href: "https://www.instagram.com/p/BAK9WuEJ56G/",
    tone: "paper",
    glyph: "❋",
  },
  {
    number: "04",
    tag: "THE PHOTOBOMB",
    title: "Every lens becomes a selfie",
    copy: "The joke lands before any caption does: paw forward, face centered, total confidence. Main-character behavior, documented.",
    href: "https://www.instagram.com/yoremahm/",
    tone: "ink",
    glyph: "●",
  },
];

const press = [
  ["Original camera roll", "JUL 2015", "https://www.instagram.com/p/40N1FtJ5yR/"],
  ["Refinery29", "JAN 15, 2016", "https://www.refinery29.com/en-us/2016/01/101342/cat-selfies-better-than-us"],
  ["Viral video archive", "JAN 2016", "https://www.youtube.com/watch?v=_qSPt5pF-u8"],
  ["Reddit rediscovery", "MAY 2021", "https://www.reddit.com/r/Catmemes/comments/nfxta1/going_to_have_to_take_away_his_phone/"],
  ["Reddit repost trail", "APR 2023", "https://www.reddit.com/r/pics/comments/12ifr23/no_comment/"],
];

const videos = [
  { id: "c2kxS6amOLE", title: "Selfie Cat — The GoPro Era", author: "Archive upload" },
  { id: "_qSPt5pF-u8", title: "This Cat Takes Better Selfies Than You", author: "Epic Viral Vids" },
];

const instagramPosts = [
  { id: "_Mad0ZJ53V", label: "THE SQUAD ARRIVES", date: "DEC 12, 2015" },
  { id: "_J7iyip5yp", label: "DUCKFACE ERA", date: "DEC 11, 2015" },
  { id: "BAK9WuEJ56G", label: "TONGUE-OUT TUESDAY", date: "JAN 5, 2016" },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [flashCount, setFlashCount] = useState(0);
  const hasContract = CONTRACT_ADDRESS.length > 30;
  const shortAddress = useMemo(() => {
    if (!hasContract) return "CONTRACT REVEALED AT LAUNCH";
    return `${CONTRACT_ADDRESS.slice(0, 7)}...${CONTRACT_ADDRESS.slice(-7)}`;
  }, [hasContract]);

  async function copyContract() {
    if (!hasContract) return;
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function fireFlash() {
    setFlashCount((count) => count + 1);
  }

  return (
    <main id="top">
      <div className={`flash-overlay ${flashCount ? "active" : ""}`} key={flashCount} aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Selfie Cat archive home">
          SELFIE<span>CAT</span><sup>™*</sup>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#story">The story</a>
          <a href="#moments">Best moments</a>
          <a href="#proof">Viral proof</a>
          <a href="#press">Press roll</a>
          <a href={X_ACCOUNT_URL} target="_blank" rel="noreferrer">Official X ↗</a>
        </nav>
        <button className="mini-ca" type="button" onClick={copyContract} disabled={!hasContract}>
          <span className="status-dot" /> {hasContract ? shortAddress : "CA SOON"}
          <b>{hasContract ? "COPY" : "TBA"}</b>
        </button>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-photo" role="img" aria-label="Original tribute artwork celebrating the wide-angle Selfie Cat meme" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span>EST. 2015</span> THE INTERNET’S MOST CONFIDENT CAMERA ROLL</p>
          <h1 id="hero-title">HE TOOK<br />THE <i>SELFIE.</i><br />WE KEPT<br />THE RECEIPTS.</h1>
          <div className="hero-bottom">
            <p>A living archive of Selfie Cat—the wide-angle paw, impossible confidence, and camera roll that became a meme.</p>
            <button className="flash-button" onClick={fireFlash} type="button">
              <span>●</span> TAKE A SELFIE <small>{String(flashCount).padStart(2, "0")}</small>
            </button>
          </div>
        </div>
        <p className="art-credit">ORIGINAL TRIBUTE ARTWORK · INSPIRED BY THE VIRAL CAMERA ROLL</p>
        <div className="hero-stamp" aria-hidden="true"><b>VIRAL</b><span>JAN ’16</span></div>
      </section>

      <div className="ticker" aria-label="Selfie Cat highlights">
        <div>
          <span>ONE CURIOUS PAW</span><i>✦</i><span>ONE VERY WIDE LENS</span><i>✦</i><span>AN ENDLESS REPOST TRAIL</span><i>✦</i><span>500K+ FOLLOWERS REPORTED</span><i>✦</i>
          <span aria-hidden="true">ONE CURIOUS PAW</span><i aria-hidden="true">✦</i><span aria-hidden="true">ONE VERY WIDE LENS</span><i aria-hidden="true">✦</i><span aria-hidden="true">AN ENDLESS REPOST TRAIL</span><i aria-hidden="true">✦</i><span aria-hidden="true">500K+ FOLLOWERS REPORTED</span><i aria-hidden="true">✦</i>
        </div>
      </div>

      <section className="intro section-pad" id="story">
        <div className="section-kicker"><span>001</span> THE SHORT VERSION</div>
        <div className="intro-grid">
          <h2>BEFORE THE FEED GOT POLISHED, A CAT <em>GRABBED THE CAMERA.</em></h2>
          <div className="intro-copy">
            <p className="lead">The meme begins with one irresistible visual trick: a cat who looks like he took his own photo.</p>
            <p>An outstretched paw meets an ultra-wide action-camera lens. The face lands perfectly in frame, the perspective exaggerates the pose, and an accidental snapshot reads like total confidence. By January 2016, “Selfie Cat” had escaped the camera roll and entered internet history.</p>
            <a className="text-link" href="https://www.instagram.com/yoremahm/" target="_blank" rel="noreferrer">VISIT THE SOURCE CAMERA ROLL <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="timeline-section section-pad" aria-labelledby="timeline-title">
        <div className="section-head">
          <div>
            <div className="section-kicker"><span>002</span> VIRAL TIMELINE</div>
            <h2 id="timeline-title">FROM STRAY<br />TO <em>MAIN FEED.</em></h2>
          </div>
          <p>Scroll the roll. Tap a source.<br />Every legend deserves footnotes.</p>
        </div>
        <div className="timeline-rail">
          {timeline.map((item, index) => (
            <article className="timeline-card" key={item.year}>
              <TimelineMedia visual={item.visual} />
              <div className="timeline-card-content">
                <div className="timeline-index">{String(index + 1).padStart(2, "0")}</div>
                <time>{item.year}</time>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <a className="timeline-photo-credit" href={item.visual.href} target="_blank" rel="noreferrer">{item.visual.credit}</a>
                <a className="timeline-source" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{item.source} <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="moments section-pad" id="moments" aria-labelledby="moments-title">
        <div className="section-head moments-head">
          <div>
            <div className="section-kicker"><span>003</span> ESSENTIAL VIEWING</div>
            <h2 id="moments-title">THE <em>BEST</em><br />OF THE ROLL.</h2>
          </div>
          <div className="rating-sticker" aria-label="Rated extremely online"><b>10/10</b><span>EXTREMELY<br />ONLINE</span></div>
        </div>
        <div className="moment-grid">
          {moments.map((moment) => (
            <a className={`moment-card ${moment.tone}`} href={moment.href} target="_blank" rel="noreferrer" key={moment.number}>
              <span className="moment-number">{moment.number}</span>
              <span className="moment-glyph" aria-hidden="true">{moment.glyph}</span>
              <div>
                <small>{moment.tag}</small>
                <h3>{moment.title}</h3>
                <p>{moment.copy}</p>
              </div>
              <b className="moment-cta">OPEN SOURCE <span>↗</span></b>
            </a>
          ))}
        </div>
        <p className="archive-note">Archive cards link to the creator and reporting that preserved these moments. Photo rights remain with their respective owners.</p>
      </section>

      <section className="proof section-pad" id="proof" aria-labelledby="proof-title">
        <div className="section-head proof-head">
          <div>
            <div className="section-kicker"><span>004</span> THE UPLOAD TRAIL</div>
            <h2 id="proof-title">YOU DIDN'T JUST<br />SEE IT. <em>EVERYONE DID.</em></h2>
          </div>
          <p>Original posts, video uploads, press pickups and years of rediscovery - the receipts are still online.</p>
        </div>

        <div className="proof-metrics" aria-label="Selfie Cat virality highlights">
          <article><strong>500K+</strong><span>followers reported by 2019</span></article>
          <article><strong>2015 - 2025</strong><span>a decade of reposts and rediscovery</span></article>
          <article><strong>WORLDWIDE</strong><span>news, culture, pet and photography coverage</span></article>
        </div>

        <div className="proof-label"><span>01</span><b>WATCH THE UPLOADS</b><i>YOUTUBE ARCHIVE</i></div>
        <div className="video-grid">
          {videos.map((video) => (
            <article className="video-card" key={video.id}>
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="video-meta"><span>PLAY</span><div><h3>{video.title}</h3><p>Uploaded by {video.author}</p></div></div>
            </article>
          ))}
        </div>

        <div className="proof-label social-proof-label"><span>02</span><b>THE ORIGINAL CAMERA ROLL</b><i>INSTAGRAM / @YOREMAHM</i></div>
        <div className="instagram-grid">
          {instagramPosts.map((post) => (
            <article className="instagram-card" key={post.id}>
              <div className="post-meta"><b>{post.label}</b><time>{post.date}</time></div>
              <iframe
                src={`https://www.instagram.com/p/${post.id}/embed/captioned/`}
                title={`Selfie Cat archive - ${post.label}`}
                loading="lazy"
                scrolling="no"
              />
              <a href={`https://www.instagram.com/p/${post.id}/`} target="_blank" rel="noreferrer">OPEN ORIGINAL POST</a>
            </article>
          ))}
        </div>

        <div className="proof-label social-proof-label"><span>03</span><b>THE REPOST NEVER ENDED</b><i>REDDIT / X / THE OPEN WEB</i></div>
        <div className="repost-grid">
          <a className="repost-card reddit" href="https://www.reddit.com/r/Catmemes/comments/nfxta1/going_to_have_to_take_away_his_phone/" target="_blank" rel="noreferrer">
            <span className="platform-mark">r/</span><small>r/CATMEMES / MAY 2021</small><h3>"Going to have to take away his phone"</h3><p>527+ votes—and another generation discovers the original Selfie Cat frame.</p><b>OPEN THREAD</b>
          </a>
          <a className="repost-card reddit-dark" href="https://www.reddit.com/r/pics/comments/12ifr23/no_comment/" target="_blank" rel="noreferrer">
            <span className="platform-mark">r/</span><small>r/PICS / APR 2023</small><h3>"No comment." The legend resurfaces.</h3><p>Years after the first viral wave, the replies still know exactly who is in frame.</p><b>OPEN THREAD</b>
          </a>
          <a className="repost-card x-card" href="https://x.com/search?q=%22Selfie%20Cat%22%20meme&src=typed_query" target="_blank" rel="noreferrer">
            <span className="platform-mark">X</span><small>THE REPOST TRAIL / LIVE SEARCH</small><h3>One image. Endless new captions.</h3><p>Follow the references, reposts and reactions that kept Selfie Cat in circulation.</p><b>SEARCH X</b>
          </a>
        </div>

        <p className="embed-note">Social embeds are served by their original platforms and may use cookies or require sign-in. All posts and media remain the property of their respective creators.</p>
      </section>
      <section className="contract-section" id="token" aria-labelledby="contract-title">
        <div className="contract-sun" aria-hidden="true">$</div>
        <div className="section-kicker light"><span>005</span> THE COMMUNITY ROLL</div>
        <h2 id="contract-title">THE MEME<br />HAS <em>NINE LIVES.</em></h2>
        <p className="contract-deck">A community-made Solana tribute to an all-time internet original. No fake promises. Just one immortal camera roll.</p>
        <div className={`contract-box ${!hasContract ? "pending" : ""}`}>
          <div>
            <small>OFFICIAL PUMP.FUN CONTRACT ADDRESS</small>
            <code>{hasContract ? CONTRACT_ADDRESS : "CONTRACT ADDRESS WILL APPEAR HERE AT LAUNCH"}</code>
          </div>
          <button type="button" onClick={copyContract} disabled={!hasContract}>
            {copied ? "COPIED ✓" : hasContract ? "COPY ADDRESS" : "NOT LIVE YET"}
          </button>
        </div>
        <div className="contract-actions">
          {hasContract ? (
            <a className="primary-action" href={`https://pump.fun/coin/${CONTRACT_ADDRESS}`} target="_blank" rel="noreferrer">VIEW ON PUMP.FUN ↗</a>
          ) : (
            <span className="primary-action disabled">PUMP.FUN LINK AT LAUNCH</span>
          )}
          <a className="secondary-action" href="https://www.instagram.com/yoremahm/" target="_blank" rel="noreferrer">HONOR THE ORIGINAL ↗</a>
        </div>
        <p className="risk-note">Community tribute project. Not affiliated with the original creator, Instagram, GoPro, or pump.fun. Memecoins are highly volatile—never spend more than you can afford to lose.</p>
      </section>

      <section className="press section-pad" id="press" aria-labelledby="press-title">
        <div className="section-head press-head">
          <div>
            <div className="section-kicker"><span>006</span> ARCHIVE CONTACT SHEET</div>
            <h2 id="press-title">THE DAY THE<br /><em>FLASH WENT GLOBAL.</em></h2>
          </div>
          <p>Selected uploads, coverage and reposts that document how the meme moved across the internet.</p>
        </div>
        <div className="press-list">
          {press.map(([name, date, href], index) => (
            <a href={href} target="_blank" rel="noreferrer" key={name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <b>{name}</b>
              <time>{date}</time>
              <i>READ ↗</i>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-mark">SELFIE<br /><span>CAT</span></div>
        <div className="footer-copy">
          <p>ONE PAW FOR THE CAMERA.<br />ONE FRAME FOR THE INTERNET.</p>
          <p className="legal">An unofficial community archive and token tribute. Built with respect for the original creator and the animal at the center of the story. All linked source material belongs to its respective owner.</p>
        </div>
        <div className="footer-links">
          <a href="#top">BACK TO TOP ↑</a>
          <a href={X_ACCOUNT_URL} target="_blank" rel="noreferrer">OFFICIAL X ↗</a>
          <a href="https://www.instagram.com/yoremahm/" target="_blank" rel="noreferrer">ORIGINAL ARCHIVE ↗</a>
          <a href="#token">CONTRACT</a>
        </div>
      </footer>

      {copied && <div className="copy-toast" role="status">CONTRACT COPIED TO CLIPBOARD ✓</div>}

      <div className="mobile-contract-bar">
        <div><small>OFFICIAL CA</small><b>{shortAddress}</b></div>
        <button onClick={copyContract} disabled={!hasContract}>{hasContract ? "COPY" : "SOON"}</button>
      </div>
    </main>
  );
}
