'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, ChevronDown, X } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavItem {
  id: string
  label: string
  url: string
  children?: NavItem[]
  parentId: string | null
  depth: number
}

interface MobileMenuProps {
  items: NavItem[]
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [isOpen, setIsOpen] = useState(false)

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  const handleNavClick = () => {
    setIsOpen(false)
    setExpandedItems(new Set())
  }

  const renderNavItems = (navItems: NavItem[], depth = 0) => {
    return navItems.map((item) => {
      const hasChildren = item.children && item.children.length > 0
      const isExpanded = expandedItems.has(item.id)

      return (
        <div key={item.id} className='mt-4'>
          <div className="flex items-center">
            {hasChildren ? (
              <button
                onClick={() => toggleItem(item.id)}
                className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className={cn(
                  'text-foreground font-medium',
                  depth > 0 && 'text-sm text-muted-foreground'
                )}>
                  {item.label}
                </span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 text-muted-foreground transition-transform',
                    isExpanded && 'rotate-180'
                  )}
                />
              </button>
            ) : item.url && item.url !== '#' ? (
              <Link
                href={item.url}
                onClick={handleNavClick}
                className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className={cn(
                  'text-foreground font-medium',
                  depth > 0 && 'text-sm text-muted-foreground'
                )}>
                  {item.label}
                </span>
              </Link>
            ) : (
              <div className="flex items-center justify-between w-full px-4 py-3">
                <span className={cn(
                  'text-foreground font-medium',
                  depth > 0 && 'text-sm text-muted-foreground'
                )}>
                  {item.label}
                </span>
              </div>
            )}
          </div>

          {hasChildren && isExpanded && (
            <div className="bg-secondary/30 border-l border-border/50 pl-2">
              {renderNavItems(item.children!, depth + 1)}
            </div>
          )}
        </div>
      )
    })
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-sm p-0 flex flex-col">
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <span className="font-semibold text-lg">Menu</span>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </SheetClose>
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-border">
          {renderNavItems(items)}
        </div>

        <div className="border-t border-border p-4 space-y-2">
          <p className="text-xs text-muted-foreground">Need help?</p>
          <Link
            href="/contact"
            onClick={handleNavClick}
            className="block w-full px-4 py-2 text-center text-sm font-medium bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
