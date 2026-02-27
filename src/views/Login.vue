<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <form>
        <div class="mb-4">
          <label class="block mb-1 font-medium">Email</label>
          <input type="email" class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-6">
          <label class="block mb-1 font-medium">Password</label>
          <input type="password" class="w-full px-3 py-2 border rounded" />
        </div>
        <button type="submit" class="w-full bg-primary text-white py-2 rounded hover:bg-primary-hover transition-colors">Login</button>
      </form>
    </div>
  </div>
</template>
