

export default function Home() {
  return (
    <div className="bg-slate-400 xl:place-content-center py-20 px-5 grid gap-10 xl:grid-cols-3 lg:grid-cols-2 min-h-screen">
      <div className="bg-white dark:bg-black flex flex-col justify-between p-10 rounded-2xl shadow-2xl">
        <span className="font-semibold  dark:text-white text-3xl">Selected Item</span>
        <ul>
        {[1,2,3,4,5].map((i) => (
          <div key={i} className="flex justify-between my-2 odd:bg-blue-100">
            <span className="text-gray-500 dark:text-gray-100">Grey Chair</span>
            <span className="font-semibold">$10</span>
          </div>
        )
        )}
        </ul>
        <ul>
        {["a","b","c", ""].map((c,i) => (
          <li key={i} className="bg-red-500 py-2 empty:bg-green-500">
            {c}
          </li>
        )
        )}
        </ul>

        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$20</span>
        </div>
        <div className="mt-5 bg-blue-500 dark:bg-black dark:border-white dark:border text-white p-3
        text-center rounded-xl w-3/5 mx-auto
        hover:bg-teal-500 dark:hover:bg-gray-500 hover:text-black dark:hover:text-white
        active:bg-yellow-500 focus:bg-red-500">Checkout</div>
      </div>


      <div className="bg-white overflow-hidden rounded-2xl shadow-2xl group">
        <div className="portrait:bg-blue-600  landscape:bg-teal-400 p-6 pb-14 xl:pb-44">
          <span className="text-[#981234] text-2xl">Profile</span>
        </div>
        <div className="rounded-2xl bg-white relative -top-5 p-6">
          <div className="flex relative -top-16 items-end justify-between ">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-red-300 rounded-full group-hover:bg-purple-200 transition">
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-semibold">$2,310</span>
            </div>
          </div>
          <div className="flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-semibold">Tony Molloy</span>
            <span className="text-base font-medium text-gray-500">미국</span>
          </div>
        </div>

      </div>



      <div className="bg-white p-10 rounded-2xl shadow-2xl xl:col-span-1 lg:col-span-2">
        <div className="flex mb-5 justify-between items-center">
          <span>⇐</span>
          <div className="space-x-3">
            <span>🔶 4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-2 mb-5 flex justify-between items-center">
            <div>
              <div className="space-x-2">
                <button className="w-5 h-5 rounded-full bg-yellow-500 bg-opacity-70 focus:ring-2 ring-offset-2 ring-gray-300 transition"/>
                <button className="w-5 h-5 rounded-full bg-indigo-500 bg-opacity-70 focus:ring-2 ring-offset-2 ring-gray-300 transition"/>
                <button className="w-5 h-5 rounded-full bg-teal-500 bg-opacity-70 focus:ring-2 ring-offset-2 ring-gray-300 transition"/>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <button className="p-2.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-10 text-xl">-</button>
              <span>1</span>
              <button className="p-2.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-10 text-xl">+</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-2xl">$450</span>
            <button className="bg-blue-500 text-center mt-3 py-2 px-8 text-sm text-white rounded-lg">Add to cart</button>
          </div>
        </div>
      </div>


      <div>
        <details className="select-none open:text-white open:bg-indigo-400">
          <summary className="cursor-pointer">What is my Fav</summary>
          <span className="">My Fav is Tomato</span>
        </details>

        <input type="file" className="file:border-0 file:rounded-md file:bg-indigo-200 file:px-3
        transition-colors file:cursor-pointer file:hover:text-white file:hover:border file:hover:border-color-purple
        "/>
      </div>
    </div>
  );
}
