import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const routes = [
  {
    icon: EmailIcon,
    url: "mailto:nikatwork365@gmail.com",
  },
  {
    icon: GitHubIcon,
    url: "https://github.com/neerajneeraj365",
  },
  {
    icon: InstagramIcon,
    url: "https://www.instagram.com/neerajbharrdwaj/",
  },
  {
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/neerajneerajweb/",
  },
];

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-20">
      <div className="flex items-center">
        {/* <span className="text-md md:text-lg">Let's Connect:</span> */}
        <ul className="flex px-2 gap-2">
          {routes.map((route, index) => (
            <li key={index}>
              <Link href={route.url} target="_blank">
                <route.icon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
