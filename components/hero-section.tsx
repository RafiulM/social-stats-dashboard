"use client";

import { ArrowRight, BarChart3, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroAuthButtons } from "@/components/auth-buttons";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/codeguide-logo.png"
                alt="Social Stats Dashboard"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Social Stats Dashboard
              </span>
            </div>
            <div className="flex items-center gap-2">
              <HeroAuthButtons />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Unified Social Analytics
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              All in One Dashboard
            </span>
          </h1>

          {/* Subheadline */}
          <p className={`text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Track, analyze, and grow your social media presence across all platforms. 
            Get actionable insights with our fast, intuitive dashboard designed for creators and businesses.
          </p>

          {/* Key Benefits */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
              <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
              <span>Fast Setup</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
              <BarChart3 className="w-4 h-4 text-green-500" />
              <span>Real-time Analytics</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <span>Easy Insights</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              asChild 
              size="lg" 
              className="text-base px-8 py-6 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 group"
            >
              <Link href="/sign-up" className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base px-8 py-6 rounded-xl font-semibold border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-950 dark:hover:to-cyan-950 transition-all duration-300 transform hover:scale-105 active:scale-95"
              asChild
            >
              <Link href="/dashboard">View Demo</Link>
            </Button>
          </div>

          {/* Social Proof/Stats */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-gray-200 dark:border-gray-700 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                10K+
              </div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Social Platforms</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                1M+
              </div>
              <div className="text-sm text-muted-foreground">Posts Analyzed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1100 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}