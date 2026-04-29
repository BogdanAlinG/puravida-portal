import { Navbar } from "@/components/layout/Navbar";
import { Section } from "@/components/layout/Section";
import { H1, H2, H3, Text, Accent } from "@/components/ui/Typography";
import { Play, Newspaper, ExternalLink } from "lucide-react";

const videos = [
  {
    title: "Tour of one of the most beautiful tiny houses in Europe",
    id: "MKQC0P7ZFK8",
    type: "youtube"
  },
  {
    title: "Phoenix XXL: The Flagship Experience",
    id: "CCI5aRjFNZI",
    type: "youtube"
  },
  {
    title: "Artisanal Woodworking in Bucovina",
    id: "piVJepMdceI",
    type: "youtube"
  },
  {
    title: "Pura Vida Tiny House Festival",
    id: "6HM3EZJUA0k",
    type: "youtube"
  },
  {
    title: "Minimalist Living Interview",
    id: "958oC_r-ll8",
    type: "youtube"
  },
  {
    title: "Inside the Daylight Model",
    id: "MHfV4_XljM0",
    type: "youtube"
  },
  {
    title: "Hope Model: Technical Walkthrough",
    id: "hMqfxknn-P0",
    type: "youtube"
  },
  {
    title: "Rainbow: Our First Icon",
    id: "TrV6fJvSKcM",
    type: "youtube"
  }
];

const pressArticles = [
  {
    title: "Tiny houses with glass walls and Bucovina-style roofs",
    source: "Business Review",
    excerpt: "The Romanian business where you can buy tiny houses with glass walls or roofs like in Bucovina.",
    link: "https://puravidahuts.com/press/"
  },
  {
    title: "Minimalist Spectacle at Flight Festival",
    source: "ProTV",
    excerpt: "The tiny house fashion conquers Romania. The hut presented by Pura Vida Huts is spectacular.",
    link: "https://puravidahuts.com/press/"
  }
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <main className="pt-32 pb-20">
        <Section className="text-center mb-16">
          <Accent>Media & Cinematic</Accent>
          <H1 className="mb-6">Videos & Press</H1>
          <Text className="max-w-2xl mx-auto text-brand-charcoal/70 italic font-serif text-lg">
            Experience Pura Vida through our lens. From artisanal workshops to festival highlights.
          </Text>
        </Section>

        {/* Video Feature Grid */}
        <Section className="bg-brand-charcoal text-brand-cream py-24">
          <div className="container mx-auto px-6">
            <H2 className="text-brand-cream mb-12 text-center">Cinematic Showcase</H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="space-y-4 group">
                  <div className="aspect-video bg-black rounded-sm overflow-hidden relative shadow-2xl">
                    <iframe 
                      src={`https://www.youtube.com/embed/${video.id}`}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <H3 className="text-brand-cream text-xl group-hover:text-brand-terracotta transition-colors">
                    {video.title}
                  </H3>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Reels Section */}
        <Section className="py-24">
          <div className="container mx-auto px-6">
            <Accent>Social Highlights</Accent>
            <H2 className="mb-12">Behind the Scenes</H2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="aspect-[9/16] bg-brand-charcoal rounded-sm overflow-hidden shadow-xl">
                <video 
                  src="https://puravidahuts.com/wp-content/uploads/2023/10/3203197048428700262.mp4" 
                  className="w-full h-full object-cover"
                  autoPlay muted loop playsInline
                />
              </div>
              <div className="aspect-[9/16] bg-brand-charcoal rounded-sm overflow-hidden shadow-xl">
                <video 
                  src="https://puravidahuts.com/wp-content/uploads/2023/10/reel-tiny.mp4" 
                  className="w-full h-full object-cover"
                  autoPlay muted loop playsInline
                />
              </div>
              <div className="aspect-[9/16] bg-brand-charcoal rounded-sm overflow-hidden shadow-xl">
                <video 
                  src="https://puravidahuts.com/wp-content/uploads/2021/06/Tour-of-one-of-the-most-beautiful-tiny-houses-in-Europe.mp4" 
                  className="w-full h-full object-cover"
                  autoPlay muted loop playsInline
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Articles Section */}
        <Section className="bg-white">
          <div className="container mx-auto px-6">
            <H2 className="mb-12 text-center">Featured Press</H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {pressArticles.map((article, index) => (
                <div key={index} className="p-10 border border-brand-charcoal/5 hover:shadow-2xl transition-all bg-brand-cream/20">
                  <div className="flex items-center gap-3 text-brand-sage mb-6">
                    <Newspaper size={20} />
                    <span className="text-xs uppercase tracking-widest font-bold">{article.source}</span>
                  </div>
                  <H3 className="text-2xl mb-6">{article.title}</H3>
                  <Text className="text-brand-charcoal/60 mb-8">{article.excerpt}</Text>
                  <a href={article.link} className="inline-flex items-center gap-2 text-brand-terracotta font-bold uppercase tracking-widest text-sm">
                    Read More <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      
      <footer className="bg-brand-cream py-12 border-t border-brand-charcoal/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-brand-charcoal/50">© 2026 Pura Vida Huts. Artisanal Quality from Bucovina.</p>
        </div>
      </footer>
    </div>
  );
}
