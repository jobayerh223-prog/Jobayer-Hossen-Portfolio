import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface BookCallButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  defaultText?: string;
  hoverText?: string;
  imageSrc?: string;
}

type InteractionPhase = 'idle' | 'start' | 'end';

const END_STATE_DELAY_MS = 460;
const textTransition = { duration: 0.24, ease: [0.2, 0, 0, 1] } as const;
const avatarSpring = {
  type: 'spring',
  stiffness: 460,
  damping: 26,
  mass: 0.8,
} as const;
const mergeSpring = { type: 'spring', stiffness: 540, damping: 32 } as const;
const slideSpring = {
  type: 'spring',
  stiffness: 360,
  damping: 17,
  mass: 0.9,
} as const;

export const BookCallButton: React.FC<BookCallButtonProps> = ({
  onClick,
  href,
  className = '',
  defaultText = 'Book Call',
  hoverText = "Let's Talk!",
  imageSrc = '/assets/aistudio/image_5c88b4ea.png',
}) => {
  const [interactionPhase, setInteractionPhase] = useState<InteractionPhase>('idle');
  const interactionPhaseRef = useRef<InteractionPhase>('idle');
  const endStateTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveredRef = useRef(false);
  const isFocusedRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  const updateInteractionPhase = (nextPhase: InteractionPhase) => {
    interactionPhaseRef.current = nextPhase;
    setInteractionPhase(nextPhase);
  };

  const clearEndStateTimer = () => {
    if (endStateTimerRef.current) {
      clearTimeout(endStateTimerRef.current);
      endStateTimerRef.current = null;
    }
  };

  const handleInteractionStart = () => {
    if (interactionPhaseRef.current !== 'idle') return;
    clearEndStateTimer();
    if (shouldReduceMotion) {
      updateInteractionPhase('end');
      return;
    }
    updateInteractionPhase('start');
    endStateTimerRef.current = setTimeout(() => {
      updateInteractionPhase('end');
      endStateTimerRef.current = null;
    }, END_STATE_DELAY_MS);
  };

  const handleInteractionEnd = () => {
    if (isHoveredRef.current || isFocusedRef.current) return;
    clearEndStateTimer();
    updateInteractionPhase('idle');
  };

  useEffect(() => clearEndStateTimer, []);

  const isActive = interactionPhase !== 'idle';
  const isEndState = interactionPhase === 'end';
  const withMotion = <T extends object>(transition: T) =>
    shouldReduceMotion ? ({ duration: 0 } as const) : transition;

  const content = (
    <>
      {/* Default Idle Text */}
      <motion.span
        initial={false}
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold tracking-wide"
        animate={{
          opacity: isActive ? 0 : 1,
          y: isActive ? -28 : 0,
          filter: isActive ? 'blur(4px)' : 'blur(0px)',
        }}
        transition={withMotion(textTransition)}
      >
        <span>{defaultText}</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </motion.span>

      {/* Active Avatars & Let's Talk Layer */}
      <motion.span
        initial={false}
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-start gap-1 pl-2 text-xs font-bold opacity-0"
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={withMotion(textTransition)}
      >
        <motion.span
          initial={false}
          className="flex shrink-0 items-center justify-center"
          animate={{ x: isEndState ? 0 : 24 }}
          transition={withMotion(slideSpring)}
        >
          {/* Jobayer Portrait Avatar */}
          <motion.span
            initial={false}
            className="relative z-0 block w-8 h-8 shrink-0 overflow-hidden rounded-full border border-white/60 shadow-xs bg-black"
            animate={{
              opacity: isActive ? 1 : 0,
              rotate: isActive ? 0 : -180,
              x: isActive ? 0 : -30,
            }}
            transition={withMotion({
              ...avatarSpring,
              delay: isActive ? 0.04 : 0,
            })}
          >
            <img
              src={imageSrc}
              alt="Jobayer"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </motion.span>

          {/* Plus Sign */}
          <motion.span
            initial={false}
            aria-hidden="true"
            className="block overflow-hidden text-center text-xs font-black text-slate-800"
            animate={{
              opacity: isActive && !isEndState ? 1 : 0,
              scale: isActive && !isEndState ? 1 : 0.6,
              width: isActive && !isEndState ? 14 : 0,
              marginLeft: isActive && !isEndState ? 4 : 0,
              marginRight: isActive && !isEndState ? 4 : 0,
            }}
            transition={withMotion({
              ...mergeSpring,
              opacity: textTransition,
              delay: isActive && !isEndState ? 0.12 : 0,
            })}
          >
            +
          </motion.span>

          {/* YOU Avatar */}
          <motion.span
            initial={false}
            className="relative z-10 flex w-8 h-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white text-[10px] font-black shadow-xs border border-slate-200"
            animate={{
              opacity: isActive ? 1 : 0,
              rotate: isActive ? 0 : 180,
              x: isActive ? 0 : 30,
              marginLeft: isEndState ? -8 : 0,
            }}
            transition={withMotion({
              ...avatarSpring,
              marginLeft: mergeSpring,
              delay: isActive && !isEndState ? 0.08 : 0,
            })}
          >
            YOU
          </motion.span>
        </motion.span>

        {/* Let's Talk! Sliding Text */}
        <motion.span
          initial={false}
          className="block overflow-hidden whitespace-nowrap text-xs sm:text-sm font-bold text-slate-900 pl-1"
          animate={{
            width: isEndState ? 'auto' : 0,
            opacity: isEndState ? 1 : 0,
          }}
          transition={withMotion({
            width: {
              ...textTransition,
              delay: isEndState ? 0.18 : 0,
            },
            opacity: {
              ...textTransition,
              delay: isEndState ? 0.18 : 0,
            },
          })}
        >
          {hoverText}
        </motion.span>
      </motion.span>
    </>
  );

  const sharedClasses = `relative isolate h-11 w-44 shrink-0 overflow-hidden rounded-full p-0 text-slate-900 bg-white border border-slate-200 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:border-slate-300 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={sharedClasses}
        onMouseEnter={() => {
          isHoveredRef.current = true;
          handleInteractionStart();
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          handleInteractionEnd();
        }}
        onFocus={() => {
          isFocusedRef.current = true;
          handleInteractionStart();
        }}
        onBlur={() => {
          isFocusedRef.current = false;
          handleInteractionEnd();
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={sharedClasses}
      onMouseEnter={() => {
        isHoveredRef.current = true;
        handleInteractionStart();
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        handleInteractionEnd();
      }}
      onFocus={() => {
        isFocusedRef.current = true;
        handleInteractionStart();
      }}
      onBlur={() => {
        isFocusedRef.current = false;
        handleInteractionEnd();
      }}
    >
      {content}
    </button>
  );
};
