export type LayoutMode = 'bento' | 'cards';

export interface LayoutPreference {
  mode: LayoutMode;
  isMobile: boolean;
}

export interface SwipeGesture {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  deltaX: number;
  deltaY: number;
}
