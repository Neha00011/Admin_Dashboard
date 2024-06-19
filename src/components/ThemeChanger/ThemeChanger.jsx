import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaCog } from "react-icons/fa";
import { ModeToggle } from "../mode-toggle";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="themeChanger">
          <FaCog className="mr-3" />
          Settings
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Change Theme </SheetTitle>
          <SheetDescription>Change your theme settings</SheetDescription>
        </SheetHeader>
        <ModeToggle />
      </SheetContent>
    </Sheet>
  );
}
