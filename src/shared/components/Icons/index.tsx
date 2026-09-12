interface IconProps {
  size?: number;
}

export const ArrowUpRightIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const FolderIcon = ({ size = 30 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M3 7l2-3h5l2 3" />
  </svg>
);
