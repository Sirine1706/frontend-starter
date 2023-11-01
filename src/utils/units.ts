export const makeReadableBytes = (
  bytes: number
): { size: number; unit: string } => {
  if (bytes < 1024) return { size: Math.floor(bytes), unit: "Bytes" };
  const kb = bytes / 1024;
  if (kb < 1024) return { size: Math.floor(kb), unit: "Kb" };
  return { size: Math.floor(kb / 1024), unit: "Mb" };
};