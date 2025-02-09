import React from "react";
import { Renderers } from "@mod-protocol/react";
import { CircularProgress } from "components/ui/circular-progress";
import { Button } from "components/ui/button";

export const ButtonRenderer = (
  props: React.ComponentProps<Renderers["Button"]>
) => {
  const { label, isDisabled, isLoading, onClick, variant = "primary" } = props;
  return (
    <Button
      variant={variant}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? <CircularProgress size="sm" /> : label}
    </Button>
  );
};
