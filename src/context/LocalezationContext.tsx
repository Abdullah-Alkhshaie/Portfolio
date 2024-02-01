import React from "react";

interface LocalezationContextProps {
  locale: string;
  setLocale: React.Dispatch<React.SetStateAction<string>>;
}

const LocalezationContext = React.createContext<
  LocalezationContextProps | undefined
>(undefined);

export default LocalezationContext;
