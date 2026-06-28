import { WeeklyHighlights } from "../components/highlights/WeeklyHighlights";
import Footer from "../components/Footer.tsx";

export function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-page-bg text-text">
      <div className="mx-auto min-h-screen w-[calc(100%-32px)] bg-neutral-900 md:w-[calc(100%-80px)] lg:w-[calc(100%-142px)]">
        <WeeklyHighlights />
      </div>
      <Footer />
    </main>

  );
}

