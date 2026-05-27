export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E5E5E5',
        paddingTop: '48px',
        paddingBottom: '32px',
      }}
    >
      <div
        className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ maxWidth: 'var(--content-max)' }}
      >
        <span
          className="font-mono text-xs tracking-[0.12em]"
          style={{ color: '#1A1A1A' }}
        >
          HUZKIY
        </span>
        <span
          className="font-mono text-[11px]"
          style={{ color: '#9A9A9A' }}
        >
          &copy; 2025 Hizkya Aprilliano Dorantez. All rights reserved.
        </span>
        <span
          className="font-mono text-[11px]"
          style={{ color: '#9A9A9A' }}
        >
          Built with passion
        </span>
      </div>
    </footer>
  );
}
