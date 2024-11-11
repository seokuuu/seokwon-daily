export default function ArrowTrans() {
  return (
    <div className="w-full h-[100vh] flex justify-center border border-black">
      <div className="flex flex-col gap-5 relative top-[20%]">
        <div className="flex border justify-center items-center group relative overflow-hidden px-2">
          {/* 왼쪽 화살표 */}
          <svg
            viewBox="0 0 20 20"
            className="w-5 h-5 opacity-0 absolute left-2 transition-all duration-500 group-hover:opacity-100"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
              fill="currentColor"
            ></path>
          </svg>

          {/* 텍스트와 오른쪽 화살표를 함께 묶음 */}
          <div className="flex items-center transition-transform duration-500 group-hover:translate-x-6">
            <p className="block whitespace-nowrap">Seize every sale</p>
            <svg
              viewBox="0 0 20 20"
              className="w-5 h-5 transition-all duration-500 group-hover:translate-x-full group-hover:opacity-0"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <div>
          <p>test</p>
        </div>
      </div>
    </div>
  );
}
