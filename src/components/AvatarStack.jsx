import { Avatar, AvatarFallback } from "../components/ui/avatar";
import {
  SiFigma,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";
export default function AvatarStack() {
  return (
    <div className="flex -space-x-3">
      
      {/* Figma */}
      <Avatar className="size-10 border-2 border-white bg-gray-200 flex items-center justify-center text-purple-600">
        <AvatarFallback>
          <SiFigma size={20} />
        </AvatarFallback>
      </Avatar>

      {/* React */}
      <Avatar className="size-10 border-2 border-white bg-gray-200 flex items-center justify-center text-blue-400">
        <AvatarFallback>
          <SiReact size={20} />
        </AvatarFallback>
      </Avatar>

      {/* Node.js */}
      <Avatar className="size-10 border-2 border-white bg-gray-200 flex items-center justify-center text-orange-300">
        <AvatarFallback>
          <SiNodedotjs size={20} />
        </AvatarFallback>
      </Avatar>

      {/* Express.js */}
      <Avatar className="size-10 border-2 border-white bg-gray-200 flex items-center justify-center text-red-400">
        <AvatarFallback>
          <SiExpress size={20} />
        </AvatarFallback>
      </Avatar>

      {/* MongoDB */}
      <Avatar className="size-10 border-2 border-white bg-gray-200 flex items-center justify-center text-green-400">
        <AvatarFallback>
          <SiMongodb size={20} />
        </AvatarFallback>
      </Avatar>

      {/* VSCode */}
      <Avatar className="size-10 border-2 border-white bg-gray-200 flex items-center justify-center text-blue-400">
        <AvatarFallback>
          <DiVisualstudio size={20} />
        </AvatarFallback>
      </Avatar>

      {/* JavaScript */}
      <Avatar className="size-10 border-2 border-white bg-gray-100 flex items-center justify-center text-yellow-400">
        <AvatarFallback>
          <SiJavascript size={20} />
        </AvatarFallback>
      </Avatar>

    </div>
  );
}
