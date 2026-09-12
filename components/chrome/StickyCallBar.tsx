import { CallLink, PhoneGlyph } from '@/components/ui/CallLink';
import { operator } from '@/lib/content';

/**
 * §2.10 — Sticky mobile call bar.
 *
 * Shown below 1024px (`lg:hidden`). Tablets keep it as well as phones, because
 * the header's anchor nav only appears at `lg` — without the bar there would be
 * no persistent call affordance between 768px and 1024px.
 *
 * The bar is 48px of button plus padding, landing inside the §2.10 64px budget
 * before the safe-area inset, which is added separately so it clears the iOS
 * home indicator. The page wrapper carries `pb-24 lg:pb-0` so footer content is
 * never covered.
 */
export function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-3 pt-1.5 backdrop-blur lg:hidden"
      style={{ paddingBottom: 'max(0.375rem, env(safe-area-inset-bottom))' }}
    >
      <CallLink variant="bar" label={`Call ${operator.phoneDisplay} to order`}>
        <PhoneGlyph className="h-5 w-5" />
        <span>Call {operator.phoneDisplay}</span>
      </CallLink>
    </div>
  );
}
