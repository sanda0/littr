<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class GeneratePermissions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-permissions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {

        $ignore = [
            'login',
            'register',
            'password.request',
            'password.email',
            'password.update',
            'password.reset',
            'verification.notice',
            'verification.verify',
            'verification.resend',
            'logout',
            'dashboard',
            'sanctum.csrf-cookie',
            'storage.local'
        ];

        $superAdminRole = Role::firstOrCreate(['name' => 'super_admin', 'guard_name' => 'web']);

        $routes = Route::getRoutes();
        foreach ($routes as $route) {
            $name = $route->getName();
            if ($name) {
                $this->info($name);
                if (in_array($name, $ignore)) {
                    continue;
                }
                Permission::firstOrCreate(['name' => $name, 'guard_name' => 'web']);
                $superAdminRole->givePermissionTo($name);

                $this->info("Permission created: $name");

            }
        }
        $this->info('Permissions generated successfully.');
    }
}
