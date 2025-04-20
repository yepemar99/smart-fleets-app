import { Button } from "@/components/ui/button";
import {
  Dialog as DialogComponent,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Dialog({
  size = "sm",
  title = "",
  subtitle = "",
  children,
  buttonComponent = null,
}) {
  return (
    <DialogComponent>
      {buttonComponent && (
        <DialogTrigger asChild>{buttonComponent}</DialogTrigger>
      )}
      <DialogContent className={`max-w-[${size}]`}>
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {subtitle && <DialogDescription>{subtitle}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </DialogComponent>
  );
}
