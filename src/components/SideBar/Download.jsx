import { Icon } from "../../Icons";

function Download() {
  return (
    <a
      href="#"
      className="h-10 text-sm gap-x-4 font-semibold text-link hover:text-white flex flex-shrink-0 items-center px-4"
    >
      <Icon name="download" size={30} />
      Uygulamayı Yükle
    </a>
  );
}

export default Download;
