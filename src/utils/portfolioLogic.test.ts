import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateBookingForm,
  filterProjects,
  calculateAiImpact,
  type ProjectItem
} from './portfolioLogic.ts';

test('validateBookingForm validates email and required fields', () => {
  const invalid = validateBookingForm({
    fullName: '',
    email: 'not-an-email',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.serviceType);

  const valid = validateBookingForm({
    fullName: 'Alex Morgan',
    email: 'alex@startup.io',
    serviceType: 'ai-automation',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('filterProjects returns all items when tag is All', () => {
  const sampleProjects: ProjectItem[] = [
    {
      id: '1',
      title: 'Project 1',
      category: 'Social Media',
      tags: ['Strategy', 'Instagram'],
      metrics: '+300%',
      client: 'Acme',
      description: 'Test',
      image: 'img1.jpg',
    },
    {
      id: '2',
      title: 'Project 2',
      category: 'AI Automation',
      tags: ['Workflows', 'Zapier'],
      metrics: '40hrs saved',
      client: 'Beta',
      description: 'Test 2',
      image: 'img2.jpg',
    },
  ];

  const all = filterProjects(sampleProjects, 'All');
  assert.equal(all.length, 2);

  const filtered = filterProjects(sampleProjects, 'AI Automation');
  assert.equal(filtered.length, 1);
  assert.equal(filtered[0].id, '2');

  const tagFiltered = filterProjects(sampleProjects, 'Instagram');
  assert.equal(tagFiltered.length, 1);
  assert.equal(tagFiltered[0].id, '1');
});

test('calculateAiImpact returns positive hours saved and capacity boost', () => {
  const result = calculateAiImpact({
    currentPostsPerWeek: 5,
    hoursSpentPerPost: 3,
    channelsCount: 3,
  });

  assert.ok(result.monthlyHoursSaved > 20);
  assert.equal(result.capacityMultiplier, 3.5);
  assert.ok(result.projectedMonthlyImpressions > 50000);
});
