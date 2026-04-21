import type { Metadata } from "next";
import { glossaryById } from "../../data/glossary";
import { TermRedirect } from "./TermRedirect";

type Props = { params: Promise<{ id: string }> };

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

  return <TermRedirect id={id} found={!!entry} />;
}
