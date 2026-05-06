import type { Metadata } from "next";
import { glossary, glossaryById } from "../../data/glossary";
import { TermRedirect } from "./TermRedirect";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return glossary.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const entry = glossaryById.get(id);
  if (!entry) {
    return { title: "Term not found — Sutra" };
  }
  const description =
    entry.definition.length > 155
      ? entry.definition.slice(0, 152) + "..."
      : entry.definition;
  return {
    title: `${entry.term} — Sutra`,
    description,
    alternates: { canonical: `/t/${id}` },
    openGraph: {
      title: `${entry.term} — Sutra`,
      description,
      url: `https://sutra.so/t/${id}`,
      siteName: "Sutra",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${entry.term} — Sutra`,
      description,
    },
  };
}

export default async function TermPage({ params }: Props) {
  const { id } = await params;
  const entry = glossaryById.get(id);

  return (
    <>
      {entry && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "DefinedTerm",
                "@id": `https://sutra.so/t/${id}`,
                name: entry.term,
                alternateName: [
                  entry.transliteration,
                  entry.devanagari,
                  ...(entry.aliases ?? []),
                ].filter((n): n is string => !!n && n !== entry.term),
                description: entry.vedantaMeaning ?? entry.definition,
                url: `https://sutra.so/t/${id}`,
              }),
            }}
          />
          <noscript>
            <article>
              <h1>{entry.term}</h1>
              {entry.devanagari && <p lang="sa">{entry.devanagari}</p>}
              {entry.transliteration !== entry.term && (
                <p>
                  <em>{entry.transliteration}</em>
                </p>
              )}
              <p>{entry.definition}</p>
              {entry.vedantaMeaning && (
                <>
                  <h2>In Vedanta</h2>
                  <p>{entry.vedantaMeaning}</p>
                </>
              )}
            </article>
          </noscript>
        </>
      )}
      <TermRedirect id={id} found={!!entry} />
    </>
  );
}
