/**
 * Portfolio helper utilities and ROI calculations for Jobayer Hossen's brand site.
 */

export interface BookingFormData {
  fullName: string;
  email: string;
  serviceType: string;
  targetTimeline: string;
  monthlyBudget: string;
  projectBrief: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateBookingForm(data: Partial<BookingFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name or brand name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid business email address.';
  }

  if (!data.serviceType) {
    errors.serviceType = 'Please select a primary service area.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  metrics: string;
  client: string;
  description: string;
  image: string;
}

export function filterProjects(projects: ProjectItem[], selectedTag: string): ProjectItem[] {
  if (!selectedTag || selectedTag.toLowerCase() === 'all') {
    return projects;
  }
  const cleanTag = selectedTag.toLowerCase().trim();
  return projects.filter(project =>
    project.category.toLowerCase() === cleanTag ||
    project.tags.some(t => t.toLowerCase() === cleanTag)
  );
}

export interface AiImpactInput {
  currentPostsPerWeek: number;
  hoursSpentPerPost: number;
  channelsCount: number;
}

export interface AiImpactOutput {
  monthlyHoursSaved: number;
  capacityMultiplier: number;
  projectedMonthlyImpressions: number;
}

/**
 * Calculates time saved and content scaling efficiency via Jobayer's AI automation workflows.
 */
export function calculateAiImpact(input: AiImpactInput): AiImpactOutput {
  const postsPerWeek = Math.max(1, input.currentPostsPerWeek);
  const hoursPerPost = Math.max(0.5, input.hoursSpentPerPost);
  const channels = Math.max(1, input.channelsCount);

  // Traditional monthly hours
  const traditionalMonthlyHours = postsPerWeek * hoursPerPost * 4.3;

  // AI-assisted workflows reduce production time by ~65%
  const aiMonthlyHours = traditionalMonthlyHours * 0.35;
  const monthlyHoursSaved = Math.round(traditionalMonthlyHours - aiMonthlyHours);

  // Repurposing & automation creates 3.5x more multi-format derivatives (carousels, short-form clips, text hooks)
  const capacityMultiplier = 3.5;

  // Baseline organic impression estimation (avg 2,800 impressions per high-impact post across optimized channels)
  const estimatedPostsPerMonth = Math.round(postsPerWeek * 4.3 * 2.2);
  const projectedMonthlyImpressions = estimatedPostsPerMonth * 3200 * Math.min(channels, 4);

  return {
    monthlyHoursSaved,
    capacityMultiplier,
    projectedMonthlyImpressions,
  };
}
