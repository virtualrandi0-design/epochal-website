import { ExternalLink } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { fiverr } from "@/content/site";

/** Cobalt "Hire me on Fiverr" link that opens the Fiverr profile in a new tab. */
export function FiverrButton({
  className,
  size = "xl",
  label = "Hire me on Fiverr",
  onClick,
}: {
  className?: string;
  size?: ButtonProps["size"];
  label?: string;
  onClick?: () => void;
}) {
  return (
    <Button asChild variant="brand" size={size} className={className}>
      <a href={fiverr.url} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {label} <ExternalLink aria-hidden="true" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </Button>
  );
}
