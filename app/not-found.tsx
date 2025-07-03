'use client';

export default function NotFound() {
  return (
    <main className="flex h-[100dvh] w-full flex-col items-center justify-center px-6 text-center">
      <h1 className="flex items-center text-dracula-foreground gap-[20px]">
        <span className="inline-block text-[24px] font-medium align-top leading-[49px] text-dracula-foreground">404</span>
        <span className="h-12 w-px bg-dracula-current-line" aria-hidden="true"></span>
        <span className="inline-block text-sm font-normal leading-[49px] text-dracula-foreground m-0">This page could not be found.</span>
      </h1>
    </main>
  );
} 