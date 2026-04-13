export interface TextProps {
  textContent: string;
  // style?: React.CSSProperties;
  className?: string;
  block?: boolean;
  textBefore?: React.ReactNode;
  textBeforeCN?: string;
  textAfter?: React.ReactNode;
  textAfterCN?: string;
  onClick?: () => void;
}

export default function Text({
  textContent,
  className,
  block = false,
  textBefore: before,
  textAfter: after,
  textBeforeCN,
  textAfterCN,
  onClick,
}: TextProps) {
  return (
    <span className={`${className} ${block ? "block" : ""}`} onClick={onClick}>
      <span className={textBeforeCN}>{before}</span>
      {textContent}
      <span className={textAfterCN}>{after}</span>
    </span>
  );
}
