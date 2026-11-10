/**
 * Pure calculation logic for the interactive water-drop cursor effect.
 * Decoupled for clean unit testing and rendering efficiency.
 */

export interface WaterRipple {
  id: number;
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  alpha: number;
  decayRate: number;
  lineWidth: number;
  colorType: 'pink' | 'purple' | 'cyan';
}

export interface WaterSplashParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  decayRate: number;
}

/**
 * Calculates Euclidean distance between two 2D points
 */
export function calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Creates a new water ripple from a mouse movement or click event
 */
export function createRipple(
  x: number,
  y: number,
  isClick: boolean,
  id: number,
  colorType: 'pink' | 'purple' | 'cyan' = 'pink'
): WaterRipple {
  return {
    id,
    x,
    y,
    radius: isClick ? 4 : 2,
    maxRadius: isClick ? 85 : 45,
    speed: isClick ? 2.4 : 1.6,
    alpha: isClick ? 0.8 : 0.45,
    decayRate: isClick ? 0.016 : 0.024,
    lineWidth: isClick ? 2.5 : 1.5,
    colorType,
  };
}

/**
 * Creates splash droplets from a click/impact event
 */
export function createSplashParticles(
  x: number,
  y: number,
  count: number = 6,
  startId: number = 0
): WaterSplashParticle[] {
  const particles: WaterSplashParticle[] = [];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.4 - 0.2);
    const speed = 1.2 + Math.random() * 2.2;
    particles.push({
      id: startId + i,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: 1.5 + Math.random() * 1.5,
      alpha: 0.85,
      decayRate: 0.028 + Math.random() * 0.015,
    });
  }
  return particles;
}

/**
 * Updates a ripple's state for one animation frame.
 * Returns true if the ripple is still alive, false if it should be removed.
 */
export function updateRipple(ripple: WaterRipple): boolean {
  ripple.radius += ripple.speed;
  ripple.alpha -= ripple.decayRate;
  ripple.lineWidth = Math.max(0.5, ripple.lineWidth * 0.985);
  return ripple.alpha > 0.01 && ripple.radius < ripple.maxRadius;
}

/**
 * Updates a splash particle's state for one animation frame.
 * Returns true if still alive, false if dead.
 */
export function updateSplashParticle(particle: WaterSplashParticle): boolean {
  particle.x += particle.vx;
  particle.y += particle.vy;
  particle.vx *= 0.94; // fluid friction
  particle.vy *= 0.94;
  particle.alpha -= particle.decayRate;
  return particle.alpha > 0.02;
}

/**
 * Determines whether a mouse movement step should trigger a new ripple
 */
export function shouldEmitMovementRipple(
  lastX: number,
  lastY: number,
  currentX: number,
  currentY: number,
  threshold: number = 28
): boolean {
  return calculateDistance(lastX, lastY, currentX, currentY) >= threshold;
}
