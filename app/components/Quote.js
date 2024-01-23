function Quote() {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden transform rotate-3 hover:rotate-0 transiti duration-200">
      <div className="px-8 py-5 leading-relaxed text-xl text-gray-500">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
        dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
        consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </div>
      <div className="px-8 py-5 bg-gradient-to-r from-purple-400 to-red-500 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-3">
            <img
              className="w-10 h-10 rounded-full border-white border-2"
              src="https://picsum.photos/200/300"
              alt="random"
            />
          </div>
          <div className="text-white">Jeni Lutfi</div>
        </div>
        <a
          href="#"
          className="text-white text-opacity-30 hover:text-opacity-100"
        >
          <svg
            width="48"
            height="48"
            fill="none"
            aria-hidden="true"
            class="mb-6 text-slate-300 group-hover:text-slate-400 dark:text-slate-600 dark:group-hover:text-slate-500"
          >
            <path
              d="m7.5 10.5 6.5-3 7 3.5v16l7-4v-8l7-4 7 4v8l-7 3.5V34l-14 7.5L7.5 34V10.5Z"
              fill="currentColor"
              fill-opacity="0"
            ></path>
            <path
              d="m7 11 7-4 7 4-7 4-7-4ZM21 11v16M21 35v7"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M7 11v23l14 8 14-8V19"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14 15v16l7 4 21-12v-8"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="m28 15 7-4 7 4-7 4-7-4ZM28 15v8l7 4M14 31l14-8"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Quote;
