import { BeakerIcon, HomeIcon, MagnifyingGlassCircleIcon, ViewColumnsIcon } from '@heroicons/react/24/solid'
import { useRef } from 'react';
import SideBarButton from './SideBarButton';

/**
 * The app sidebar
 * @returns {JSX.Element}
 */
export default function SideBar() {
  
  return (
    <aside className="flex h-100vh flex-col p-8 bg-black">
      <h1 className="font-title font-bold text-3xl flex items-center mb-[72px]">
        <BeakerIcon className="h-10 w-10" />
        <span className="pl-2">SOUND LAB</span>
      </h1>
      <ul>
        <li className="font-body text-md mb-8">
          <SideBarButton>
            <HomeIcon className="h-6 w-6 mr-2" />
            <span>Home</span>
          </SideBarButton>
        </li>
        <li className="font-body text-md mb-8">
          <SideBarButton>
            <MagnifyingGlassCircleIcon className="h-6 w-6 mr-2" />
            <span>Search</span>
          </SideBarButton>
        </li>
        <li className="font-body text-md">
          <SideBarButton>
            <ViewColumnsIcon className="h-6 w-6 mr-2" />
            <span>Library</span>
          </SideBarButton>
        </li>
      </ul>
    </aside>
  )
}