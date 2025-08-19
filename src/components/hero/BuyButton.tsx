import { Button } from "@/components/ui/button";

interface BuyButtonProps {
  href: string;
  children: React.ReactNode;
}

const BuyButton = ({ href, children }: BuyButtonProps) => {
  return (
    <Button
      variant="default"
      size="lg"
      asChild
      className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold text-xl px-8 py-6 rounded-xl shadow-[var(--comic-shadow)] hover:shadow-[var(--comic-shadow-hover)] transform hover:translate-y-1 transition-all duration-200 hover:glow-[var(--glow-primary)] border-2 border-primary-dark"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
};

export default BuyButton;