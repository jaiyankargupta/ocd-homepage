import Image from "next/image";
import twitterlogo from "./twitter.png";
import linkedinlogo from "./linkedin.png";
import githublogo from "./github.png";

function ProfilePicture({}) {
  return (
    <>
      <Image src={githublogo} objectFit="cover" alt="User Profile" width={60} height={70} />
      <div className="mt-4">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 hover:underline flex items-center"
        >
          <Image
            className=" inline-block"
            src={githublogo}
            width={25}
            height={25}
            alt="Github"
          />
          <span className="text-sm ml-1">Github</span>
        </a>
        <div className="">
          <a
            href= '#'
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 hover:underline flex items-center"
          >
            <Image
              className="mt-1 inline-block"
              src={linkedinlogo}
              width={25}
              height={20}
              alt="Linkedin"
            />
            <span className="text-sm ml-1">Linkedin</span>
          </a>
        </div>
        <div className="">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 hover:underline flex items-center"
          >
            <Image
              className="mt-1 inline-block"
              src={twitterlogo}
              width={25}
              height={30}
              alt="Twitter"
            />
            <span className="text-sm ml-1">Twitter</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProfilePicture;
