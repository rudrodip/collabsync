"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { Providers } from "@/components/providers";

export function ReduxProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Providers>{children}</Providers>
    </Provider>
  );
}
