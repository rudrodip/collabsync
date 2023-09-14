"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { Providers } from "@/components/providers";
import { TooltipProvider } from "@/components/ui/tooltip";

export function ReduxProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Providers>
        <TooltipProvider>{children}</TooltipProvider>
      </Providers>
    </Provider>
  );
}
