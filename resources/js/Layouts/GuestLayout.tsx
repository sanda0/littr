import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import { GalleryVerticalEnd } from "lucide-react"

export default function Guest({ children }: PropsWithChildren) {
    return (

        <div className="flex flex-col items-center justify-center gap-6 p-6 min-h-svh bg-muted md:p-10">
            <div className="flex flex-col w-full max-w-sm gap-6">
                <a href="#" className="flex items-center self-center gap-2 font-medium">
                    <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-primary-foreground">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    Acme Inc.
                </a>
                {children}
            </div>
        </div>

    );
}
