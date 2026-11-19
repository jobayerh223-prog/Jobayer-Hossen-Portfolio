import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseMetricValue,
  easeOutQuart,
  formatMetricProgress,
} from './numberAnimation';

test('parseMetricValue extracts integer, decimal, and suffix formats', () => {
  assert.deepEqual(parseMetricValue('150+'), {
    target: 150,
    decimals: 0,
    suffix: '+',
    valid: true,
  });

  assert.deepEqual(parseMetricValue('15M+'), {
    target: 15,
    decimals: 0,
    suffix: 'M+',
    valid: true,
  });

  assert.deepEqual(parseMetricValue('4.9/5'), {
    target: 4.9,
    decimals: 1,
    suffix: '/5',
    valid: true,
  });
});

test('easeOutQuart stays within [0, 1] and is monotonic', () => {
  assert.equal(easeOutQuart(-0.5), 0);
  assert.equal(easeOutQuart(0), 0);
  assert.equal(easeOutQuart(1), 1);
  assert.equal(easeOutQuart(1.5), 1);
  assert.ok(easeOutQuart(0.5) > 0.5);
});

test('formatMetricProgress renders 0-start and exact terminal value', () => {
  const projects = parseMetricValue('150+');
  assert.equal(formatMetricProgress(projects, '150+', 0), '0+');
  assert.equal(formatMetricProgress(projects, '150+', 1), '150+');

  const rating = parseMetricValue('4.9/5');
  assert.equal(formatMetricProgress(rating, '4.9/5', 0), '0.0/5');
  assert.equal(formatMetricProgress(rating, '4.9/5', 1), '4.9/5');

  const reach = parseMetricValue('15M+');
  assert.equal(formatMetricProgress(reach, '15M+', 0), '0M+');
  assert.equal(formatMetricProgress(reach, '15M+', 1), '15M+');
});
