import React, { memo } from 'react'


import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import Counter from './Counter'

export default function Example() {
  return (
    <div className="flex  w-full ">
        <Popover __demoMode>
          <PopoverButton className="text-sm/6 font-semibold  focus:outline-none flex items-center gap-8 px-8 py-3 ">
            <i></i>
            <span>guests</span>
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              anchor="bottom"
              className="divide-y divide-white/5 w-[300px] rounded-xl bg-white/5 text-sm/6 [--anchor-gap:var(--spacing-5)] bg-slate-50 shadow z-30"
            >
              <div className="p-3">
                <Counter type='adult' age='13 or above' />
                <Counter type='adult' age='13 or above'/>
                <Counter type='adult' age='13 or above'/>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>

    </div>
  )
}
