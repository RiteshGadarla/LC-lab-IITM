import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** "Gadarla Ritesh Reddy" -> "gadarlariteshreddy" (used as anchor ids) */
export function nameToSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "")
}
