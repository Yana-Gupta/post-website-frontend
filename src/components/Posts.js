import Image1 from "@assets/images/Image1.jpg";
import Image2 from "@assets/images/Image2.png";
import Image3 from "@assets/images/Image3.png";

import Image from "next/image";

export default function Post() {
  return (
    <div className="flex flex-col">
      {/* 1 st post  */}
      <div className="flex flex-col rounded my-8 border border-slate-300">
        <Image src={Image1} className="w-full" />
        <div className="py-6 px-5">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col">
              <h3 className="text-xl">✍️ Article</h3>
              <h1 className="text-xl md:text-3xl font-semibold py-3">
                Lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar{" "}
              </h1>
              <p className="text-md md:text-2xl text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quod, voluptatum, quos
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(0, 0, 0, 1)"
              transform=" ;msFilter:;"
            >
              <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </div>

          <div className="pt-8 flex flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center">
              <Image className="h-10 w-10 rounded-full" src={Image2} alt="" />
              <span className="font-semibold py-2 px-6">NAME NAME</span>
            </div>
            <div className="flex flex-row">
              <span className="text-slate-400 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 100 100"
                  id="view"
                >
                  <path d="M50 34c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm44.4-13.4l-8.6-8.7C76.3 30.3 63.6 25 50 25s-26.3 5.3-35.8 14.9l-8.6 8.7c-.8.8-.8 2 0 2.8l8.6 8.7C23.7 69.7 36.4 75 50 75s26.3-5.3 35.8-14.9l8.6-8.7c.8-.8.8-2 0-2.8zM83 57.3C74.2 66.1 62.5 71 50 71s-24.2-4.9-33-13.7L9.8 50l7.2-7.3C25.8 33.9 37.5 29 50 29s24.2 4.9 33 13.7l7.2 7.3-7.2 7.3z"></path>
                  <path
                    fill="#00F"
                    d="M944-790V894H-840V-790H944m8-8H-848V902H952V-798z"
                  ></path>
                </svg>{" "}
                &nbsp;&nbsp; 1.4K Views
              </span>

              <button className="ml-8">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAihJREFUSEuVlm1520AQhN9FUEMwg6YIbDMwBBdBXQSxEcRBUAdBzCAKgwRBEwYugu2zdyvdSrpLWv2w7rmT9mNmdiwRQMsP80sQFI0H6XnwG3E1fV/qscurlYyfbsXEtq4W8GFTnkJgq3AHLAXeFH6CXFJ7HjgnmLU/xqAB4xZ47HEKBW2ALu4P4WPVLZDCfgesgCPICXRH7uYZWFcTRLhmEM0zZm0kgNNqifDbFCOoZJBs3eCgoDZWkSdeozz5M3uQB9A9cDt08D8cBIqWwK8EQY26vLcR6ArNYwaMuB8ewDC+d1UsEG5RrEq7/gAH4CXfZQVq2J+Ay7j7AtFW4HE0UPnJM2CJF/7ivQe9pgGccTOHtE/YUkV//gyyE9T0/vkVlN4PWoAtVbHUpIp0vFHT9mgmK0KubYW9F4GvKuxRHiDhbapIxCF0VUNqybDvICTIk+lXpZgO5DvoW2V6G8bXz0EJat5ila8EXnM3ciPoQeGLP3ZCOKJyLZ4TKRmXlt00Vu2TFC1aYKFZliZhI+WKchB41wzjjUvWbOMyebcuiIr6rBIbtDPCyi1hkGmwaIPRpD2wU0W9bnaucWGNypNXevQB2yHcoWn4vvXh53bdJrmINMOonuADs4MRB3XFtYw7zYXZ9dTsXp2TKUTt0hsp5taSO8scVOYgaPmfk9nsGKEm4Xf3qHP8ImhwUPmSqIgt/pVOpdmy6yFMkF3+bKkMTAk6PozJ/gL93vIgqcK99AAAAABJRU5ErkJggg==" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2 nd post  */}
      <div className="flex flex-col rounded my-8 border border-slate-300">
        <Image src={Image2} className="w-full" />
        <div className="py-6 px-5">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col">
              <h3 className="text-xl">🔭 Education</h3>
              <h1 className="text-xl md:text-3xl font-semibold py-3">
                Lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar{" "}
              </h1>
              <p className="text-md md:text-2xl text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quod, voluptatum, quos
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(0, 0, 0, 1)"
              transform=" ;msFilter:;"
            >
              <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </div>

          <div className="pt-8 flex flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center">
              <Image className="h-10 w-10 rounded-full" src={Image2} alt="" />
              <span className="font-semibold py-2 px-6">NAME NAME</span>
            </div>
            <div className="flex flex-row">
              <span className="text-slate-400 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 100 100"
                  fontWeight={900}
                  id="view"
                >
                  <path d="M50 34c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm44.4-13.4l-8.6-8.7C76.3 30.3 63.6 25 50 25s-26.3 5.3-35.8 14.9l-8.6 8.7c-.8.8-.8 2 0 2.8l8.6 8.7C23.7 69.7 36.4 75 50 75s26.3-5.3 35.8-14.9l8.6-8.7c.8-.8.8-2 0-2.8zM83 57.3C74.2 66.1 62.5 71 50 71s-24.2-4.9-33-13.7L9.8 50l7.2-7.3C25.8 33.9 37.5 29 50 29s24.2 4.9 33 13.7l7.2 7.3-7.2 7.3z"></path>
                  <path
                    fill="#00F"
                    d="M944-790V894H-840V-790H944m8-8H-848V902H952V-798z"
                  ></path>
                </svg>{" "}
                &nbsp;&nbsp; 1.4K Views
              </span>

              <button className="ml-8">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAihJREFUSEuVlm1520AQhN9FUEMwg6YIbDMwBBdBXQSxEcRBUAdBzCAKgwRBEwYugu2zdyvdSrpLWv2w7rmT9mNmdiwRQMsP80sQFI0H6XnwG3E1fV/qscurlYyfbsXEtq4W8GFTnkJgq3AHLAXeFH6CXFJ7HjgnmLU/xqAB4xZ47HEKBW2ALu4P4WPVLZDCfgesgCPICXRH7uYZWFcTRLhmEM0zZm0kgNNqifDbFCOoZJBs3eCgoDZWkSdeozz5M3uQB9A9cDt08D8cBIqWwK8EQY26vLcR6ArNYwaMuB8ewDC+d1UsEG5RrEq7/gAH4CXfZQVq2J+Ay7j7AtFW4HE0UPnJM2CJF/7ivQe9pgGccTOHtE/YUkV//gyyE9T0/vkVlN4PWoAtVbHUpIp0vFHT9mgmK0KubYW9F4GvKuxRHiDhbapIxCF0VUNqybDvICTIk+lXpZgO5DvoW2V6G8bXz0EJat5ila8EXnM3ciPoQeGLP3ZCOKJyLZ4TKRmXlt00Vu2TFC1aYKFZliZhI+WKchB41wzjjUvWbOMyebcuiIr6rBIbtDPCyi1hkGmwaIPRpD2wU0W9bnaucWGNypNXevQB2yHcoWn4vvXh53bdJrmINMOonuADs4MRB3XFtYw7zYXZ9dTsXp2TKUTt0hsp5taSO8scVOYgaPmfk9nsGKEm4Xf3qHP8ImhwUPmSqIgt/pVOpdmy6yFMkF3+bKkMTAk6PozJ/gL93vIgqcK99AAAAABJRU5ErkJggg==" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Third post  */}

      <div className="flex flex-col rounded my-8 border border-slate-300">
        <Image src={Image3} className="w-full" />
        <div className="py-6 px-5">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col">
              <h3 className="text-xl"> 🗓️ MeetUp</h3>
              <h1 className="text-xl md:text-3xl font-semibold py-3">
                Lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar{" "}
              </h1>
              <p className="text-md md:text-2xl text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quod, voluptatum, quos
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(0, 0, 0, 1)"
              transform=" ;msFilter:;"
            >
              <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </div>
          <div className="pt-8 flex flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center">
              <Image className="h-10 w-10 rounded-full" src={Image3} alt="" />
              <span className="font-semibold py-2 px-6">NAME NAME</span>
            </div>
            <div className="flex flex-row">
              <span className="text-slate-400 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 100 100"
                  fontWeight={900}
                  id="view"
                >
                  <path d="M50 34c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm44.4-13.4l-8.6-8.7C76.3 30.3 63.6 25 50 25s-26.3 5.3-35.8 14.9l-8.6 8.7c-.8.8-.8 2 0 2.8l8.6 8.7C23.7 69.7 36.4 75 50 75s26.3-5.3 35.8-14.9l8.6-8.7c.8-.8.8-2 0-2.8zM83 57.3C74.2 66.1 62.5 71 50 71s-24.2-4.9-33-13.7L9.8 50l7.2-7.3C25.8 33.9 37.5 29 50 29s24.2 4.9 33 13.7l7.2 7.3-7.2 7.3z"></path>
                  <path
                    fill="#00F"
                    d="M944-790V894H-840V-790H944m8-8H-848V902H952V-798z"
                  ></path>
                </svg>{" "}
                &nbsp;&nbsp; 1.4K Views
              </span>

              <button className="ml-8">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAihJREFUSEuVlm1520AQhN9FUEMwg6YIbDMwBBdBXQSxEcRBUAdBzCAKgwRBEwYugu2zdyvdSrpLWv2w7rmT9mNmdiwRQMsP80sQFI0H6XnwG3E1fV/qscurlYyfbsXEtq4W8GFTnkJgq3AHLAXeFH6CXFJ7HjgnmLU/xqAB4xZ47HEKBW2ALu4P4WPVLZDCfgesgCPICXRH7uYZWFcTRLhmEM0zZm0kgNNqifDbFCOoZJBs3eCgoDZWkSdeozz5M3uQB9A9cDt08D8cBIqWwK8EQY26vLcR6ArNYwaMuB8ewDC+d1UsEG5RrEq7/gAH4CXfZQVq2J+Ay7j7AtFW4HE0UPnJM2CJF/7ivQe9pgGccTOHtE/YUkV//gyyE9T0/vkVlN4PWoAtVbHUpIp0vFHT9mgmK0KubYW9F4GvKuxRHiDhbapIxCF0VUNqybDvICTIk+lXpZgO5DvoW2V6G8bXz0EJat5ila8EXnM3ciPoQeGLP3ZCOKJyLZ4TKRmXlt00Vu2TFC1aYKFZliZhI+WKchB41wzjjUvWbOMyebcuiIr6rBIbtDPCyi1hkGmwaIPRpD2wU0W9bnaucWGNypNXevQB2yHcoWn4vvXh53bdJrmINMOonuADs4MRB3XFtYw7zYXZ9dTsXp2TKUTt0hsp5taSO8scVOYgaPmfk9nsGKEm4Xf3qHP8ImhwUPmSqIgt/pVOpdmy6yFMkF3+bKkMTAk6PozJ/gL93vIgqcK99AAAAABJRU5ErkJggg==" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
