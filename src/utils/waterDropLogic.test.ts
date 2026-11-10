import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateDistance,
  createRipple,
  createSplashParticles,
  updateRipple,
  updateSplashParticle,
  shouldEmitMovementRipple,
} from './waterDropLogic.ts';

test('calculateDistance correctly computes distance between two coordinates', () => {
  const dist = calculateDistance(0, 0, 3, 4);
  assert.equal(dist, 5);

  const zeroDist = calculateDistance(100, 100, 100, 100);
  assert.equal(zeroDist, 0);
});

test('createRipple initializes click vs move ripple with appropriate bounds', () => {
  const moveRipple = createRipple(100, 200, false, 1, 'pink');
  assert.equal(moveRipple.x, 100);
  assert.equal(moveRipple.y, 200);
  assert.equal(moveRipple.radius, 2);
  assert.ok(moveRipple.maxRadius < 60);

  const clickRipple = createRipple(50, 80, true, 2, 'purple');
  assert.equal(clickRipple.radius, 4);
  assert.ok(clickRipple.maxRadius > 70);
  assert.ok(clickRipple.alpha > moveRipple.alpha);
});

test('updateRipple expands radius and decays alpha until termination', () => {
  const ripple = createRipple(50, 50, false, 1);
  const initialRadius = ripple.radius;
  const initialAlpha = ripple.alpha;

  const isAlive = updateRipple(ripple);
  assert.ok(isAlive);
  assert.ok(ripple.radius > initialRadius);
  assert.ok(ripple.alpha < initialAlpha);

  // Fast-forward until ripple terminates
  let alive = true;
  for (let i = 0; i < 200; i++) {
    alive = updateRipple(ripple);
    if (!alive) break;
  }
  assert.equal(alive, false);
});

test('createSplashParticles generates radially dispersed droplets', () => {
  const particles = createSplashParticles(100, 100, 6, 10);
  assert.equal(particles.length, 6);
  assert.equal(particles[0].id, 10);
  assert.equal(particles[5].id, 15);

  const particle = particles[0];
  const alive = updateSplashParticle(particle);
  assert.ok(alive);
});

test('shouldEmitMovementRipple checks distance threshold properly', () => {
  assert.equal(shouldEmitMovementRipple(0, 0, 10, 10, 25), false);
  assert.equal(shouldEmitMovementRipple(0, 0, 30, 0, 25), true);
});
