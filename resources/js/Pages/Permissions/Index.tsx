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
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Permissions
            </h2>
        }

        breadcrumbs={breadcrumbs}
    >
        <Head title="Permissions" />
        <div>
            <h1>Permissions</h1>
        </div>

    </Authenticated>
    );
}