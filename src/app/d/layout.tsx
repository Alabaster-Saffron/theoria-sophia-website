export default function PitchDeckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 60,
        overflowY: "auto",
        overflowX: "hidden",
        backgroundColor: "var(--cream-light)",
      }}
    >
      {children}
    </div>
  );
}
