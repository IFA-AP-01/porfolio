import Image from "next/image";
import teamImage from "@/public/logo.webp";

export default function ProfileImage() {
  return (
    <div className="flex items-center justify-center h-50 w-full">
        <Image
            src={teamImage}
            alt="IFA Team"
            width="250"
            height="250"
            priority={true}
            className="w-48 sm:w-64 object-cover"
          />
    </div>
  );
}