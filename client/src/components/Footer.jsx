import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t bg-gray-800 text-gray-300 text-center text-sm">
      <div className="flex justify-center gap-4 mb-2">
        <a
          href="https://github.com/acunetix2/dev-task-manager"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-orange-400"
        >
          <FaGithub className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/acunetix2/dev-task-manager"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-orange-400"
        >
          <FaTwitter className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/iddy-k-chesire-55009b264/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-orange-400"
        >
          <FaLinkedin className="h-5 w-5" />
        </a>
      </div>

      <div className="text-orange-500">
        &copy; {new Date().getFullYear()} Developer Task Manager by Phantom Power Devs | All Rights Reserved
      </div>
    </footer>
  );
}
