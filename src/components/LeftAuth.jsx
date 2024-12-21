import React from "react";

const LeftAuth = () => {
  return (
    <div className="hidden lg:flex w-1/2 bg-white flex-col items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full max-w-sm absolute transition-all ease-in-out delay-150 hover:scale-110 hover:z-20 duration-300">
        <div className="flex justify-start items-center px-6 pb-3 pt-4">
          <img src="/logo.png" className="h-8 w-8" />
          <div className="text-lg font-semibold mb-4">
            AI to Detect & Autofix Bad Code
          </div>
        </div>
        <hr />
        <div className="flex justify-between text-center px-6 pt-4 pb-8">
          <div>
            <div className="font-bold">30+</div>
            <div className="text-sm text-gray-600">Language Support</div>
          </div>
          <div>
            <div className="font-bold">10K+</div>
            <div className="text-sm text-gray-600">Developers</div>
          </div>
          <div>
            <div className="font-bold">100K+</div>
            <div className="text-sm text-gray-600">Hours Saved</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 mt-4 w-full max-w-[200px] relative translate-y-32 translate-x-48 transition ease-in-out delay-150 hover:scale-110 hover:z-20 duration-300">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-10 justify-between">
            <div>
              <img src="/vector.png" className="h-12 w-12" />
            </div>
            <div className="flex flex-col">
              <p className="text-primary font-medium text-sm">↑ 14%</p>
              <p className="text-xs">This week</p>
            </div>
          </div>
          <div className="flex items-start justify-start flex-col">
            <div className="font-semibold">Issues Fixed</div>
            <div className="text-xl font-bold">500K+</div>
          </div>
        </div>
      </div>
      <div>
        <img src="/subtract.png" className="absolute bottom-0 left-0" />
      </div>
    </div>
  );
};

export default LeftAuth;
