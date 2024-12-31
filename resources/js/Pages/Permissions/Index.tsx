import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head } from '@inertiajs/react';

export default function PermissionsIndex() {
    const breadcrumbs = [
        { label: "Home", link: "/" },
        { label: "Permissions", link: "/permissions" },
    ]
    return (
        <Authenticated
        currentMenu="Settings"
        header={
            
            <div className='mb-2 text-4xl'> Permissions </div>
            
        }

        breadcrumbs={breadcrumbs}
    >
        <Head title="Permissions" />
        <div>
            
        </div>

    </Authenticated>
    );
}