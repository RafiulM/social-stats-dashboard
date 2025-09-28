/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { HeroSection } from '../hero-section';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />;
  },
}));

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} data-testid={`link-${href.replace('/', '')}`}>{children}</a>
  ),
}));

// Mock the auth and theme components
jest.mock('../auth-buttons', () => ({
  HeroAuthButtons: () => <div data-testid="hero-auth-buttons">Hero Auth Buttons</div>,
}));

jest.mock('../theme-toggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle">Theme Toggle</div>,
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  ArrowRight: () => <svg data-testid="arrow-right-icon">Arrow Right</svg>,
  BarChart3: () => <svg data-testid="bar-chart-icon">Bar Chart</svg>,
  TrendingUp: () => <svg data-testid="trending-up-icon">Trending Up</svg>,
  Users: () => <svg data-testid="users-icon">Users</svg>,
  Zap: () => <svg data-testid="zap-icon">Zap</svg>,
}));

describe('HeroSection Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(<HeroSection />);
    expect(container).toBeInTheDocument();
  });

  it('displays the main headline correctly', () => {
    render(<HeroSection />);
    
    expect(screen.getByText('Unified Social Analytics')).toBeInTheDocument();
    expect(screen.getByText('All in One Dashboard')).toBeInTheDocument();
  });

  it('displays the subheadline with value proposition', () => {
    render(<HeroSection />);
    
    const subheadline = screen.getByText(/Track, analyze, and grow your social media presence/);
    expect(subheadline).toBeInTheDocument();
    expect(subheadline).toHaveTextContent('actionable insights');
  });

  it('renders key benefits with correct icons', () => {
    render(<HeroSection />);
    
    expect(screen.getByText('Fast Setup')).toBeInTheDocument();
    expect(screen.getByText('Real-time Analytics')).toBeInTheDocument();
    expect(screen.getByText('Easy Insights')).toBeInTheDocument();
    
    expect(screen.getByTestId('zap-icon')).toBeInTheDocument();
    expect(screen.getByTestId('bar-chart-icon')).toBeInTheDocument();
    expect(screen.getByTestId('trending-up-icon')).toBeInTheDocument();
  });

  it('renders CTA buttons with correct links', () => {
    render(<HeroSection />);
    
    const getStartedLink = screen.getByTestId('link-sign-up');
    const viewDemoLink = screen.getByTestId('link-dashboard');
    
    expect(getStartedLink).toBeInTheDocument();
    expect(viewDemoLink).toBeInTheDocument();
    
    expect(getStartedLink).toHaveTextContent('Get Started Free');
    expect(viewDemoLink).toHaveTextContent('View Demo');
  });

  it('displays social proof statistics', () => {
    render(<HeroSection />);
    
    expect(screen.getByText('10K+')).toBeInTheDocument();
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('Social Platforms')).toBeInTheDocument();
    
    expect(screen.getByText('1M+')).toBeInTheDocument();
    expect(screen.getByText('Posts Analyzed')).toBeInTheDocument();
  });

  it('renders navigation components', () => {
    render(<HeroSection />);
    
    expect(screen.getByTestId('hero-auth-buttons')).toBeInTheDocument();
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
  });

  it('displays the brand name and logo', () => {
    render(<HeroSection />);
    
    expect(screen.getByText('Social Stats Dashboard')).toBeInTheDocument();
    expect(screen.getByAltText('Social Stats Dashboard')).toBeInTheDocument();
  });

  it('has gradient background styling', () => {
    const { container } = render(<HeroSection />);
    const section = container.querySelector('section');
    
    expect(section).toHaveClass('bg-gradient-to-br');
  });

  it('benefits section displays all key features', () => {
    render(<HeroSection />);
    
    const benefits = [
      { text: 'Fast Setup', icon: 'zap-icon' },
      { text: 'Real-time Analytics', icon: 'bar-chart-icon' },
      { text: 'Easy Insights', icon: 'trending-up-icon' }
    ];
    
    benefits.forEach(benefit => {
      expect(screen.getByText(benefit.text)).toBeInTheDocument();
      expect(screen.getByTestId(benefit.icon)).toBeInTheDocument();
    });
  });
});