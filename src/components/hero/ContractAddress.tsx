import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface ContractAddressProps {
  address: string;
}

const ContractAddress = ({ address }: ContractAddressProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the address manually",
        variant: "destructive",
      });
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-muted/50 rounded-xl border-2 border-border backdrop-blur-sm">
      <div className="flex flex-col items-center sm:items-start gap-1">
        <span className="text-sm font-medium text-muted-foreground">Contract Address</span>
        <span className="font-mono text-sm break-all sm:hidden">{formatAddress(address)}</span>
        <span className="font-mono text-sm hidden sm:block">{address}</span>
      </div>
      <Button
        onClick={handleCopy}
        variant="outline"
        size="sm"
        className="bg-background hover:bg-muted transition-colors border-2 font-semibold"
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};

export default ContractAddress;