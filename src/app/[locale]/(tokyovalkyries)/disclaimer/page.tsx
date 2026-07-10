import Container from '@/components/layout/container';
import { siteFacts } from '@/data/tokyovalkyries/sources';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Disclaimer | Tokyo Valkyries Wiki',
    description:
      'Disclaimer for Tokyo Valkyries Wiki, an independent game guide site.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#070711] py-12 text-[#f8f6ff]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-[#bdb3d2]">
          Tokyo Valkyries Wiki is an independent guide site. It is not
          affiliated with, endorsed by, sponsored by, or operated by qureate,
          Valve, Steam, Nintendo, YouTube or another official distribution
          platform.
        </p>
        <p className="leading-8 text-[#bdb3d2]">
          Tokyo Valkyries, its name, characters, artwork, music, game files and
          official materials belong to qureate and the respective rights
          holders. This site does not redistribute paid game files, modified
          clients, APK mirrors, cracks, card data extracted from game files or
          unsafe downloads.
        </p>
        <p className="leading-8 text-[#bdb3d2]">
          Guides distinguish official facts from early community impressions.
          For current purchase, patch and platform status, use{' '}
          <a
            href={siteFacts.officialSteamUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#54e7ff] underline underline-offset-4"
          >
            Steam
          </a>{' '}
          and{' '}
          <a
            href={siteFacts.officialWebsiteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#54e7ff] underline underline-offset-4"
          >
            the official Tokyo Valkyries website
          </a>
          .
        </p>
      </Container>
    </div>
  );
}
