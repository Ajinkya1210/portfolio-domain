import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <a
          href="https://github.com/Ajinkya1210"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} — Built with passion & automation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
