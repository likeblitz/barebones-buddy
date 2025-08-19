import BuyButton from "./BuyButton";
import ContractAddress from "./ContractAddress";
import BlockchainBackground from "./BlockchainBackground";
import tuxPenguin from "@/assets/tux-penguin.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero-specific overlay for extra emphasis */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* TUX Logo/Character */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={tuxPenguin}
                alt="TUX Penguin Mascot"
                className="w-64 h-36 object-contain animate-bounce"
                style={{ animationDuration: "3s" }}
              />
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-50 animate-pulse" />
            </div>
          </div>

          {/* TUX Title */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-black text-primary mb-4 tracking-wider transform hover:scale-105 transition-transform duration-300">
              TUX
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
          </div>

          {/* CTA Section */}
          <div className="mb-12 flex flex-col items-center gap-8">
            <BuyButton href="https://portal.abs.xyz">
              BUY TUX
            </BuyButton>
          </div>

          {/* Contract Address */}
          <div className="max-w-2xl mx-auto">
            <ContractAddress address="0x0f6b51a508a2b33e6c3115a4e9f0f1a4ce8b5bd6" />
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 to-transparent" />
    </section>
  );
};

export default HeroSection;