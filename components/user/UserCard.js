import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserCard({ user }) {
  return (
    <div className="intro-y col-span-12 md:col-span-6 lg:col-span-4">
      <div className="box">
        <div className="flex items-start px-5 pt-5">
          <div className="w-full flex flex-col lg:flex-row items-center">
            <div className="w-16 h-16 image-fit">
              <img
                alt="alt"
                className="rounded-full"
                src={`https://robohash.org/${Math.random()
                  .toString()
                  .substr(2, 8)}`}
              />
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left p-5">
          <div className="flex items-center justify-center lg:justify-start text-gray-600 mt-1">
            <a href="" className="text-xl">
              {[user.first_name, user.middle_name, user.last_name].join(" ")}
            </a>
          </div>
          <div className="flex items-center justify-center lg:justify-start text-gray-600 mt-1 text-lg ">
            {user.role.label}
          </div>
          <div className="flex items-center justify-center lg:justify-start text-gray-600 mt-5">
            <FontAwesomeIcon icon="envelope" size="lg" />
            <div className="mr-2"></div>
            {user.email}
          </div>
        </div>
        <div className="text-center lg:text-right p-5 border-t border-gray-200 dark:border-dark-5">
          <Link href={`/users/view_details/${user.id}`} passHref={true}>
            <button className="btn btn-primary py-2 px-4">View Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
