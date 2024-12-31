import { AppSidebar } from '@/components/app-sidebar';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { BreadcrumbItemData } from '@/types/custom';
import { Link, usePage } from '@inertiajs/react';
import React, { PropsWithChildren, ReactNode, useState } from 'react';



export default function Authenticated({
  header,
  children,
  breadcrumbs,
  currentMenu,
}: PropsWithChildren<{ header?: ReactNode, breadcrumbs?: BreadcrumbItemData[], currentMenu: string }>) {
  const user = usePage().props.auth.user;

  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <SidebarProvider>
      <AppSidebar currentMenu={currentMenu} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4 mr-2" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs?.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col flex-1 gap-4 p-4 pt-0 overflow-y-auto bg-gray-100 ">
          <div className='mt-4'>
            {header}
            <hr />
          </div>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
