import { create } from "zustand";

interface ActionsProps {
  viewSideBar: boolean;
  isClose: boolean;
  setisClose:(isClose : boolean) => void;
  setViewSideBar: (viewSideBar: boolean) => void;
}

export const useStateStore = create<ActionsProps>()((set) => ({
  viewSideBar: false,
  setViewSideBar: (viewSideBar) => set(() => ({ viewSideBar: viewSideBar })),
  isClose:false,
  setisClose:(isClose)=>set(()=>({isClose:isClose})),
}));
