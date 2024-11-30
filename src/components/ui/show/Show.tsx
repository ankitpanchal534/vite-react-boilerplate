import { ReactNode, memo } from "react";

interface ShowProps {
  where: boolean;
  render?: ReactNode;
  elseRender?: ReactNode;
}
export function ShowComponent({ where, render, elseRender }: ShowProps) {
  return where ? render : elseRender ? elseRender : null;
}
export const Show = memo(ShowComponent);
