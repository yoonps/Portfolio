import { useState } from 'react';
import type { DeviceType, ScreenLayout } from '../../types';

interface DeviceFrameProps {
  device: DeviceType;
  layout: ScreenLayout;
  gradient: string;
  screenshot?: string;
  alt: string;
}

function SkeletonScreen({
  layout,
  gradient,
}: {
  layout: ScreenLayout;
  gradient: string;
}) {
  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${gradient} p-4`}>
      {layout === 'grid' && (
        <div className="flex h-full flex-col gap-3">
          <div className="h-6 w-2/3 rounded-full bg-bg/70" />
          <div className="grid flex-1 grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-lg bg-bg/60" />
            ))}
          </div>
        </div>
      )}

      {layout === 'list' && (
        <div className="flex h-full flex-col gap-2.5">
          <div className="h-6 w-1/2 rounded-full bg-bg/70" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-9 w-full rounded-lg bg-bg/55" />
          ))}
          <div className="mt-auto flex h-10 w-full items-center justify-between rounded-lg bg-ink/80 px-3">
            <div className="h-2.5 w-1/4 rounded-full bg-bg/60" />
            <div className="h-2.5 w-1/6 rounded-full bg-bg/60" />
          </div>
        </div>
      )}

      {layout === 'form' && (
        <div className="flex h-full flex-col justify-center gap-3">
          <div className="mb-2 h-6 w-1/2 rounded-full bg-bg/70" />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <div className="h-2 w-1/4 rounded-full bg-bg/50" />
              <div className="h-8 w-full rounded-full bg-bg/60" />
            </div>
          ))}
          <div className="mx-auto mt-3 h-9 w-1/2 rounded-full bg-ink/85" />
        </div>
      )}

      {layout === 'hero' && (
        <div className="flex h-full flex-col gap-3">
          <div className="h-[45%] w-full rounded-xl bg-bg/60" />
          <div className="h-4 w-2/3 rounded-full bg-bg/70" />
          <div className="h-2 w-full rounded-full bg-bg/40" />
          <div className="h-2 w-5/6 rounded-full bg-bg/40" />
          <div className="h-2 w-4/6 rounded-full bg-bg/40" />
          <div className="mt-1 h-8 w-1/3 rounded-full bg-ink/85" />
        </div>
      )}
    </div>
  );
}

export function DeviceFrame({ device, layout, gradient, screenshot, alt }: DeviceFrameProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = screenshot && !imageFailed;

  if (device === 'phone') {
    return (
      <div className="relative mx-auto aspect-[9/19] w-full max-w-[260px] overflow-hidden rounded-[2.5rem] border-[6px] border-ink/90 bg-surface shadow-[0_30px_60px_-25px_rgba(28,27,30,0.3)]">
        <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-ink/90" />
        <div className="h-full w-full overflow-hidden">
          {showImage ? (
            <img
              src={screenshot}
              alt={alt}
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <SkeletonScreen layout={layout} gradient={gradient} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_60px_-25px_rgba(28,27,30,0.25)]">
      <div className="flex h-9 items-center gap-1.5 border-b border-line bg-surface-2 px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="mx-auto w-1/3 rounded-full bg-bg/70 py-1 text-center font-mono text-[10px] text-mute">
          preview
        </span>
      </div>
      <div className="aspect-[16/10] w-full overflow-hidden">
        {showImage ? (
          <img
            src={screenshot}
            alt={alt}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <SkeletonScreen layout={layout} gradient={gradient} />
        )}
      </div>
    </div>
  );
}
