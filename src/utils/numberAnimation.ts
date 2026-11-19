export interface ParsedMetric {
  target: number;
  decimals: number;
  suffix: string;
  valid: boolean;
}

export function parseMetricValue(raw: string): ParsedMetric {
  const trimmed = raw.trim();
  const match = /^([+-]?\d+(?:\.\d+)?)(.*)$/.exec(trimmed);
  if (!match) {
    return { target: 0, decimals: 0, suffix: trimmed, valid: false };
  }

  const numStr = match[1];
  const suffix = match[2] ?? '';
  const dotIndex = numStr.indexOf('.');
  const decimals = dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
  const target = Number.parseFloat(numStr);

  if (!Number.isFinite(target)) {
    return { target: 0, decimals: 0, suffix: trimmed, valid: false };
  }

  return { target, decimals, suffix, valid: true };
}

export function easeOutQuart(t: number): number {
  const clamped = Math.max(0, Math.min(1, t));
  return 1 - Math.pow(1 - clamped, 4);
}

export function formatMetricProgress(
  parsed: ParsedMetric,
  rawFallback: string,
  progress: number
): string {
  if (!parsed.valid) {
    return rawFallback;
  }

  const clamped = Math.max(0, Math.min(1, progress));
  if (clamped >= 1) {
    return `${parsed.decimals > 0 ? parsed.target.toFixed(parsed.decimals) : Math.round(parsed.target)}${parsed.suffix}`;
  }

  const current = parsed.target * easeOutQuart(clamped);
  const formatted =
    parsed.decimals > 0
      ? current.toFixed(parsed.decimals)
      : Math.round(current).toString();

  return `${formatted}${parsed.suffix}`;
}
