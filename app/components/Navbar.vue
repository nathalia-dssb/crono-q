<template>
  <nav
    class="bg-background w-full h-22 px-2 py-4 flex flex-row justify-center sticky top-0 z-10 items-center"
  >
    <NuxtLink to="/">
      <img src="/CronoQLogo.svg" class="w-auto h-14" />
    </NuxtLink>

    <div class="flex h-full flex-row gap-2 items-center right-2 absolute">
      <NuxtLink to="/login">
        <Button variant="secondary" class="text-lg">Inicia sesión</Button>
      </NuxtLink>

      <NuxtLink to="/register">
        <Button variant="secondary" class="text-lg">Regístrate</Button>
      </NuxtLink>
    </div>
  </nav>
</template>
