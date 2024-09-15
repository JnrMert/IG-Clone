function Playlist() {
  return (
    <nav className="mx-6 mt-4 py-2 flex-auto overflow-auto border-t border-white border-opacity-20">
      <ul>
        {new Array(30).fill(
          <li>
            <a
              href=""
              className="text-s text-link hover:text-white flex h-8 items-center"
            >
              1. Çalma Listem
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Playlist;
