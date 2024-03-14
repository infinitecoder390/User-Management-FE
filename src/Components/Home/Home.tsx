import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { getUser } from "../../Redux/Slice/userSlice";
import { INVENTORYUPLOAD, PATCHUSER } from "../common/constants";
import { toast } from "react-toastify";
import { API } from "../common/Api";
import CommonModal from "../common/CommonModel";
const Home = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [selectFile, setSelectFile] = useState<File>();
  const [openDustbinModal, setOpenDustbinModal] = useState(false);
  const [openDownloadModal, setOpenDownloadModal] = useState(false);
  const [dustBinId, setDustBinId] = useState("");
  const [fileObj, setFileObj] = useState<any>({});
  const [fileCodeError, setFileCodeError] = useState("");
  const [checkDownloadFileCode, setDownloadFileCode] = useState("");
  const user = useAppSelector((state: any) => state.users.user);
  useEffect(() => {
    dispatch(getUser(sessionStorage.getItem("userid") || ""));
  }, []);
  const onSubmit = async () => {
    setIsLoading(true);
    try {
      if (selectFile) {
        const formData = new FormData();
        formData.append("file", selectFile);
        const response = await API.patch(
          `${INVENTORYUPLOAD}/${sessionStorage.getItem("userid")}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          toast.success("File Uploaded successfully");
          await dispatch(getUser(sessionStorage.getItem("userid") || ""));
        } else {
          setUploadError("Failed to upload file. Please try again.");
        }
      } else {
        toast.error("Please select file.");
      }
    } catch (error) {
      console.error("Error:", error);
      setUploadError("An error occurred during upload. Please try again.");
    } finally {
      setSelectFile(undefined);
      setIsLoading(false);
    }
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file && file.size > 1024 * 1024 * 10) {
      setUploadError("File size exceeds limit (10 MB).");
    }
    setSelectFile(file);
  };

  return (
    <div>
      <div className="flex w-full py-5 px-14 bg-grey-lighter">
        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">Select a file</span>
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
        {selectFile && selectFile.name && (
          <div>
            <p className="px-2">Selected File: {selectFile.name}</p>
            <div className="flex items-center">
              <button
                type="submit"
                className="bg-green-600 p-2 w-50 h-10 m-2 text-white rounded-md"
                onClick={onSubmit}
              >
                {isLoading ? "Uploading..." : "upload a file"}
              </button>
              <button
                onClick={() => {
                  setSelectFile(undefined);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#FF0000"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,12.69047 10.30953,23 23,23c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-11.60953,0 -21,-9.39047 -21,-21c0,-11.60953 9.39047,-21 21,-21zM32.99023,15.98633c-0.26377,0.00624 -0.51439,0.11645 -0.69727,0.30664l-7.29297,7.29297l-7.29297,-7.29297c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30274c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80921 0.22907,1.09303l7.29297,7.29297l-7.29297,7.29297c-0.26124,0.25082 -0.36648,0.62327 -0.27512,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27512l7.29297,-7.29297l7.29297,7.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-7.29297,-7.29297l7.29297,-7.29297c0.29724,-0.28583 0.38857,-0.7248 0.23,-1.10546c-0.15857,-0.38066 -0.53454,-0.62497 -0.94679,-0.61524z"></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      {uploadError && <p className="text-red-500">{uploadError}</p>}
      <div className=" relative flex min-h-screen flex-col  overflow-hidden  py-4 sm:py-10">
        <div className="mx-auto max-w-screen-xl px-4 w-full">
          <h2 className="mb-4 font-bold text-xl text-gray-600">
            User Documents Inventory
          </h2>
          <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {user && user.inventory && user.inventory.length > 0 ? (
              user.inventory.map((element: any) => {
                return (
                  <div
                    key={element.code}
                    className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"
                  >
                    <button
                      className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
                      onClick={() => {
                        setDustBinId(element.code);
                        setOpenDustbinModal(true);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0,0,256,256"
                      >
                        <g
                          fill="#FB8C00"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <g transform="scale(4,4)">
                            <path d="M28,11c-1.105,0 -2,0.895 -2,2v1h-13c-1.104,0 -2,0.896 -2,2c0,1.104 0.896,2 2,2h1.16016l2.54102,30.49805c0.256,3.085 2.88447,5.50195 5.98047,5.50195h18.63672c3.096,0 5.72347,-2.41695 5.98047,-5.50195l2.54102,-30.49805h1.16016c1.104,0 2,-0.896 2,-2c0,-1.104 -0.896,-2 -2,-2h-13v-1c0,-1.105 -0.895,-2 -2,-2zM18.17383,18h27.6543l-2.51562,30.16602c-0.086,1.028 -0.96019,1.83398 -1.99219,1.83398h-18.63867c-1.033,0 -1.90914,-0.80598 -1.99414,-1.83398z"></path>
                          </g>
                        </g>
                      </svg>
                    </button>
                    <button className="z-20 absolute h-full w-full top-0 left-0 ">
                      &nbsp;
                    </button>
                    <div className="h-auto overflow-hidden">
                      <div className="h-44 overflow-hidden relative">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/4477/4477917.png"
                          alt="document"
                        />
                      </div>
                    </div>
                    <div className="bg-white py-4 px-3">
                      <h3 className="text-xs mb-2 font-medium">
                        {element.originalname}
                      </h3>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-400">
                          {element.mimetype}-{element.code}
                        </p>
                        <div className="relative z-40 flex items-center gap-2">
                          <button
                            className="text-orange-600 hover:text-blue-500"
                            onClick={() => {
                              setFileObj(element);
                              setOpenDownloadModal(true);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h4 className="mb-4 font-bold text-xl text-red-600">
                Inventory is Empty.
              </h4>
            )}
          </div>
        </div>
      </div>
      {openDustbinModal && !openDownloadModal && (
        <CommonModal
          onCancel={() => {
            setOpenDustbinModal(false);
            setDustBinId("");
          }}
          onButtunClicked={async () => {
            if (dustBinId) {
              const updatedInventory = user?.inventory.filter(
                (elem: any) => elem.code !== dustBinId
              );
              const response: any = await API.patch(
                `${PATCHUSER}/${sessionStorage.getItem("userid")}`,
                {
                  inventory: updatedInventory,
                }
              );

              if (response.status == 200 || response.status == 201) {
                toast.success(
                  `Inventory with ${dustBinId} deleted successfully`
                );
                await dispatch(getUser(sessionStorage.getItem("userid") || ""));
                setDustBinId("");
                setOpenDustbinModal(false);
              }
            }
          }}
          buttonName="Delete Inventory file"
          header="Delete"
          message="Are you sure you want to delete this file?"
        />
      )}
      {openDownloadModal && !openDustbinModal && (
        <CommonModal
          onCancel={() => {
            setOpenDownloadModal(false);
            setFileObj({});
            setFileCodeError("");
          }}
          onButtunClicked={() => {
            if (checkDownloadFileCode === fileObj.code) {
              const url = `${import.meta.env.REACT_APP_BASE_URL}/${
                fileObj.path
              }`;
              const anchor = document.createElement("a");
              anchor.setAttribute("href", `${url}`);
              anchor.setAttribute("target", "_blank");
              anchor.setAttribute("download", `${fileObj.filename}`);
              anchor.click();
              setOpenDownloadModal(false);
            } else {
              setFileCodeError("File code does not match.");
            }
          }}
          buttonName="Download"
          header="Download Inventory File"
          element={
            <>
              <div className="p-3">
                <label htmlFor="username" className="py-2 block text-gray-600">
                  Please Enter inventory file code.
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md py-2 px-2 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                  onChange={(e: any) => setDownloadFileCode(e.target.value)}
                />
                {fileCodeError && (
                  <p className="text-red-600 py-3">{fileCodeError}</p>
                )}
              </div>
            </>
          }
        />
      )}
    </div>
  );
};
export default Home;
