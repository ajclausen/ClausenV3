'use client';

export default function NotFound() {
  return (
    <main className="flex h-[100dvh] w-full flex-col items-center justify-center px-6 text-center">
      <h1 className="flex items-center text-slate-400 gap-[20px]">
        <span className="inline-block text-[24px] font-medium align-top leading-[49px] text-slate-400">404</span>
        <span className="h-12 w-px bg-slate-600" aria-hidden="true"></span>
        <span className="inline-block text-sm font-normal leading-[49px] text-slate-400 m-0">This page could not be found.</span>
      </h1>
    </main>
  );
} 