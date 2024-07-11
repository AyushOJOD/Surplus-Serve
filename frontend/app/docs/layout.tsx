import AnimateWrapper from "@/components/animate-in-wrapper";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <AnimateWrapper delay={0}>
        <nav>Docs Nav</nav>
      </AnimateWrapper>
      {children}
    </section>
  );
}
