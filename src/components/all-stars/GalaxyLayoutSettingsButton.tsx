import React, { useState, useEffect } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/animate-ui/components/radix/popover';
import GalaxyLayoutSettingsPopover from './GalaxyLayoutSettingsPopover';
import AttentionBadge from '@/components/badge/AttentionBadge';

interface GalaxyLayoutSettingsButtonProps {
  onTestModeChange?: (isTestMode: boolean) => void;
  onCodeGenerated?: (code: string, prompt: string, uris?: string[]) => void;
  onLoadPersonalization?: (personalization: any) => void;
  buttonRef?: React.RefObject<HTMLButtonElement | null>;
  isTestMode?: boolean;
}

const GalaxyLayoutSettingsButton: React.FC<GalaxyLayoutSettingsButtonProps> = ({
  onTestModeChange,
  onCodeGenerated,
  onLoadPersonalization,
  isTestMode = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent closing when in test mode
  const handleOpenChange = (open: boolean) => {
    if (isTestMode && !open) {
      // Don't allow closing when in test mode
      return;
    }
    setIsOpen(open);
  };

  // Keep popover open when test mode is active
  useEffect(() => {
    if (isTestMode && !isOpen) {
      setIsOpen(true);
    }
  }, [isTestMode, isOpen]);

  return (
    <div className={`${isTestMode ? 'absolute' : 'fixed'} bottom-32 left-[300px] z-50`}>
      <Popover open={isOpen} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <span aria-hidden="true" className="pointer-events-none select-none">
            <AttentionBadge />
          </span>
        </PopoverTrigger>
        <PopoverContent
          className={`w-96 max-h-[80vh] overflow-y-auto backdrop-blur-xl bg-white/20 dark:bg-slate-900/20 border border-blue-500/30 dark:border-blue-400/30 shadow-2xl shadow-blue-500/20 ${isTestMode ? 'pointer-events-auto' : ''}`}
          align="start"
          onPointerDownOutside={(e) => {
            if (isTestMode) {
              e.preventDefault();
            }
          }}
          onInteractOutside={(e) => {
            if (isTestMode) {
              e.preventDefault();
            }
          }}
          onEscapeKeyDown={(e) => {
            if (isTestMode) {
              e.preventDefault();
            }
          }}
        >
          <GalaxyLayoutSettingsPopover
            onTestModeChange={onTestModeChange}
            onCodeGenerated={onCodeGenerated}
            onLoadPersonalization={onLoadPersonalization}
            onClose={() => {
              if (!isTestMode) {
                setIsOpen(false);
              }
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default GalaxyLayoutSettingsButton;
