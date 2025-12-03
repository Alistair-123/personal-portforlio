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
      <Avatar className="size-10 border-2 border-white bg-gray-200 flex items-center justify-center">
        <AvatarFallback>
          <SiFigma size={20} />
        </AvatarFallback>
      </Avatar>

      {/* React */}
      <Avatar className="size-10 border-2 border-white bg-gray-200 flex items-center justify-center">
        <AvatarFallback>
          <SiReact size={20} />
        </AvatarFallback>
      </Avatar>

      {/* Node.js */}
      <Avatar className="size-10 border-2 border-white bg-gray-200 flex items-center justify-center">
        <AvatarFallback>
          <SiNodedotjs size={20} />
        </AvatarFallback>
      </Avatar>

      {/* Express.js */}
      <Avatar className="size-10 border-2 border-white bg-gray-200 flex items-center justify-center">
        <AvatarFallback>
          <SiExpress size={20} />
        </AvatarFallback>
      </Avatar>

      {/* MongoDB */}
      <Avatar className="size-10 border-2 border-white bg-gray-200 flex items-center justify-center">
        <AvatarFallback>
          <SiMongodb size={20} />
        </AvatarFallback>
      </Avatar>

      {/* VSCode */}
      <Avatar className="size-10 border-2 border-white bg-gray-200 flex items-center justify-center">
        <AvatarFallback>
          <DiVisualstudio size={20} />
        </AvatarFallback>
      </Avatar>

      {/* JavaScript */}
      <Avatar className="size-10 border-2 border-white bg-gray-100 flex items-center justify-center">
        <AvatarFallback>
          <SiJavascript size={20} />
        </AvatarFallback>
      </Avatar>

    </div>
  );
}
