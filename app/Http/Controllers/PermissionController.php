<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PermissionController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Permissions/Index');
    }

    public function create()
    {
        // Code to show form for creating a new permission
    }

    public function store(Request $request)
    {
        // Code to store a new permission
    }

    public function show($id)
    {
        // Code to display a specific permission
    }

    public function edit($id)
    {
        // Code to show form for editing a specific permission
    }

    public function update(Request $request, $id)
    {
        // Code to update a specific permission
    }

    public function destroy($id)
    {
        // Code to delete a specific permission
    }
}
