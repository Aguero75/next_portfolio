// context/PortfolioContext.jsx
"use client";

import { createContext, useContext } from "react";
import { usePortfolio } from "@/app/hooks/usePortfolio";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const portfolio = usePortfolio();
  return (
    <PortfolioContext.Provider value={portfolio}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolioContext() {
  return useContext(PortfolioContext);
}
