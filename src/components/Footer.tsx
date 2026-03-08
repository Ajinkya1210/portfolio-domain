const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} — Built with passion & automation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
