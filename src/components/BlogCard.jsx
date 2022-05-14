import React from 'react';

export const BlogCard = () => {
  return (
    <div>
      <a href="" class="block overflow-hidden rounded-2xl">
        <img
          class="object-cover w-full h-56"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />

        <div class="p-4 bg-gray-900">
          <p class="text-xs text-gray-500">website.com</p>

          <h5 class="text-sm text-white">
            How to position your furniture for positivity
          </h5>

          <p class="mt-1 text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            nobis aliquid accusamus? Sint, sequi voluptas.
          </p>
        </div>
      </a>
    </div>
  );
};