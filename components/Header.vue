<template>
  <div id="container-header"
  class="flex justify-start md:justify-between items-start md:items-center md:py-3 border-b-2 border-gray-100">
    <div id="header-logo" class="flex pl-2 pt-1 md:pl-14 h-12 md:h-auto">
      <span class="md:hidden text-4xl pr-2 pt-1"> &equiv;</span>
      <img
        class="h-10 pt-2 block md:hidden"
        src="~/assets/images/logoH.PNG"
        alt="La Haus" />

      <img
        class="h-7 hidden md:block"
        src="https://lahaus.imgix.net/static/branding/logo-lahaus-full.svg?auto=compress,format&dpr=2"
        alt="La Haus" />
    </div>
    <div id="header-menu" class="items-end hidden md:block">
      <ul class="list-none text-black-700 pr-14 cursor-pointer">
        <li class="inline-block pr-8">Cundinamarca</li>
        <li class="inline-block pr-8">Antioquia</li>
        <li class="inline-block pr-8">Recursos</li>
        <li class="inline-block font-bold">
          Mi Perfil
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>
